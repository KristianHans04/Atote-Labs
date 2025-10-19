const About = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 fade-in">About Atote Labs</h1>
          <p className="text-lg text-muted-foreground fade-in">
            Building exceptional software that shapes the future
          </p>
        </div>

        <div className="aspect-video bg-muted rounded-lg mb-12 flex items-center justify-center fade-in-up">
          <span className="text-6xl font-bold text-muted-foreground">Atote Labs</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12 fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Atote Labs, we envision a future where technology seamlessly integrates with human needs, creating solutions that are not just functional, but transformative. We are a startup studio dedicated to building the next generation of software products that make a lasting impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to identify opportunities, ideate innovative solutions, and execute with precision to bring impactful products to market. We believe in the power of thoughtful design, robust engineering, and user-centric development.
            </p>
          </section>

          <section className="mb-12 fade-in-up">
            <h2 className="text-3xl font-bold mb-4">The Studio Model</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unlike traditional companies that focus on a single product, we operate as a startup studio. This approach allows us to explore multiple opportunities simultaneously, validate ideas rapidly, and scale successful ventures while maintaining lean operations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each venture we create is built with the same core principles: exceptional quality, user focus, and sustainable scalability. We leverage shared resources, knowledge, and infrastructure across all our products, allowing us to move quickly while maintaining high standards.
            </p>
          </section>

          <section className="mb-12 fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-accent">Quality Over Speed</h3>
                <p className="text-muted-foreground">
                  We prioritize building robust, well-architected solutions over rushing to market with half-baked products.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-accent">User-Centric Design</h3>
                <p className="text-muted-foreground">
                  Every decision we make is guided by the needs and experiences of our users.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-accent">Innovation Through Iteration</h3>
                <p className="text-muted-foreground">
                  We believe in continuous improvement, learning from data, and evolving our products over time.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-accent">Sustainable Growth</h3>
                <p className="text-muted-foreground">
                  We build businesses that are designed to last, with sustainable models and long-term thinking.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Based in Nairobi</h2>
            <p className="text-muted-foreground leading-relaxed">
              Operating from Nairobi, Kenya, we are part of a vibrant and growing tech ecosystem. We build products with a global perspective, leveraging local talent and insights to create solutions that resonate worldwide.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
};

export default About;
