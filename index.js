import express from "express";
import "dotenv/config";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import "dotenv/config";
import WorkingWithObjects from "./Lab5/WorkingWithObjects.js";
import WorkingWithArrays from "./Lab5/WorkingWithArrays.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import session from "express-session";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import EnrollmentRoutes from "./Kanbas/Enrollments/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import mongoose from "mongoose";

//const express = require("express");

console.log("Environment Variables:", process.env.MONGO_CONNECTION_STRING);

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
    cors({
        credentials: true,
        //origin: process.env.NETLIFY_URL || "http://localhost:3000",
        origin:  "http://localhost:3000",
    })
);  

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(
    session(sessionOptions)
);
  
  
app.use(express.json());
//const port = process.env.PORT || 4000;


Hello(app);
Lab5(app);
UserRoutes(app);
CourseRoutes(app);
EnrollmentRoutes(app);
AssignmentRoutes(app);
ModuleRoutes(app);
WorkingWithObjects(app);
WorkingWithArrays(app);


app.listen(process.env.PORT || 4000)
