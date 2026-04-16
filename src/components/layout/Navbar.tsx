import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/map", label: "Map" },
  { to: "/dashboard", label: "Saved" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="container mt-4">
        <nav className="glass-strong rounded-full px-5 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-gold grid place-items-center shadow-glow">
              <Home className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-xl tracking-wide">Lumen</span>
          </Link>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm transition-colors ${
                      isActive ? "bg-primary/15 text-primary" : "text-foreground/80 hover:text-primary"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/properties"
            className="text-sm px-5 py-2 rounded-full bg-gradient-gold text-primary-foreground font-medium hover:shadow-glow transition-shadow"
          >
            Book a Tour
          </Link>
        </nav>
      </div>
      <span className="sr-only">{pathname}</span>
    </motion.header>
  );
};

export default Navbar;
