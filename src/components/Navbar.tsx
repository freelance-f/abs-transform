import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground tracking-wider">
          ABS <span className="text-primary">FITNESS</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:09505494477"
            className="flex items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:shadow-glow transition-shadow"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-secondary-foreground/10 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-primary-foreground/70 hover:text-primary transition-colors uppercase tracking-wider text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="tel:09505494477"
              className="flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
