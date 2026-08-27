import { useState } from 'react';
import { Mail, Send, X } from 'lucide-react';
import ContactForm from '@/components/ui/contact-form.tsx';
import Button from '@/partials/button/button';
import type { ui } from '@/i18n/ui';

type ButtonLabels = {
  [K in keyof Pick<(typeof ui)['en']['button'], 'sayHello' | 'close'>]: string;
};

export interface CtaContactProps {
  labels: ButtonLabels;
}

export default function CtaContact({ labels }: CtaContactProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-40 flex w-full flex-col items-center">
      <Button variant="primary" className="mt-8" onClick={() => setOpen((prev) => !prev)}>
        <div className="relative size-5">
          {open && <X className="absolute top-0 left-0 size-5" />}
          {!open && (
            <>
              <Mail className="absolute top-0 left-0 size-5 opacity-100 transition-all duration-300 group-hover:scale-50 group-hover:opacity-0" />
              <Send className="absolute top-0 left-0 size-5 scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            </>
          )}
        </div>
        <span className="transition-all duration-300">{open ? labels.close : labels.sayHello}</span>
      </Button>

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
