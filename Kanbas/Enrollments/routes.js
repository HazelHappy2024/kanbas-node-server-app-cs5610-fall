import express from "express";
import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.sendStatus(200);
  });

  app.delete("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    enrollmentsDao.unenrollUserFromCourse(userId, courseId);
    res.sendStatus(200);
  });

  app.get("/api/enrollments/:userId", (req, res) => {
    const { userId } = req.params;
    const userEnrollments = enrollmentsDao.findEnrollmentsByUser(userId);
    res.json(userEnrollments);
  });
}
