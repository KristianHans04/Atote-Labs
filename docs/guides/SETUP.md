# Development Setup Guide

This guide will help you set up the Atote Labs project for local development.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
  - Check: `node --version`
  - Download: https://nodejs.org/

- **npm** (comes with Node.js)
  - Check: `npm --version`

- **PostgreSQL** (v14 or higher)
  - Check: `psql --version`
  - Download: https://www.postgresql.org/download/

- **Git**
  - Check: `git --version`
  - Download: https://git-scm.com/

## Step 1: Clone the Repository

```bash
git clone <repository-url>
cd Atote-Labs
```

## Step 2: Set Up PostgreSQL Database

1. Start PostgreSQL service:
   ```bash
   # On Ubuntu/Debian
   sudo service postgresql start
   
   # On macOS with Homebrew
   brew services start postgresql
   
   # On Windows
   # PostgreSQL should start automatically
   ```

2. Create a new database:
   ```bash
   psql -U postgres
   ```
   
   Then in the PostgreSQL prompt:
   ```sql
   CREATE DATABASE atotelabs;
   \q
   ```

## Step 3: Set Up the Backend

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Edit `.env` file with your configuration:
   ```env
   DATABASE_URL="postgresql://postgres:your_password@localhost:5432/atotelabs?schema=public"
   PORT=5000
   NODE_ENV=development
   JWT_SECRET=your_secret_key_change_this
   JWT_EXPIRES_IN=7d
   CORS_ORIGIN=http://localhost:5173
   ```

5. Generate Prisma Client:
   ```bash
   npm run prisma:generate
   ```

6. Run database migrations:
   ```bash
   npm run prisma:migrate
   ```
   
   When prompted for a migration name, enter something like: `init`

7. Seed the database with sample data:
   ```bash
   npm run prisma:seed
   ```

8. Verify the setup by starting the server:
   ```bash
   npm run dev
   ```
   
   You should see: "Server is running on port 5000"

## Step 4: Set Up the Frontend

1. Open a new terminal window/tab and navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   
   You should see: "Local: http://localhost:5173/"

## Step 5: Verify the Installation

1. Open your browser and navigate to: http://localhost:5173

2. You should see the Atote Labs homepage with:
   - Header with navigation
   - Hero section
   - Featured ventures section
   - Theme toggle working

3. Test the API by navigating to: http://localhost:5000/api/health
   - You should see: `{"success":true,"message":"Server is running"}`

## Step 6: Test the Application

1. **Homepage**: Check that featured ventures load
2. **Ventures Page**: Should display all ventures
3. **About Page**: Should display company information
4. **Insights Page**: Should display blog articles
5. **Contact Page**: Try submitting the contact form
6. **Theme Toggle**: Switch between light and dark modes

## Common Issues and Solutions

### Issue: PostgreSQL connection error

**Solution:**
- Verify PostgreSQL is running: `pg_isready`
- Check your DATABASE_URL in `.env`
- Ensure the database exists: `psql -U postgres -l`

### Issue: Port already in use

**Solution:**
- Backend (5000): Change PORT in `server/.env`
- Frontend (5173): Change port in `client/vite.config.js`

### Issue: Prisma Client not generated

**Solution:**
```bash
cd server
npm run prisma:generate
```

### Issue: Dependencies not installing

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: CORS errors in browser

**Solution:**
- Ensure `CORS_ORIGIN` in `server/.env` matches your frontend URL
- Default should be: `http://localhost:5173`

## Development Workflow

### Running Both Servers Simultaneously

From the root directory:
```bash
npm run dev
```

This will start both the backend and frontend servers concurrently.

### Database Management

**View database in Prisma Studio:**
```bash
cd server
npm run prisma:studio
```

**Create a new migration:**
```bash
cd server
npm run prisma:migrate
```

**Reset database (WARNING: deletes all data):**
```bash
cd server
npx prisma migrate reset
```

### Code Organization

- **Backend**: Add new routes in `server/src/routes/`
- **Frontend**: Add new pages in `client/src/pages/`
- **Components**: Add reusable UI in `client/src/components/`
- **Styling**: Modify theme in `client/src/theme.css`

## Environment Variables Reference

### Backend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| DATABASE_URL | PostgreSQL connection string | postgresql://user:pass@localhost:5432/db |
| PORT | Server port | 5000 |
| NODE_ENV | Environment | development |
| JWT_SECRET | Secret key for JWT | random_secret_key |
| JWT_EXPIRES_IN | Token expiration | 7d |
| CORS_ORIGIN | Allowed frontend origin | http://localhost:5173 |

### Frontend (Vite handles proxying)

No environment variables needed for development. API calls are proxied through Vite.

## Production Build

### Backend
```bash
cd server
npm start
```

### Frontend
```bash
cd client
npm run build
npm run preview
```

## Next Steps

1. Read the [API Documentation](./api/API_DOCUMENTATION.md)
2. Review the [Project Architecture](./PROJECT_ARCHITECTURE.md)
3. Check the root [README.md](../README.md) for more information

## Getting Help

If you encounter issues:
1. Check the console for error messages
2. Review the relevant logs
3. Ensure all prerequisites are installed
4. Contact the team at hello@atotelabs.com

Happy coding!
