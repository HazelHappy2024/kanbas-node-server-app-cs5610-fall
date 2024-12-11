import Database from "../Database/index.js";

export function getAllEnrollents(userId){
  const {enrollments} = Database;
  return enrollments;
}

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function unenrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;

  const index = enrollments.findIndex(
    (enrollment) => enrollment.user === userId && enrollment.course === courseId
  );

  if (index !== -1) {
    enrollments.splice(index, 1);
  }
}

