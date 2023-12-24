import { useMemo } from "react";
import { useFetch } from "../../hooks/useFetch";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Dropdown() {
  const { data: courses, error } = useFetch();

  const findCategory = (courses) => {
    let categories = [
      ...new Set(courses && courses.map((course) => course["category"])),
    ];
    return categories;
  };

  const getCategory = useMemo(() => findCategory(courses), [courses]);

  return (
    <div className="d-flex" data-bs-theme="light">
      <NavDropdown title="Category" id="basic-nav-dropdown">
        {error && <li className="dropdown-item">{error}</li>}
        {getCategory &&
          getCategory.map((category, i) => (
            <Link
              className="dropdown-item"
              key={i}
              to={`/categories?category=${category}`}
            >
              {category}
            </Link>
          ))}
      </NavDropdown>
    </div>
  );
}

export default Dropdown;
