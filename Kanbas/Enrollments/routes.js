import * as dao from "./dao.js";

export default function EnrollmentsRoutes(app) {
  const getAllEnrollments = (req, res) => {
    const enrollments = dao.getAllEnrollents();
    res.json(enrollments);
  };
  app.get("/api/enrollments", getAllEnrollments);
}

