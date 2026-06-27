# Simple Responsive Website

A simple responsive website with a Node.js/Express backend and HTML/CSS/JavaScript frontend.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Backend Integration**: Node.js/Express server with REST API endpoints
- **Modern UI**: Clean and modern interface with smooth interactions
- **Contact Form**: Functional form that sends data to the backend
- **Data Fetching**: Demonstrates API communication between frontend and backend

## Project Structure

```
KISAN1/
├── package.json          # Project dependencies
├── server.js             # Express backend server
├── README.md             # This file
└── public/
    ├── index.html        # Main HTML file
    ├── styles.css        # Responsive CSS styling
    └── script.js         # Frontend JavaScript
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## API Endpoints

### GET /api/data
Returns sample data from the backend.

**Response:**
```json
{
  "message": "Hello from the backend!",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "data": [
    { "id": 1, "name": "Item 1", "description": "This is the first item" },
    { "id": 2, "name": "Item 2", "description": "This is the second item" },
    { "id": 3, "name": "Item 3", "description": "This is the third item" }
  ]
}
```

### POST /api/contact
Accepts contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, this is a test message."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message received successfully!",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, this is a test message."
  }
}
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with responsive design using media queries

## Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## License

MIT
