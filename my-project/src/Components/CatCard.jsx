
import { useState } from "react";

export default function CatCard({ imageUrl, tags }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card">
      <img src={imageUrl} alt="A random cat" onClick={() => setLikes(likes + 1)} />
      {tags && tags.length > 0 && (
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      )}
      <button onClick={() => setLikes(likes + 1)}>❤️ Like ({likes})</button>
    </div>
  );
}