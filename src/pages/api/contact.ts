import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { validateContactForm } from '@/lib/contact-validation';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get('name')?.toString().trim() ?? '';
    const email = formData.get('email')?.toString().trim() ?? '';
    const message = formData.get('message')?.toString().trim() ?? '';
    const files = formData.getAll('files') as File[];

    const validation = validateContactForm({ name, email, message, files });

    if (!validation.ok) {
      return new Response(JSON.stringify({ error: validation.error }), { status: 400 });
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
