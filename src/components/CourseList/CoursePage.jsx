import React from "react";
import CourseCard from "./CourseCard";
import { useFetch } from "../../hooks/useFetch";
import Container from "react-bootstrap/Container";

function CoursePage() {
  const { data: courses, isPending, error } = useFetch();

  return (
    <Container>
      <h1 className="title">Courses</h1>
      <CourseCard courses={courses} isPending={isPending} error={error} />
    </Container>
  );
}

export default CoursePage;
