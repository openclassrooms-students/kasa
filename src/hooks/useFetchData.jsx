import { useState, useEffect, useMemo } from "react";

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/data.json");

        if (!response.ok) {
          throw new Error("Réponse réseau non OK");
        }

        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Utilisez useMemo pour renvoyer une valeur stable incluant les données, le chargement et l'erreur
  const value = useMemo(
    () => ({ data, loading, error }),
    [data, loading, error]
  );

  return value;
}

export default useFetchData;
