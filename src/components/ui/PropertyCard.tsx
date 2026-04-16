import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize, Heart } from "lucide-react";
import { useState } from "react";
import type { Property } from "@/data/properties";
import PriceCounter from "./PriceCounter";

const badgeStyle: Record<string, string> = {
  New: "bg-accent/20 text-accent border-accent/30",
  Featured: "bg-primary/20 text-primary border-primary/30",
  "Price Drop": "bg-destructive/20 text-destructive border-destructive/30",
};

const PropertyCard = ({ property, index = 0 }: { property: Property; index?: number }) => {
  const [saved, setSaved] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Link to={`/property/${property.slug}`} className="block">
        <div className="glass rounded-2xl overflow-hidden hover-lift">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
            {property.badge && (
              <span className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full backdrop-blur-md border ${badgeStyle[property.badge]}`}>
                {property.badge}
              </span>
            )}
            <button
              onClick={(e) => { e.preventDefault(); setSaved((s) => !s); }}
              className="absolute top-4 right-4 w-10 h-10 rounded-full glass-strong grid place-items-center transition-transform hover:scale-110"
              aria-label="Save property"
            >
              <Heart className={`w-4 h-4 transition-all ${saved ? "fill-destructive text-destructive scale-110" : "text-foreground/80"}`} />
            </button>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <p className="text-xs text-foreground/70 uppercase tracking-widest">{property.neighborhood}, {property.city}</p>
                <h3 className="font-display text-2xl mt-1">{property.title}</h3>
              </div>
            </div>
          </div>
          <div className="p-5 flex items-center justify-between">
            <div>
              <PriceCounter value={property.price} className="font-display text-2xl text-gradient-gold" />
              <p className="text-xs text-muted-foreground mt-1">{property.type}</p>
            </div>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5" />{property.beds}</span>
              <span className="flex items-center gap-1.5"><Bath className="w-3.5 h-3.5" />{property.baths}</span>
              <span className="flex items-center gap-1.5"><Maximize className="w-3.5 h-3.5" />{property.area}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
