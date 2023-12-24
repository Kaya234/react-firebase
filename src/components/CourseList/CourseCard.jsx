import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

function CourseCard({ courses, isPending, error }) {
  return (
    <div>
      {isPending && <Spinner animation="border" variant="primary" />}
      {error && <h1>{error}</h1>}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {courses &&
          courses.map((course) => (
            <div key={course.id} className="col d-flex justify-content-center">
              <Card className="courses-card">
                <img
                  className="card-img-top"
                  src={process.env.PUBLIC_URL + course.img}
                  alt={course.name}
                />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>
                    <Link to={`/categories?category=${course.category}`}>
                      <Badge pill bg="primary">
                        {course.category}
                      </Badge>
                    </Link>
                  </Card.Text>
                  <Card.Text>city: {course.city}</Card.Text>
                  <Card.Text>capacity: {course.capacity}</Card.Text>
                  <Link to={`/courses/${course.id}`}>
                    <Button variant="primary">see course</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CourseCard;
