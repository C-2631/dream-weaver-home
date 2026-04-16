import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, Map as MapIcon, LayoutGrid } from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";
import PropertyMap from "@/components/map/PropertyMap";
import { properties } from "@/data/properties";

const types = ["All", "Villa", "Penthouse", "Loft", "House"] as const;

const Properties = () => {
  const [type, setType] = useState<(typeof types)[number]>("All");
  const [maxPrice, setMaxPrice] = useState(10_000_000);
  const [view, setView] = useState<"split" | "grid">("split");

  const filtered = useMemo(
    () => properties.filter((p) => (type === "All" || p.type === type) && p.price <= maxPrice),
    [type, maxPrice]
  );

  return (
    <main className="pt-28 pb-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Listings</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1]">
            Browse the <em className="text-gradient-gold not-italic">collection</em>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            {filtered.length} residences across {new Set(filtered.map((p) => p.city)).size} cities.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-10 glass-strong rounded-2xl p-4 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            <SlidersHorizontal className="w-4 h-4 text-primary" />
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-4 py-2 rounded-full text-xs transition-all ${
                  type === t ? "bg-gradient-gold text-primary-foreground" : "bg-secondary/60 text-foreground/70 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 min-w-[260px]">
              <span className="text-xs text-muted-foreground whitespace-nowrap">Max ${(maxPrice / 1_000_000).toFixed(1)}M</span>
              <input
                type="range" min={500_000} max={10_000_000} step={100_000}
                value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="flex-1 accent-primary"
              />
            </div>
            <div className="flex items-center gap-1 bg-secondary/60 rounded-full p-1">
              <button onClick={() => setView("split")} className={`p-2 rounded-full ${view === "split" ? "bg-primary/20 text-primary" : "text-muted-foreground"}`}>
                <MapIcon className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => setView("grid")} className={`p-2 rounded-full ${view === "grid" ? "bg-primary/20 text-primary" : "text-muted-foreground"}`}>
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Grid + Map */}
        {view === "split" ? (
          <div className="mt-8 grid lg:grid-cols-[1fr,1fr] gap-6 items-start">
            <div className="grid sm:grid-cols-2 gap-6">
              {filtered.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
            <div className="lg:sticky lg:top-28 h-[600px] lg:h-[calc(100vh-9rem)]">
              <PropertyMap properties={filtered} />
            </div>
          </div>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Properties;
