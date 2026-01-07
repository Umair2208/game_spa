import { useState } from "react";
import "../assets/css/gameCard.css";

export default function GameCard({ title, releaseDate, summary, rating }) {
  const [expanded, setExpanded] = useState(false);
  const cleanRating = Math.min(99, Math.floor(Number(rating)));
  const formattedDate = new Date(Number(releaseDate)).toLocaleDateString(
    "en-GB"
  );
  const MAX_LENGTH = 300;
  const isLong = summary && summary.length > MAX_LENGTH;

  const displayedText =
    expanded || !isLong ? summary : summary.slice(0, MAX_LENGTH) + "...";
  return (
    <div className="game-card">
      <div className="game-card-content">
        <h4 className="game-title">{title}</h4>
        <p className="release-date">Release Date: {formattedDate}</p>

        <p className="game-summary">
          {displayedText}
          {isLong && (
            <span className="read-more" onClick={() => setExpanded(!expanded)}>
              {expanded ? " Read less" : " Read more"}
            </span>
          )}
        </p>
      </div>

<<<<<<< Updated upstream
      <div className="rating-badge"> {cleanRating} </div>
=======
      <div className="rating-badge">
        {isNaN(Number(rating))
          ? "NA"
          : Math.min(99, Math.floor(Number(rating)))}
        {/* {rating} */}
      </div>
>>>>>>> Stashed changes
    </div>
  );
}
