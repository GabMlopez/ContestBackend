// src/App.jsx
import { useEffect, useState } from "react";
import CatCard from "./CatCard";

export default function App() {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchCats = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://cataas.com/api/cat?limit=10");
      if (!response.ok) throw new Error("API Error");

      const data = await response.json();
      setCats(data);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) {
    return (
      <div>
        Not found
      </div>
    );
  }

  return (
    <div className="feed">
      {cats.slice(0, 10).map((cat) => (
        <CatCard
          key={cat._id}
          imageUrl={`https://cataas.com/cat/${cat._id}`}
          tags={cat.tags}
        />
      ))}
    </div>
  );
}