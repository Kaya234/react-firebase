import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { useFetchId } from "../../hooks/useFetchId";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: course, isPending, error } = useFetchId(id);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center g-4">
        <div className="col back-button">
          <Button
            id="back-button"
            variant="secondary"
            onClick={() => navigate(-1)}
          >
            Go back
          </Button>
        </div>
      </div>

      {isPending && (
        <div className="row d-flex justify-content-center g-4">
          <div className="col-1 d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
          </div>
        </div>
      )}
      {error && (
        <div className="row d-flex justify-content-center g-4">
          <div className="col-1 d-flex justify-content-center">
            <h1>{error}</h1>
            <Button
              id="back-button"
              variant="secondary"
              onClick={() => navigate("/")}
            >
              Go back home
            </Button>
          </div>
        </div>
      )}

      <div className="row d-flex justify-content-md-center g-4">
        <div className="col-8 d-flex justify-content-center">
          {course && (
            <Card className="card card-detail" key={course.id}>
              <img
                className="card-img-top"
                src={process.env.PUBLIC_URL + course.img}
                alt={course.name}
              />
              <Card.Body>
                <Card.Title>
                  <h1>{course.name}</h1>
                </Card.Title>
                <Card.Text>
                  {" "}
                  <Link to={`/categories?category=${course.category}`}>
                    <Badge pill bg="primary">
                      {course.category}
                    </Badge>
                  </Link>
                </Card.Text>
                <Card.Text>
                  <b>Location:</b> {course.city}, {course.address}
                </Card.Text>
                <Card.Text>
                  <b>Capacity:</b> {course.capacity}
                </Card.Text>
                <Card.Text>
                  <b>Description</b>
                </Card.Text>
                <div className="border rounded description">
                  {course.description}
                </div>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
