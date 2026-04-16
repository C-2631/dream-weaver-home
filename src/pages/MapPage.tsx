import PropertyMap from "@/components/map/PropertyMap";
import { properties } from "@/data/properties";

const MapPage = () => (
  <main className="pt-24 pb-10">
    <div className="container">
      <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Explorer</p>
      <h1 className="font-display text-5xl md:text-7xl leading-[1]">
        The world, <em className="text-gradient-gold not-italic">mapped</em>.
      </h1>
      <div className="mt-8 h-[75vh]">
        <PropertyMap properties={properties} />
      </div>
    </div>
  </main>
);

export default MapPage;
