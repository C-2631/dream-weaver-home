import PropertyCard from "@/components/ui/PropertyCard";
import { properties } from "@/data/properties";

const Dashboard = () => (
  <main className="pt-28 pb-20 container">
    <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Your collection</p>
    <h1 className="font-display text-5xl md:text-7xl leading-[1]">Saved <em className="text-gradient-gold not-italic">homes</em></h1>
    <p className="mt-4 text-muted-foreground max-w-md">A few residences you've favorited recently.</p>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.slice(0, 3).map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
    </div>
  </main>
);

export default Dashboard;
