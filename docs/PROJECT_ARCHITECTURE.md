# Atote Labs - Project Architecture

## Overview

Atote Labs website is built using the PERN stack (PostgreSQL, Express, React, Node.js) with a clear separation between frontend and backend concerns.

## System Architecture

### High-Level Architecture

```
┌─────────────────┐
│   Client        │
│   (React)       │
│   Port: 5173    │
└────────┬────────┘
         │
         │ HTTP/REST API
         │
┌────────▼────────┐
│   Server        │
│   (Express)     │
│   Port: 5000    │
└────────┬────────┘
         │
         │ Prisma ORM
         │
┌────────▼────────┐
│   Database      │
│  (PostgreSQL)   │
└─────────────────┘
```

## Frontend Architecture

### Technology Stack
- React 19
- React Router for navigation
- TailwindCSS V4 for styling
- Vite for build tooling

### Directory Structure
```
client/src/
├── components/       # Reusable UI components
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── VentureCard.jsx
├── contexts/        # React Context providers
│   └── ThemeContext.jsx
├── pages/           # Page-level components
│   ├── Home.jsx
│   ├── Ventures.jsx
│   ├── About.jsx
│   ├── Insights.jsx
│   ├── ArticleDetail.jsx
│   └── Contact.jsx
├── App.jsx          # Root component
├── main.jsx         # Application entry point
├── index.css        # Global styles
└── theme.css        # Theme variables
```

### Key Features
- **Theme System**: Light/dark mode with CSS variables
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 Level AA compliance
- **SEO**: Semantic HTML and meta tags

## Backend Architecture

### Technology Stack
- Node.js with Express.js
- Prisma ORM
- PostgreSQL database
- Security middleware (Helmet, CORS, Rate Limiting)

### Directory Structure
```
server/src/
├── config/
│   └── database.js      # Prisma client configuration
├── controllers/         # Business logic
│   ├── ventureController.js
│   ├── articleController.js
│   └── contactController.js
├── middleware/          # Express middleware
│   ├── security.js      # Security headers and rate limiting
│   ├── errorHandler.js  # Global error handler
│   └── validation.js    # Input validation
├── routes/              # API routes
│   ├── ventureRoutes.js
│   ├── articleRoutes.js
│   └── contactRoutes.js
└── index.js             # Server entry point
```

### API Design

RESTful API following these conventions:
- **GET** for retrieval
- **POST** for creation
- Consistent response format:
  ```json
  {
    "success": boolean,
    "data": object | array,
    "error": string (if applicable)
  }
  ```

## Database Schema

### Venture Model
- Stores product/venture information
- Supports featured flag for homepage display

### Article Model
- Blog posts with slug-based URLs
- Pagination support
- Author and timestamp tracking

### Contact Model
- Stores contact form submissions
- Rate-limited to prevent abuse

## Security Architecture

### Implemented Security Measures

1. **Input Validation**
   - express-validator for sanitization
   - Type checking and length limits
   - HTML escaping

2. **Rate Limiting**
   - API-wide: 100 requests per 15 minutes
   - Contact form: 5 submissions per hour

3. **HTTP Security Headers**
   - Content Security Policy
   - HSTS
   - X-Frame-Options
   - Referrer Policy

4. **Database Security**
   - Parameterized queries via Prisma
   - No raw SQL queries
   - Connection pooling

5. **CORS Configuration**
   - Whitelist specific origins
   - Credentials support

## Performance Considerations

### Frontend
- Code splitting via React Router
- Lazy loading images
- CSS optimization with TailwindCSS
- Vite for fast development and optimized builds

### Backend
- Efficient database queries with Prisma
- Indexing on frequently queried fields
- Connection pooling
- Response compression (can be added)

## Deployment Architecture

### Recommended Setup

```
┌──────────────────┐
│   CDN            │
│   (Static Assets)│
└────────┬─────────┘
         │
┌────────▼─────────┐
│   Frontend       │
│   (Vercel/       │
│    Netlify)      │
└────────┬─────────┘
         │
┌────────▼─────────┐
│   Backend        │
│   (Railway/      │
│    Render)       │
└────────┬─────────┘
         │
┌────────▼─────────┐
│   Database       │
│   (Managed       │
│    PostgreSQL)   │
└──────────────────┘
```

### Environment Variables

**Backend (.env)**
- `DATABASE_URL`: PostgreSQL connection string
- `PORT`: Server port
- `NODE_ENV`: development/production
- `JWT_SECRET`: Secret key (if auth added)
- `CORS_ORIGIN`: Allowed frontend origin

**Frontend**
- Vite proxy handles API calls in development
- Production: Configure API base URL

## Monitoring and Logging

### Current Implementation
- Console logging for development
- Prisma query logging in development
- Error stack traces (development only)

### Recommended Additions
- Structured logging (Winston/Pino)
- Error tracking (Sentry)
- Performance monitoring (New Relic)
- Analytics (Google Analytics/Plausible)

## Testing Strategy

### Recommended Approach
- **Unit Tests**: Controllers and utilities
- **Integration Tests**: API endpoints
- **E2E Tests**: User workflows
- **Security Tests**: Input validation, rate limiting

### Tools
- Jest for backend testing
- React Testing Library for frontend
- Supertest for API testing
- Playwright for E2E testing

## Scalability Considerations

### Database
- Indexes on frequently queried fields
- Connection pooling via Prisma
- Read replicas for high traffic

### API
- Horizontal scaling with load balancer
- Caching layer (Redis) for frequently accessed data
- CDN for static assets

### Frontend
- Static site generation for blog posts
- Image optimization
- Bundle size monitoring

## Future Enhancements

1. **Search Functionality**
   - Full-text search for articles
   - Venture filtering

2. **Admin Panel**
   - Content management
   - Analytics dashboard

3. **Newsletter**
   - Email subscription
   - Article notifications

4. **Internationalization**
   - Multi-language support
   - Currency selection

5. **Analytics**
   - User behavior tracking
   - Performance metrics

## Maintenance

### Regular Tasks
- Dependency updates (monthly)
- Security audits (quarterly)
- Database backups (automated)
- Performance reviews (quarterly)

### Database Migrations
- Use Prisma migrations
- Test migrations in staging
- Backup before production migrations
- Never destructive migrations

## Development Workflow

1. Feature branch from main
2. Local development with hot reload
3. Testing (manual + automated)
4. Code review
5. Merge to main
6. Automated deployment

## Contact

For questions about the architecture, contact the Atote Labs team at hello@atotelabs.com
