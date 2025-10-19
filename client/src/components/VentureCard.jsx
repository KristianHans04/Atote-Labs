const VentureCard = ({ venture, featured = false }) => {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 fade-in-up">
      <div className="aspect-video bg-muted flex items-center justify-center">
        {venture.imageUrl ? (
          <img
            src={venture.imageUrl}
            alt={venture.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="text-muted-foreground text-4xl font-bold">
            {venture.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-6">
        {featured && (
          <span className="inline-block px-2 py-1 text-xs font-semibold text-accent bg-accent/10 rounded mb-2">
            Featured
          </span>
        )}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
          {venture.name}
        </h3>
        <p className="text-muted-foreground">
          {venture.description}
        </p>
      </div>
    </div>
  );
};

export default VentureCard;
