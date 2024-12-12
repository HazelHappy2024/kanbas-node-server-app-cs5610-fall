import model from "./model.js";

// Retrieve Courses from Database
export function findAllCourses() {
  return model.find();
}

// Insert Courses into Database
export function createCourse(course) {
  delete course._id;
  return model.create(course);
}

// Delete Courses from Database
export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
}

//Update courses in the Database
export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, courseUpdates);
}
  