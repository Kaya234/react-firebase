import { useLocation } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import Container from "react-bootstrap/Container";
import CourseCard from "../CourseList/CourseCard";

function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("category");
  const { data: courses, isPending, error } = useQuery(query);
  const title = query[0].toUpperCase() + query.slice(1);

  return (
    <Container>
      <h1 className="title">{title}</h1>
      <CourseCard
        courses={
          courses && courses.filter((course) => course.category === query)
        }
        isPending={isPending}
        error={error}
      />
    </Container>
  );
}

export default Search;
