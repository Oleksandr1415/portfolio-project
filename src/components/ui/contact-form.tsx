import { useState, useRef } from 'react';
import { cn } from '@/utils/helpers';

const MAX_FILES = 3;
const MAX_FILE_SIZE = 5 * 1024 * 1024;

export default function ContactForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFiles(newFiles: FileList | null) {
    if (!newFiles) return;
    const incoming = Array.from(newFiles);
    const combined = [...files, ...incoming].slice(0, MAX_FILES);

    for (const f of incoming) {
      if (f.size > MAX_FILE_SIZE) {
        setErrorMsg(`${f.name} is over 5MB.`);
        return;
      }
    }
    setErrorMsg('');
    setFiles(combined);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    console.log('sending');

    const formData = new FormData(e.currentTarget);
    files.forEach((file) => formData.append('files', file));

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: formData });
      const data = await res.json();
      console.log('try');
      console.log('res:');
      console.log(res);

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setFiles([]);
      (e.target as HTMLFormElement).reset();
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-xl flex-col gap-5">
      <input
        name="name"
        placeholder="Name"
        required
        className="rounded-full border border-white/20 bg-transparent px-6 py-3 text-white placeholder-white/40 transition-colors duration-300 outline-none focus:border-white/50"
      />
      <input
        name="email"
        type="email"
        placeholder="E-Mail"
        required
        className="rounded-full border border-white/20 bg-transparent px-6 py-3 text-white placeholder-white/40 transition-colors duration-300 outline-none focus:border-white/50"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={5}
        className="rounded-3xl border border-white/20 bg-transparent px-6 py-3 text-white placeholder-white/40 transition-colors duration-300 outline-none focus:border-white/50"
      />

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFiles(e.dataTransfer.files);
        }}
        className="cursor-pointer rounded-3xl border border-dashed border-white/20 px-6 py-8 text-center text-white/50 transition-colors duration-300 hover:border-white/40"
      >
        Drop files here or click to browse (max {MAX_FILES}, 5MB each)
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".pdf,.png,.jpg,.jpeg,.webp"
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
      </div>

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
                className="text-white/40 hover:text-white"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {errorMsg && <p className="text-sm text-red-400">{errorMsg}</p>}
      {status === 'success' && (
        <p className="text-sm text-green-400">Message sent — thanks for reaching out!</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className={cn([
          'group from-primary to-accent mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-linear-to-r px-8 text-sm font-semibold tracking-wide text-white transition-transform duration-300',
          'hover:-translate-y-0.5',
          status === 'sending' && 'cursor-not-allowed opacity-60',
        ])}
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
