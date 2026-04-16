import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Box, Sparkles, MapPin, ArrowRight } from "lucide-react";
import { useRef } from "react";
import hero from "@/assets/hero-villa.jpg";
import KineticHeading, { Reveal } from "@/components/ui/KineticHeading";
import PropertyCard from "@/components/ui/PropertyCard";
import PriceCounter from "@/components/ui/PriceCounter";
import { properties } from "@/data/properties";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="relative">
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] overflow-hidden grain">
        <motion.div style={{ y: yBg }} className="absolute inset-0">
          <img src={hero} alt="Hillside villa at dusk" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </motion.div>

        <motion.div style={{ y: yText, opacity }} className="relative z-10 container h-full flex flex-col justify-end pb-20 md:pb-32">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-6"
          >
            Lumen — Residences in 3D
          </motion.p>

          <KineticHeading className="text-[clamp(3.5rem,11vw,10rem)]" gradient>
            Find Your Perfect Space
          </KineticHeading>

          <Reveal delay={0.8}>
            <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/80">
              Walk through extraordinary homes in 3D. Place furniture in AR. Design with Aria, our resident AI architect — before you ever pick up the keys.
            </p>
          </Reveal>

          {/* Search bar */}
          <Reveal delay={1.0}>
            <div className="mt-10 glass-strong rounded-full p-2 flex items-center gap-2 max-w-2xl">
              <div className="flex items-center gap-3 flex-1 px-4">
                <Search className="w-4 h-4 text-primary" />
                <input
                  placeholder="Lisbon · Penthouse · 3+ beds"
                  className="bg-transparent flex-1 outline-none text-sm py-3 placeholder:text-muted-foreground"
                />
              </div>
              <Link to="/properties" className="px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium hover:shadow-glow transition-shadow">
                Explore
              </Link>
            </div>
          </Reveal>
        </motion.div>

        {/* Floating glass stat card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4, duration: 1 }}
          className="hidden lg:flex absolute right-10 top-1/3 z-10 glass-strong rounded-2xl p-6 w-64 flex-col gap-4 animate-float"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Featured</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30">Live</span>
          </div>
          <div>
            <p className="font-display text-2xl">Sintra Hills</p>
            <p className="text-xs text-muted-foreground">Lisbon, Portugal</p>
          </div>
          <div className="flex items-end justify-between">
            <PriceCounter value={2450000} className="font-display text-3xl text-gradient-gold" />
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="container -mt-20 relative z-20">
        <div className="glass-strong rounded-3xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border/40">
          {[
            { v: 1280, label: "Curated homes" },
            { v: 42, label: "Cities" },
            { v: 9800, label: "Happy buyers" },
            { v: 4, label: "Continents" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-6 md:p-8 text-center">
                <PriceCounter value={s.v} prefix="" className="font-display text-3xl md:text-5xl text-gradient-gold" />
                <p className="text-xs md:text-sm text-muted-foreground mt-2">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS — BENTO */}
      <section className="container py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">How it works</p>
          <h2 className="font-display text-5xl md:text-7xl max-w-3xl leading-[1]">
            From <em className="text-gradient-gold not-italic">screen</em> to <em className="text-gradient-gold not-italic">keys</em>.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[220px]">
          {[
            { icon: Box, title: "3D Walk-through", desc: "Stroll through every room from your couch.", span: "md:col-span-2 md:row-span-2" },
            { icon: Sparkles, title: "AR Furniture", desc: "Place virtual sofas in your real space.", span: "md:col-span-1" },
            { icon: MapPin, title: "Map Search", desc: "Find your neighborhood, not just an address.", span: "md:col-span-1" },
            { icon: Sparkles, title: "Aria · AI Designer", desc: "Get on-demand interior advice from a designer that never sleeps.", span: "md:col-span-2" },
            { icon: ArrowRight, title: "Move in", desc: "We close the loop with verified agents.", span: "md:col-span-2" },
          ].map((b, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className={`glass rounded-2xl p-6 hover-lift relative overflow-hidden h-full ${b.span}`}>
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
                <b.icon className="w-6 h-6 text-primary" />
                <h3 className="font-display text-2xl md:text-3xl mt-6">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-xs">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-12">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Featured</p>
            <h2 className="font-display text-4xl md:text-6xl">Hand-picked residences.</h2>
          </Reveal>
          <Link to="/properties" className="hidden md:inline-flex items-center gap-2 text-sm text-primary hover:gap-4 transition-all">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>
      </section>

      {/* AI TEASER */}
      <section className="container py-32">
        <Reveal>
          <div className="glass-strong rounded-3xl p-10 md:p-16 relative overflow-hidden grain">
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
            <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-destructive/10 blur-[120px]" />
            <div className="relative z-10 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 flex items-center gap-2">
                <Sparkles className="w-3 h-3" /> Meet Aria
              </p>
              <h2 className="font-display text-5xl md:text-7xl leading-[1]">
                Your <em className="text-gradient-gold not-italic">designer</em>, on call.
              </h2>
              <p className="mt-6 text-foreground/80 max-w-lg">
                Snap a photo of any room. Aria suggests palettes, furniture, and renovations — instantly. From Japandi to Industrial, she speaks every dialect of beautiful.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium hover:shadow-glow transition-shadow">
                Open Aria <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Home;
