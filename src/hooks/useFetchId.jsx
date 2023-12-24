import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

export const useFetchId = (id) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("courses")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setData(doc.data());
        } else {
          setIsPending(false);
          setError("no item");
        }
      });
  }, [id]);

  return { data, isPending, error };
};
