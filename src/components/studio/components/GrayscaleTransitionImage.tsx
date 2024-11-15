import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

const MotionImage = motion.img;

export function GrayscaleTransitionImage({
  src,
  alt = "",
  className = "",
  quality,
  sizes,
  priority,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 35%"],
  });

  const grayscale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1]);
  const filter = useMotionTemplate`grayscale(${grayscale})`;

  return (
    <div ref={ref} className="group relative">
      <MotionImage
        src={src}
        alt={alt}
        className={className}
        style={{ filter }}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
      />
      <div
        className="pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <img
          src={src}
          alt={alt}
          className={className}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
        />
      </div>
    </div>
  );
}
