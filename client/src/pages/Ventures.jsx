import { useEffect, useState } from 'react';
import VentureCard from '../components/VentureCard';

const Ventures = () => {
  const [ventures, setVentures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/ventures')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setVentures(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching ventures:', err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 fade-in">Our Ventures</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in">
          A portfolio of innovative products designed to solve real-world problems and drive meaningful change.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="animate-pulse">
              <div className="aspect-video bg-muted rounded-lg mb-4"></div>
              <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
            </div>
          ))}
        </div>
      ) : ventures.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventures.map(venture => (
            <VentureCard key={venture.id} venture={venture} featured={venture.featured} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No ventures available at the moment.</p>
        </div>
      )}
    </main>
  );
};

export default Ventures;
