import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = { children: string; className?: string; gradient?: boolean; as?: "h1" | "h2" | "h3" };

const KineticHeading = ({ children, className = "", gradient, as: Tag = "h1" }: Props) => {
  const words = children.split(" ");
  return (
    <Tag className={`font-display leading-[0.95] ${className}`}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em] overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${gradient && wi === words.length - 1 ? "text-gradient-gold italic" : ""}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 + wi * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default KineticHeading;

export const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);
