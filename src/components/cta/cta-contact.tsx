import { useState } from 'react';
import { Mail, Send, X } from 'lucide-react';
import ContactForm from '@/components/ui/contact-form.tsx';

export default function CtaContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-40 flex w-full flex-col items-center">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="group bg-gradient-hero hover:bg-gradient-hero-hover mt-8 flex max-w-40 items-center justify-center rounded-[9999px] p-4 text-white no-underline duration-300"
      >
        <div className="relative size-5">
          {open && <X className="absolute top-0 left-0 size-5" />}
          {!open && (
            <>
              <Mail className="absolute top-0 left-0 size-5 opacity-100 transition-all duration-300 group-hover:scale-50 group-hover:opacity-0" />
              <Send className="absolute top-0 left-0 size-5 scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            </>
          )}
        </div>
        <span className="pl-2 transition-all duration-300">{open ? 'Close' : 'Say Hello !'}</span>
      </button>

      <div
        className={`w-full overflow-hidden transition-all duration-500 ease-out ${
          open ? 'mt-10 max-h-300 opacity-100' : 'mt-0 max-h-0 opacity-0'
        }`}
      >
        <ContactForm />
      </div>
    </div>
  );
}
