import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term !== "") {
      navigate(`/search?name=${term}`);
    }
  };

  return (
    <div className="d-flex" data-bs-theme="light">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
      <Button variant="outline-light" id="search-button" onClick={handleSubmit}>
        Search
      </Button>
    </div>
  );
}

export default Searchbar;
