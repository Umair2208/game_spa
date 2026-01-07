import { useState } from "react";
import Filters from "../../components/Filters";
import GameCard from "../../components/GameCard";
import Loader from "../../components/Loader";
import useInfinitePagination from "../../hooks/useInfinitePagination";
import useDebounce from "../../hooks/useDebounce";
import { fetchGames } from "../../services/GameApi";
import { applyClientFilters } from "../../utils/applyClientFilters";
import "../../assets/css/games.css";

const PAGE_SIZE = 10;

export default function Games() {
  const [filters, setFilters] = useState({
    name: "",
    minScore: "",
    orderBy: "firstReleaseDate",
    orderDir: "desc",
  });

  const debouncedFilters = useDebounce(filters, 500);

  const {
    data: games,
    loading,
    observerRef,
    hasMore,
  } = useInfinitePagination(fetchGames, PAGE_SIZE);

  const filteredGames = applyClientFilters(games, debouncedFilters);

  function clearFilters() {
    setFilters({
      name: "",
      minScore: "",
      orderBy: "firstReleaseDate",
      orderDir: "desc",
    });
  }

  return (
    <div className="games-wrapper">
      <Filters filters={filters} onChange={setFilters} onClear={clearFilters} />

      <div className="game-card-wrapper">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            title={game.attributes.name}
            releaseDate={game.attributes.firstReleaseDate}
            summary={game.attributes.summary}
            rating={game.attributes.rating}
          />
        ))}

        {loading && <Loader />}
        {hasMore && <div ref={observerRef} style={{ height: 1 }} />}
      </div>
    </div>
  );
}
