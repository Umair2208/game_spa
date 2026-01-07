import { useState } from "react";
import "../assets/css/gameCard.css";

export default function GameCard({ title, releaseDate, summary, rating }) {
  const [expanded, setExpanded] = useState(false);

  const formattedDate = releaseDate
    ? new Date(releaseDate).toLocaleDateString("en-GB")
    : "N/A";

  const MAX_LENGTH = 300;
  const safeSummary = summary || "No description available.";
  const isLong = safeSummary.length > MAX_LENGTH;

  const displayedText =
    expanded || !isLong
      ? safeSummary
      : safeSummary.slice(0, MAX_LENGTH) + "...";

  const cleanRating = isNaN(Number(rating))
    ? "NA"
    : Math.min(99, Math.floor(Number(rating)));

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

      <div className="rating-badge">{cleanRating}</div>
    </div>
  );
}
