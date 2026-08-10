import { cn } from '@/utils/helpers';
import Typewriter from 'typewriter-effect';

interface TextsWithParams {
  deleteSpeed?: number;
  pause?: number;
  text: string;
}

interface TextWriterProps {
  className?: string;
  cursorClassName?: string;
  deleteSpeed?: number;
  loop?: boolean;
  pauseTime?: number;
  texts: string[] | TextsWithParams[];
  typeSpeed?: number;
}
/**
 * TextRotator
 *
 * SIMPLE MODE (default): same typing speed, delete speed, and pause
 * for every string. Just pass `texts`.
 *
 * PER-TEXT MODE: pass `texts` as objects to customize pause/delete speed
 * per string. Typing speed (`typeSpeed`) is always global -- the library
 * doesn't support per-string typing speed.
 *
 * Examples:
 *   <TextRotator texts={["Hello", "World"]} />
 *
 *   <TextRotator
 *     texts={[
 *       { text: "Hello", pause: 1000 },
 *       { text: "World", pause: 2500, deleteSpeed: 10 },
 *     ]}
 *   />
 */
export default function TextWriter({
  className = '',
  cursorClassName = '',
  deleteSpeed = 30,
  loop = true,
  pauseTime = 1500,
  texts = [],
  typeSpeed = 50,
}: TextWriterProps) {
  const normalized = texts.map((t) =>
    typeof t === 'string' ? { text: t, pause: pauseTime, deleteSpeed } : t,
  );

  return (
    <Typewriter
      onInit={(typewriter) => {
        normalized.forEach(({ text, pause = pauseTime, deleteSpeed: ds = deleteSpeed }) => {
          typewriter.typeString(text).pauseFor(pause).deleteAll(ds);
        });
        typewriter.start();
      }}
      options={{
        cursorClassName,
        delay: typeSpeed,
        loop,
        wrapperClassName: cn(['inline ', className]),
      }}
    />
  );
}
