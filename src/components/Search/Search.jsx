import { useLocation } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import Container from "react-bootstrap/Container";
import CourseCard from "../CourseList/CourseCard";

function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("name");
  const { data: courses, isPending, error } = useQuery(query);

  return (
    <Container>
      <h1 className="title">Results for: {query}</h1>
      <CourseCard
        courses={
          courses &&
          courses.filter(
            (course) =>
              course.name.toLowerCase().includes(query.toLowerCase()) ||
              course.category.toLowerCase().includes(query.toLowerCase())
          )
        }
        isPending={isPending}
        error={error}
      />
    </Container>
  );
}

export default Search;
