# Atote Labs Website

A professional marketing website for Atote Labs, a startup studio based in Nairobi that builds the next generation of software products.

## Tech Stack

- **Frontend**: React 19, Vite, TailwindCSS V4, React Router
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: TailwindCSS V4 with custom theme support

## Features

- Responsive design with mobile-first approach
- Light/Dark theme toggle
- SEO optimized
- Accessible (WCAG 2.1 Level AA)
- Secure API with rate limiting
- Input validation and sanitization
- Professional minimalist design

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Atote-Labs
```

2. Install server dependencies:
```bash
cd server
NODE_ENV=development npm install
```

3. Install client dependencies:
```bash
cd ../client
NODE_ENV=development npm install --legacy-peer-deps
```

4. Set up environment variables:
```bash
cd ../server
cp .env.example .env
```

Edit `.env` with your database credentials and configuration.

5. Set up the database:
```bash
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

### Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```

The server will run on http://localhost:5000

2. Start the frontend development server:
```bash
cd client
npm run dev
```

The client will run on http://localhost:5173

## Project Structure

```
Atote-Labs/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React contexts
│   │   ├── pages/         # Page components
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   └── package.json
├── server/                # Express backend
│   ├── prisma/
│   │   ├── schema.prisma  # Database schema
│   │   └── seed.js        # Database seeding
│   ├── src/
│   │   ├── config/        # Configuration files
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Express middleware
│   │   ├── routes/        # API routes
│   │   └── index.js       # Server entry point
│   └── package.json
└── docs/                  # Documentation
```

## Available Scripts

### Server

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:seed` - Seed the database
- `npm run prisma:studio` - Open Prisma Studio

### Client

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## API Endpoints

- `GET /api/ventures` - Get all ventures
- `GET /api/ventures/featured` - Get featured ventures
- `GET /api/ventures/:id` - Get venture by ID
- `GET /api/articles` - Get all articles (paginated)
- `GET /api/articles/:slug` - Get article by slug
- `POST /api/contact` - Submit contact form

## Security Features

- Helmet.js for secure HTTP headers
- CORS configuration
- Rate limiting on API endpoints
- Input validation and sanitization
- XSS protection
- CSRF protection
- SQL injection prevention via Prisma

## License

ISC

## Authors

Atote Labs Team
