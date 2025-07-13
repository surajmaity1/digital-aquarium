import swaggerJSDoc from "swagger-jsdoc";
import pathToSwaggerUi from "swagger-ui-dist";

pathToSwaggerUi.absolutePath();
export const swaggerUICss =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css";

const swaggerDocument = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Digital Aquarium API",
      description:
        "API endpoints for a Digital Aquarium services documented on swagger",
      contact: {
        // name: "Suraj Maity",
        // email: "surajmaity981@gmail.com",
        url: "https://github.com/surajmaity1/digital-aquarium",
      },
      version: "1.0.0",
    },
    servers: [
      {
        url: "https://digital-aquarium.vercel.app",
        description: "Live Server",
        //   url: 'http://localhost:3000',
        //   description: 'Local Server'
      },
    ],
  },
  apis: ["./routes/*.js"],
};

export const swaggerSpec = swaggerJSDoc(swaggerDocument);
