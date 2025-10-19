import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/articles/${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setArticle(data.data);
        } else {
          setError('Article not found');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching article:', err);
        setError('Failed to load article');
        setLoading(false);
      });
  }, [slug]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto animate-pulse">
          <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">{error || 'The article you are looking for does not exist.'}</p>
          <Link to="/insights" className="text-accent font-semibold hover:underline">
            ← Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="max-w-3xl mx-auto">
        <Link to="/insights" className="text-accent font-semibold hover:underline mb-8 inline-block">
          ← Back to Insights
        </Link>

        <header className="mb-8 fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center text-muted-foreground">
            <span>{article.author}</span>
            <span className="mx-2">•</span>
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none fade-in-up">
          <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
            {article.content}
          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-border fade-in-up">
          <Link to="/insights" className="text-accent font-semibold hover:underline">
            ← Back to Insights
          </Link>
        </footer>
      </article>
    </main>
  );
};

export default ArticleDetail;
