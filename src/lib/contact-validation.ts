export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB per file
export const MAX_TOTAL_SIZE = 15 * 1024 * 1024; // 15MB total
export const MAX_FILES = 3;
export const MAX_MESSAGE_LENGTH = 5000;
export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/webp',
] as const;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const EMAIL_FORMAT_HINT = 'Use format: name@example.com';
export const EMAIL_INVALID_MESSAGE =
  'Enter a valid email address (e.g. name@example.com). Include @ and a domain with a dot.';

export function isValidEmail(email: string) {
  return EMAIL_REGEX.test(email.trim());
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  files: File[];
}

export function validateContactForm({ name, email, message, files }: ContactFormValues) {
  if (!name || !email || !message) {
    return { ok: false as const, error: 'Missing required fields.' };
  }

  if (!isValidEmail(email)) {
    return { ok: false as const, error: EMAIL_INVALID_MESSAGE, field: 'email' as const };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return { ok: false as const, error: 'Message too long.' };
  }

  if (files.length > MAX_FILES) {
    return { ok: false as const, error: `Max ${MAX_FILES} files allowed.` };
  }

  let totalSize = 0;

  for (const file of files) {
    if (file.size <= 0) continue;

    if (!ALLOWED_FILE_TYPES.includes(file.type as (typeof ALLOWED_FILE_TYPES)[number])) {
      return { ok: false as const, error: `File type not allowed: ${file.name}` };
    }

    if (file.size > MAX_FILE_SIZE) {
      return { ok: false as const, error: `File too large: ${file.name}` };
    }

    totalSize += file.size;
  }

  if (totalSize > MAX_TOTAL_SIZE) {
    return { ok: false as const, error: 'Total attachment size too large.' };
  }

  return { ok: true as const };
}

export function validateIncomingFiles(existingFiles: File[], incomingFiles: File[]) {
  const combined = [...existingFiles, ...incomingFiles];

  if (combined.length > MAX_FILES) {
    return { ok: false as const, error: `Max ${MAX_FILES} files allowed.` };
  }

  let totalSize = existingFiles.reduce((sum, file) => sum + file.size, 0);

  for (const file of incomingFiles) {
    if (file.size <= 0) continue;

    if (!ALLOWED_FILE_TYPES.includes(file.type as (typeof ALLOWED_FILE_TYPES)[number])) {
      return { ok: false as const, error: `File type not allowed: ${file.name}` };
    }

    if (file.size > MAX_FILE_SIZE) {
      return { ok: false as const, error: `File too large: ${file.name}` };
    }

    totalSize += file.size;
  }

  if (totalSize > MAX_TOTAL_SIZE) {
    return { ok: false as const, error: 'Total attachment size too large.' };
  }

  return { ok: true as const, files: combined.slice(0, MAX_FILES) };
}
