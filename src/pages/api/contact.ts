import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB per file
const MAX_TOTAL_SIZE = 15 * 1024 * 1024; // 15MB total
const MAX_FILES = 3;
const ALLOWED_TYPES = ['application/pdf', 'image/png', 'image/jpeg', 'image/webp'];

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();
    const files = formData.getAll('files') as File[];

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), { status: 400 });
    }

    if (files.length > MAX_FILES) {
      return new Response(JSON.stringify({ error: `Max ${MAX_FILES} files allowed.` }), {
        status: 400,
      });
    }

    let totalSize = 0;
    for (const file of files) {
      if (file.size > 0) {
        if (!ALLOWED_TYPES.includes(file.type)) {
          return new Response(JSON.stringify({ error: `File type not allowed: ${file.name}` }), {
            status: 400,
          });
        }
        if (file.size > MAX_FILE_SIZE) {
          return new Response(JSON.stringify({ error: `File too large: ${file.name}` }), {
            status: 400,
          });
        }
        totalSize += file.size;
      }
    }

    if (totalSize > MAX_TOTAL_SIZE) {
      return new Response(JSON.stringify({ error: 'Total attachment size too large.' }), {
        status: 400,
      });
    }

    const attachments = await Promise.all(
      files
        .filter((f) => f.size > 0)
        .map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        })),
    );

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // must be a domain verified in Resend
      to: 'pusamy19982@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      attachments,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Something went wrong.' }), { status: 500 });
  }
};
