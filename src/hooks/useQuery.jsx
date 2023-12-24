import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

export const useQuery = (query) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const searchData = projectFirestore.collection("courses").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No courses");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });

          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    return () => searchData();
  }, [query]);

  return { data, isPending, error };
};
