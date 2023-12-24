import { useState, useEffect, useMemo } from "react";
import { useFetch } from "../../hooks/useFetch";

function HomePage() {
  const [fade, setFade] = useState(true);
  let [index, setIndex] = useState(0);

  const { data: courses } = useFetch();

  let categories = [];

  const findCategory = (courses) => {
    categories = [
      ...new Set(courses && courses.map((course) => course["category"])),
    ];
    return categories;
  };

  const getCategory = useMemo(() => findCategory(courses), [courses]);

  useEffect(() => {
    const fadeInterval = setInterval(() => {
      setFade(!fade);
    }, 1700);
    return () => clearInterval(fadeInterval);
  }, [fade, setFade]);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      if (index === categories.length) {
        setIndex(0);
      } else {
        setIndex(index++);
      }
    }, 1700);
    return () => clearInterval(wordInterval);
  }, [index, setIndex, categories.length]);

  return (
    <div>
      <p className="heading">Courses for you </p>
      {categories && (
        <h1>
          Study{" "}
          <span
            style={{ color: "blue" }}
            className={`${fade ? "fade-in" : "fade-out"}`}
          >
            {getCategory[index]}
          </span>
        </h1>
      )}
    </div>
  );
}

export default HomePage;
