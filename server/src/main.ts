// Load environment variables from .env file
import "dotenv/config";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
const port = process.env.APP_PORT;
const express = require("express");
import type { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Wild Series !");
});

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
