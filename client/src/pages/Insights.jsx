import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Insights = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setArticles(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching articles:', err);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 fade-in">Insights</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in">
          Thoughts, learnings, and updates from the Atote Labs team on building great software.
        </p>
      </div>

      {loading ? (
        <div className="max-w-4xl mx-auto space-y-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="animate-pulse border border-border rounded-lg p-6">
              <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-muted rounded w-full mb-2"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </div>
          ))}
        </div>
      ) : articles.length > 0 ? (
        <div className="max-w-4xl mx-auto space-y-6">
          {articles.map(article => (
            <article
              key={article.id}
              className="border border-border rounded-lg p-6 hover:border-accent transition-colors fade-in-up"
            >
              <Link to={`/insights/${article.slug}`}>
                <h2 className="text-2xl font-bold mb-2 hover:text-accent transition-colors">
                  {article.title}
                </h2>
              </Link>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <span>{article.author}</span>
                <span className="mx-2">•</span>
                <time dateTime={article.publishedAt}>
                  {formatDate(article.publishedAt)}
                </time>
              </div>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <Link
                to={`/insights/${article.slug}`}
                className="text-accent font-semibold hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No articles available at the moment.</p>
        </div>
      )}
    </main>
  );
};

export default Insights;
