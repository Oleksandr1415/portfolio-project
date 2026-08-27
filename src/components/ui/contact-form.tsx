import { useState } from 'react';
import Button from '@/partials/button/button';
import {
  EMAIL_FORMAT_HINT,
  EMAIL_INVALID_MESSAGE,
  MAX_FILES,
  MAX_MESSAGE_LENGTH,
  isValidEmail,
  validateContactForm,
  validateIncomingFiles,
} from '@/lib/contact-validation';

export default function ContactForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [emailError, setEmailError] = useState('');

  function handleFiles(newFiles: FileList | null) {
    if (!newFiles) return;

    const incoming = Array.from(newFiles);
    const validation = validateIncomingFiles(files, incoming);

    if (!validation.ok) {
      setErrorMsg(validation.error);
      return;
    }

    setErrorMsg('');
    setFiles(validation.files);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setErrorMsg('');
  }

  function validateEmailField(value: string) {
    const trimmed = value.trim();

    if (!trimmed) {
      setEmailError('Email is required.');
      return false;
    }

    if (!isValidEmail(trimmed)) {
      setEmailError(EMAIL_INVALID_MESSAGE);
      return false;
    }

    setEmailError('');
    return true;
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email')?.toString().trim() ?? '';

    if (!validateEmailField(email)) {
      setStatus('error');
      return;
    }

    const validation = validateContactForm({
      name: formData.get('name')?.toString().trim() ?? '',
      email,
      message: formData.get('message')?.toString().trim() ?? '',
      files,
    });

    if (!validation.ok) {
      if ('field' in validation && validation.field === 'email') {
        setEmailError(validation.error);
      } else {
        setErrorMsg(validation.error);
      }
      setStatus('error');
      return;
    }

    setStatus('sending');

    files.forEach((file) => formData.append('files', file));

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: formData });
      const data = await res.json();

      if (!res.ok) {
        if (data.error === EMAIL_INVALID_MESSAGE || data.error?.includes('email')) {
          setEmailError(data.error);
        } else {
          setErrorMsg(data.error ?? 'Something went wrong.');
        }
        setStatus('error');
        return;
      }

      setStatus('success');
      setEmailError('');
      setFiles([]);
      form.reset();
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-xl flex-col gap-5"
      noValidate
    >
      <label htmlFor="contact-name" className="sr-only">
        Name
      </label>
      <input
        id="contact-name"
        name="name"
        placeholder="Name"
        required
        autoComplete="name"
        className="focus-ring rounded-full border border-white/20 bg-transparent px-6 py-3 text-white placeholder-white/40 transition-colors duration-300"
      />

      <div className="flex flex-col gap-1">
        <label htmlFor="contact-email" className="sr-only">
          E-Mail
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="name@example.com"
          required
          aria-invalid={emailError ? true : undefined}
          aria-describedby="contact-email-hint contact-email-error"
          onBlur={(e) => {
            if (e.target.value.trim()) validateEmailField(e.target.value);
          }}
          onChange={() => {
            if (emailError) setEmailError('');
          }}
          className={`focus-ring rounded-full border bg-transparent px-6 py-3 text-white placeholder-white/40 transition-colors duration-300 ${
            emailError ? 'border-red-400/70' : 'border-white/20'
          }`}
        />
        <p id="contact-email-hint" className="text-text-gray px-6 text-xs">
          {EMAIL_FORMAT_HINT}
        </p>
        {emailError && (
          <p id="contact-email-error" role="alert" className="px-6 text-xs text-red-400">
            {emailError}
          </p>
        )}
      </div>

      <label htmlFor="contact-message" className="sr-only">
        Message
      </label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="Message"
        required
        rows={5}
        maxLength={MAX_MESSAGE_LENGTH}
        className="focus-ring rounded-3xl border border-white/20 bg-transparent px-6 py-3 text-white placeholder-white/40 transition-colors duration-300"
      />

      <label
        htmlFor="contact-files"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFiles(e.dataTransfer.files);
        }}
        className="focus-ring text-text-gray-light cursor-pointer rounded-3xl border border-dashed border-white/20 px-6 py-8 text-center transition-colors duration-300 hover:border-white/40"
      >
        Drop files here or click to browse (max {MAX_FILES}, 5MB each, 15MB total)
        <input
          id="contact-files"
          type="file"
          multiple
          accept=".pdf,.png,.jpg,.jpeg,.webp"
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
      </label>

      {files.length > 0 && (
        <ul className="flex flex-col gap-2">
          {files.map((file, i) => (
            <li
              key={file.name + i}
              className="flex items-center justify-between rounded-full border border-white/10 px-4 py-2 text-sm text-white/70"
            >
              {file.name}
              <button
                type="button"
                onClick={() => removeFile(i)}
                aria-label={`Remove ${file.name}`}
                className="focus-ring text-text-gray rounded-sm px-1 hover:text-white"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {errorMsg && (
        <p role="alert" className="text-sm text-red-400">
          {errorMsg}
        </p>
      )}
      {status === 'success' && (
        <p role="status" className="text-sm text-green-400">
          Message sent — thanks for reaching out!
        </p>
      )}

      <Button type="submit" variant="primary" className="mt-2" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  );
}
