import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VentureCard from '../components/VentureCard';

const Home = () => {
  const [featuredVentures, setFeaturedVentures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/ventures/featured')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setFeaturedVentures(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching ventures:', err);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background to-muted overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-accent-foreground px-4 py-2 rounded">
            Skip to main content
          </a>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in">
            Building the Next Generation
            <br />
            <span className="text-accent">of Software</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 fade-in">
            A startup studio that ideates, builds, and launches innovative software products designed to make an impact.
          </p>
          <Link
            to="/ventures"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105 fade-in"
          >
            See Our Ventures
          </Link>
        </div>
      </section>

      <section id="main-content" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Ventures</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our current portfolio of innovative products and solutions.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse">
                <div className="aspect-video bg-muted rounded-lg mb-4"></div>
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVentures.map(venture => (
              <VentureCard key={venture.id} venture={venture} featured={true} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            to="/ventures"
            className="inline-block text-accent font-semibold hover:underline"
          >
            View All Ventures →
          </Link>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="fade-in-up">
              <div className="text-4xl font-bold text-accent mb-2">Innovation</div>
              <h3 className="text-xl font-semibold mb-2">Forward-Thinking</h3>
              <p className="text-muted-foreground">
                We build products that anticipate and solve tomorrow's challenges.
              </p>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-accent mb-2">Quality</div>
              <h3 className="text-xl font-semibold mb-2">Excellence First</h3>
              <p className="text-muted-foreground">
                Every line of code is crafted with precision and attention to detail.
              </p>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-accent mb-2">Impact</div>
              <h3 className="text-xl font-semibold mb-2">Making a Difference</h3>
              <p className="text-muted-foreground">
                Our products are designed to create meaningful change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
