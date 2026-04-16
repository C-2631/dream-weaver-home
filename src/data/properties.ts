import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";

export type Property = {
  id: string;
  slug: string;
  title: string;
  city: string;
  neighborhood: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  type: "Villa" | "Penthouse" | "Loft" | "House";
  image: string;
  gallery: string[];
  lat: number;
  lng: number;
  badge?: "New" | "Featured" | "Price Drop";
  amenities: string[];
  description: string;
};

export const properties: Property[] = [
  {
    id: "1",
    slug: "arched-walnut-villa",
    title: "Arched Walnut Villa",
    city: "Lisbon",
    neighborhood: "Sintra Hills",
    price: 2_450_000,
    beds: 5,
    baths: 4,
    area: 4200,
    type: "Villa",
    image: p1,
    gallery: [p1, p2, p4],
    lat: 38.797,
    lng: -9.39,
    badge: "Featured",
    amenities: ["Pool", "Wine Cellar", "Smart Home", "Garden"],
    description:
      "A sculptural villa carved into the Sintra hillside. Cathedral ceilings, hand-finished walnut, and a glass facade that frames the Atlantic at dusk.",
  },
  {
    id: "2",
    slug: "skyline-penthouse",
    title: "Skyline Penthouse",
    city: "New York",
    neighborhood: "TriBeCa",
    price: 5_900_000,
    beds: 3,
    baths: 3,
    area: 2800,
    type: "Penthouse",
    image: p2,
    gallery: [p2, p3, p1],
    lat: 40.7195,
    lng: -74.009,
    badge: "New",
    amenities: ["Concierge", "Roof Terrace", "Fireplace"],
    description:
      "A corner penthouse perched above lower Manhattan, with floor-to-ceiling glass and a private terrace facing the Hudson.",
  },
  {
    id: "3",
    slug: "japandi-retreat",
    title: "Japandi Retreat",
    city: "Kyoto",
    neighborhood: "Higashiyama",
    price: 1_180_000,
    beds: 2,
    baths: 2,
    area: 1400,
    type: "House",
    image: p3,
    gallery: [p3, p1, p4],
    lat: 35.0036,
    lng: 135.7822,
    amenities: ["Tea Room", "Zen Garden", "Tatami"],
    description:
      "A serene Japandi residence near the temples of Higashiyama — paper lanterns, blonde oak, and a private moss garden.",
  },
  {
    id: "4",
    slug: "coastal-brass-residence",
    title: "Coastal Brass Residence",
    city: "Malibu",
    neighborhood: "Point Dume",
    price: 8_400_000,
    beds: 4,
    baths: 5,
    area: 5100,
    type: "House",
    image: p4,
    gallery: [p4, p1, p2],
    lat: 34.0094,
    lng: -118.806,
    badge: "Price Drop",
    amenities: ["Ocean View", "Chef's Kitchen", "Infinity Pool"],
    description:
      "Brass-clad coastal architecture facing the Pacific. Sun pours through marble and glass from morning until last light.",
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
