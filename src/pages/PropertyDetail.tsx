import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Bed, Bath, Maximize, MapPin, Calendar, ArrowLeft, Box, LayoutDashboard, Sparkles, Image as ImgIcon } from "lucide-react";
import { getProperty } from "@/data/properties";
import KineticHeading, { Reveal } from "@/components/ui/KineticHeading";
import RoomScene from "@/components/three/RoomScene";
import PriceCounter from "@/components/ui/PriceCounter";

type Tab = "overview" | "tour" | "plan" | "ai";
const tabs: { id: Tab; label: string; icon: typeof Box }[] = [
  { id: "overview", label: "Overview", icon: ImgIcon },
  { id: "tour", label: "3D Tour", icon: Box },
  { id: "plan", label: "Floor Plan", icon: LayoutDashboard },
  { id: "ai", label: "AI Design", icon: Sparkles },
];

const PropertyDetail = () => {
  const { slug } = useParams();
  const property = getProperty(slug || "");
  const [tab, setTab] = useState<Tab>("overview");
  const [activeImg, setActiveImg] = useState(0);

  if (!property) {
    return (
      <main className="pt-32 container">
        <p className="text-muted-foreground">Property not found.</p>
        <Link to="/properties" className="text-primary text-sm">← Back to listings</Link>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-20">
      <div className="container">
        <Link to="/properties" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="w-3 h-3" /> All listings
        </Link>

        {/* HERO GALLERY */}
        <div className="grid lg:grid-cols-[1fr,360px] gap-6">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass">
            <motion.img
              key={activeImg}
              initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              src={property.gallery[activeImg]}
              alt={property.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              {property.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-1 h-1 rounded-full transition-all ${i === activeImg ? "bg-primary" : "bg-foreground/30"}`}
                />
              ))}
            </div>
          </div>

          {/* Floating info card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="glass-strong rounded-3xl p-7 flex flex-col gap-5"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary flex items-center gap-1.5">
                <MapPin className="w-3 h-3" /> {property.city}
              </p>
              <KineticHeading as="h1" className="text-4xl mt-2">{property.title}</KineticHeading>
            </div>

            <div className="flex items-end justify-between border-y border-border/50 py-4">
              <PriceCounter value={property.price} className="font-display text-4xl text-gradient-gold" />
              <span className="text-xs text-muted-foreground">USD</span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { icon: Bed, label: "Beds", v: property.beds },
                { icon: Bath, label: "Baths", v: property.baths },
                { icon: Maximize, label: "ft²", v: property.area },
              ].map(({ icon: Icon, label, v }) => (
                <div key={label} className="bg-secondary/40 rounded-xl p-3">
                  <Icon className="w-4 h-4 text-primary mx-auto" />
                  <p className="font-display text-xl mt-1">{v}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>

            <button className="w-full py-3 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium hover:shadow-glow transition-shadow flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" /> Book a Tour
            </button>
            <button className="w-full py-3 rounded-full glass text-sm hover:bg-primary/10 transition-colors">
              Contact Agent
            </button>
          </motion.div>
        </div>

        {/* TABS */}
        <div className="mt-10 glass-strong rounded-full p-1.5 inline-flex">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-2.5 rounded-full text-xs flex items-center gap-2 transition-all ${
                tab === t.id ? "bg-gradient-gold text-primary-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <t.icon className="w-3.5 h-3.5" /> {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {tab === "overview" && (
            <Reveal>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 glass rounded-2xl p-8">
                  <h2 className="font-display text-3xl mb-4">About this residence</h2>
                  <p className="text-foreground/80 leading-relaxed">{property.description}</p>
                  <h3 className="font-display text-xl mt-8 mb-3">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((a) => (
                      <span key={a} className="px-3 py-1.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">{a}</span>
                    ))}
                  </div>
                </div>
                <div className="glass rounded-2xl p-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Listed by</p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold grid place-items-center font-display text-lg text-primary-foreground">L</div>
                    <div>
                      <p className="font-display text-lg leading-none">Lumen Atelier</p>
                      <p className="text-xs text-muted-foreground mt-1">Verified · 4.9★</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">Concierge real estate, by appointment only.</p>
                </div>
              </div>
            </Reveal>
          )}

          {tab === "tour" && (
            <Reveal>
              <div className="h-[70vh]"><RoomScene /></div>
              <p className="text-xs text-muted-foreground text-center mt-3">Drag to look around · Scroll to zoom</p>
            </Reveal>
          )}

          {tab === "plan" && (
            <Reveal>
              <div className="glass rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center">
                <svg viewBox="0 0 400 300" className="w-full">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="400" height="300" fill="url(#grid)" />
                  {[
                    { x: 20, y: 20, w: 200, h: 140, label: "Living" },
                    { x: 220, y: 20, w: 160, h: 80, label: "Kitchen" },
                    { x: 220, y: 100, w: 160, h: 60, label: "Dining" },
                    { x: 20, y: 160, w: 130, h: 120, label: "Bed 1" },
                    { x: 150, y: 160, w: 130, h: 120, label: "Bed 2" },
                    { x: 280, y: 160, w: 100, h: 120, label: "Bath" },
                  ].map((r) => (
                    <g key={r.label} className="cursor-pointer group">
                      <rect x={r.x} y={r.y} width={r.w} height={r.h} fill="hsl(var(--primary) / 0.08)" stroke="hsl(var(--primary) / 0.6)" strokeWidth="1.5" className="transition-all group-hover:fill-[hsl(var(--primary)/0.25)]" />
                      <text x={r.x + r.w / 2} y={r.y + r.h / 2} textAnchor="middle" dominantBaseline="middle" className="fill-foreground font-display text-sm">{r.label}</text>
                    </g>
                  ))}
                </svg>
                <div>
                  <h2 className="font-display text-3xl mb-3">Floor 01</h2>
                  <p className="text-muted-foreground text-sm">Hover over any room to highlight. Click to enter the 3D tour from that vantage. Total {property.area} ft².</p>
                </div>
              </div>
            </Reveal>
          )}

          {tab === "ai" && (
            <Reveal>
              <div className="glass-strong rounded-2xl p-10 text-center max-w-2xl mx-auto">
                <Sparkles className="w-10 h-10 text-primary mx-auto" />
                <h2 className="font-display text-4xl mt-4">Design with Aria</h2>
                <p className="text-muted-foreground mt-3">
                  Open Aria from the bottom-right and tell her how you'd want this space to feel. She'll suggest palettes, furniture, and styles tailored to {property.title}.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </main>
  );
};

export default PropertyDetail;
