import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const seedReplies = [
  "For a Scandinavian feel, pair warm oak floors with linen drapery in #E8E2D5 and a sculptural ceramic pendant. Add a sage velvet armchair as your accent.",
  "Try a Japandi palette: walls in #DCD3C4, accents in #2E2A24, and a paper lantern over the dining nook. Keep silhouettes low and natural.",
  "Industrial lofts love brass + smoked oak. Use #3A2E23 for cabinetry, #B58E5C brass fixtures, and one sculptural pendant per zone.",
];

const AriaAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi, I'm Aria — your interior designer. Tell me about the space you're imagining." },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Msg = { role: "user", content: input };
    const reply: Msg = { role: "assistant", content: seedReplies[Math.floor(Math.random() * seedReplies.length)] };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => setMessages((m) => [...m, reply]), 600);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-gold shadow-glow grid place-items-center animate-pulse-glow shimmer"
        aria-label="Open Aria AI"
      >
        <Sparkles className="w-6 h-6 text-primary-foreground relative z-10" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[520px] glass-strong rounded-2xl flex flex-col overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-border/50 flex items-center justify-between bg-gradient-gold/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-gold grid place-items-center">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-lg leading-none">Aria</p>
                  <p className="text-[10px] text-muted-foreground">Interior Designer · AI</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] text-sm px-3 py-2 rounded-2xl ${
                    m.role === "user"
                      ? "ml-auto bg-primary/20 text-foreground rounded-br-sm"
                      : "bg-secondary/60 text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </motion.div>
              ))}
            </div>

            <div className="p-3 border-t border-border/50 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Make it Japandi..."
                className="flex-1 bg-secondary/60 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button onClick={send} className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center hover:shadow-glow transition-shadow">
                <Send className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AriaAssistant;
