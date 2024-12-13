import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  
  app.delete("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.params;
    dao.unenrollUserInCourse(userId, courseId);
    res.sendStatus(204);
  });

  app.put("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.params;
    dao.enrollUserInCourse(userId, courseId);
    res.sendStatus(204);
  });

  // 获取当前用户的注册信息
  app.get("/api/users/:userId/enrollments", (req, res) => {
    let { userId } = req.params;
    if (userId === "current") {
      const currentUser = req.session["currentUser"];
      if (!currentUser) {
        res.sendStatus(401);
        return;
      }
      userId = currentUser._id;
    }
    const userEnrollments = dao.findUserEnrollments(userId);
    console.log("User Enrollments:", userEnrollments);
    res.json(userEnrollments);
  });

}

