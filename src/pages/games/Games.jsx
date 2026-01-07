import Filters from "../../components/Filters";
import GameCard from "../../components/GameCard";
import Loader from "../../components/Loader";
import useInfinitePagination from "../../hooks/useInfinitePagination";
import { fetchGames } from "../../services/GameApi";
import "../../assets/css/games.css";

const PAGE_SIZE = 10;

export default function Games() {
  const {
    data: games,
    loading,
    observerRef,
    hasMore,
  } = useInfinitePagination(fetchGames, PAGE_SIZE);

  return (
    <div className="games-wrapper">
      <Filters />

      <div className="game-card-wrapper">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.attributes.name}
            releaseDate={game.attributes.firstReleaseDate}
            summary={game.attributes.summary}
            rating={game.attributes.rating}
          />
        ))}

        {loading && <Loader />}

        {/* Sentinel */}
        {hasMore && <div ref={observerRef} style={{ height: "1px" }} />}
      </div>
    </div>
  );
}
