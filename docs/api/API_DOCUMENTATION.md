# API Documentation

Base URL: `http://localhost:5000/api`

## Endpoints

### Health Check

#### GET /api/health

Check if the server is running.

**Response:**
```json
{
  "success": true,
  "message": "Server is running"
}
```

---

### Ventures

#### GET /api/ventures

Get all ventures.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Project Name",
      "description": "Project description",
      "imageUrl": "https://example.com/image.jpg",
      "featured": true,
      "createdAt": "2025-10-19T00:00:00.000Z",
      "updatedAt": "2025-10-19T00:00:00.000Z"
    }
  ]
}
```

#### GET /api/ventures/featured

Get featured ventures (max 4).

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Project Name",
      "description": "Project description",
      "imageUrl": "https://example.com/image.jpg",
      "featured": true,
      "createdAt": "2025-10-19T00:00:00.000Z",
      "updatedAt": "2025-10-19T00:00:00.000Z"
    }
  ]
}
```

#### GET /api/ventures/:id

Get a specific venture by ID.

**Parameters:**
- `id` (string, required): Venture UUID

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Project Name",
    "description": "Project description",
    "imageUrl": "https://example.com/image.jpg",
    "featured": true,
    "createdAt": "2025-10-19T00:00:00.000Z",
    "updatedAt": "2025-10-19T00:00:00.000Z"
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "error": "Venture not found"
}
```

---

### Articles

#### GET /api/articles

Get all articles with pagination.

**Query Parameters:**
- `page` (number, optional): Page number (default: 1)
- `limit` (number, optional): Items per page (default: 10)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Article Title",
      "slug": "article-slug",
      "excerpt": "Brief description",
      "content": "Full article content",
      "author": "Author Name",
      "publishedAt": "2025-10-19T00:00:00.000Z",
      "createdAt": "2025-10-19T00:00:00.000Z",
      "updatedAt": "2025-10-19T00:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 3,
    "totalPages": 1
  }
}
```

#### GET /api/articles/:slug

Get a specific article by slug.

**Parameters:**
- `slug` (string, required): Article slug

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "Article Title",
    "slug": "article-slug",
    "excerpt": "Brief description",
    "content": "Full article content",
    "author": "Author Name",
    "publishedAt": "2025-10-19T00:00:00.000Z",
    "createdAt": "2025-10-19T00:00:00.000Z",
    "updatedAt": "2025-10-19T00:00:00.000Z"
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "error": "Article not found"
}
```

---

### Contact

#### POST /api/contact

Submit a contact form.

**Rate Limit:** 5 requests per hour per IP

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here (10-1000 characters)"
}
```

**Validation Rules:**
- `name`: Required, 2-100 characters
- `email`: Required, valid email format
- `message`: Required, 10-1000 characters

**Success Response (201):**
```json
{
  "success": true,
  "message": "Thank you for your message. We will get back to you soon.",
  "data": {
    "id": "uuid"
  }
}
```

**Validation Error Response (400):**
```json
{
  "success": false,
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

**Rate Limit Error Response (429):**
```json
{
  "success": false,
  "error": "Too many contact form submissions, please try again later."
}
```

---

## Error Responses

### General Error Format

```json
{
  "success": false,
  "error": "Error message"
}
```

### HTTP Status Codes

- `200 OK`: Successful GET request
- `201 Created`: Successful POST request
- `400 Bad Request`: Validation error
- `404 Not Found`: Resource not found
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server error

---

## Security Features

1. **Rate Limiting**
   - API-wide: 100 requests per 15 minutes
   - Contact endpoint: 5 requests per hour

2. **Input Validation**
   - All inputs are validated and sanitized
   - XSS protection via HTML escaping

3. **CORS**
   - Configured for specific origins only

4. **Security Headers**
   - Content Security Policy
   - HSTS
   - X-Frame-Options
   - Referrer Policy

5. **SQL Injection Prevention**
   - Parameterized queries via Prisma ORM

---

## Development

To test the API, you can use tools like:
- Postman
- curl
- Thunder Client (VS Code extension)
- Insomnia

Example curl command:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","message":"Test message from API"}'
```
