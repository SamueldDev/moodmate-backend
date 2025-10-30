


import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from "swagger-ui-express";

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MoodMate API',
      version: '1.0.0',
      description: 'API documentation for the MoodMate backend',
    },
    servers: [
      {
        url: "https://moodmate-backend-t1ax.onrender.com",
        description: "Production server",
      },
      {
        url: "http://localhost:3000",
        description: "Local development server",
      },
    ],
    tags: [
      {
        name: 'Suggestions',
        description: 'Endpoints for mood-based suggestions',
      },
      {
        name: 'Moods',
        description: 'Endpoints for submitting and retrieving moods',
      },
      {
        name: 'Auth',
        description: 'Authentication endpoints (register/login)',
      },
    ],

    // components + security here
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [path.resolve(__dirname, '../routes/*.js')], // scan routes for JSDoc
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Serve the raw Swagger JSON
  app.get('/api-docs-json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}
