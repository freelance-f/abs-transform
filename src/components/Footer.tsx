const Footer = () => {
  return (
    <footer className="bg-secondary py-10 border-t border-secondary-foreground/10">
      <div className="container mx-auto text-center">
        <p className="font-heading text-2xl font-bold text-primary-foreground mb-2">
          ABS <span className="text-primary">FITNESS</span>
        </p>
        <p className="text-primary-foreground/40 font-body text-sm mb-6">
          Transform Your Body. Rebuild Your Confidence.
        </p>
        <p className="text-primary-foreground/30 font-body text-xs">
          © {new Date().getFullYear()} ABS Fitness, Visakhapatnam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
