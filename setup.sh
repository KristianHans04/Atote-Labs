#!/bin/bash

# Atote Labs Quick Start Script
# This script helps set up the development environment

set -e

echo "========================================="
echo "Atote Labs Development Setup"
echo "========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: Node.js is not installed${NC}"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}✓ Node.js $(node --version) found${NC}"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm is not installed${NC}"
    exit 1
fi

echo -e "${GREEN}✓ npm $(npm --version) found${NC}"

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo -e "${YELLOW}⚠ PostgreSQL not found in PATH${NC}"
    echo "Please ensure PostgreSQL is installed and running"
    echo "Download from: https://www.postgresql.org/download/"
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    echo -e "${GREEN}✓ PostgreSQL found${NC}"
fi

echo ""
echo "========================================="
echo "Step 1: Installing Server Dependencies"
echo "========================================="
cd server
npm install
echo -e "${GREEN}✓ Server dependencies installed${NC}"

echo ""
echo "========================================="
echo "Step 2: Installing Client Dependencies"
echo "========================================="
cd ../client
npm install
echo -e "${GREEN}✓ Client dependencies installed${NC}"

echo ""
echo "========================================="
echo "Step 3: Setting up Environment Variables"
echo "========================================="
cd ../server
if [ ! -f .env ]; then
    cp .env.example .env
    echo -e "${GREEN}✓ Created .env file${NC}"
    echo -e "${YELLOW}⚠ Please edit server/.env with your database credentials${NC}"
else
    echo -e "${YELLOW}⚠ .env file already exists${NC}"
fi

echo ""
echo "========================================="
echo "Setup Complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Edit server/.env with your PostgreSQL credentials"
echo "2. Create the database: psql -U postgres -c 'CREATE DATABASE atotelabs;'"
echo "3. Run database migrations: cd server && npm run prisma:migrate"
echo "4. Seed the database: npm run prisma:seed"
echo "5. Start development: npm run dev (from root directory)"
echo ""
echo "For detailed instructions, see docs/guides/SETUP.md"
echo ""
