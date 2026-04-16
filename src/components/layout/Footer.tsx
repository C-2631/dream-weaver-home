const Footer = () => (
  <footer className="border-t border-border/50 mt-32">
    <div className="container py-12 grid md:grid-cols-4 gap-10">
      <div>
        <div className="font-display text-2xl mb-3">Lumen</div>
        <p className="text-sm text-muted-foreground max-w-xs">
          Immersive real estate. Walk through, design, and call it home — before you arrive.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-3 text-primary">Explore</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Listings</li><li>Neighborhoods</li><li>Agents</li><li>Magazine</li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-3 text-primary">Tools</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>3D Tours</li><li>AR Visualizer</li><li>AI Designer</li><li>Mortgage</li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-3 text-primary">Lumen</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>About</li><li>Press</li><li>Privacy</li><li>Contact</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Lumen Residences. Crafted with intention.
    </div>
  </footer>
);

export default Footer;
