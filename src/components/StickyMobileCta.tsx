const StickyMobileCta = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-secondary/95 backdrop-blur-md border-t border-secondary-foreground/10 p-3">
      <a
        href="https://wa.me/919505494477?text=I'd like to book a free trial session at ABS Fitness"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-gradient-primary text-primary-foreground py-4 rounded-lg font-heading text-lg tracking-wider shadow-glow"
      >
        BOOK FREE TRIAL
      </a>
    </div>
  );
};

export default StickyMobileCta;
