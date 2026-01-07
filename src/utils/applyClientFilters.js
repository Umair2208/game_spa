export function applyClientFilters(games, filters) {
  let result = [...games];

  // Name filter
  if (filters.name) {
    result = result.filter((g) =>
      g.attributes.name.toLowerCase().includes(filters.name.toLowerCase())
    );
  }

  // Minimum score
  if (filters.minScore !== "") {
    const min = Number(filters.minScore);

    result = result.filter((g) => {
      const rating = Number(g.attributes.rating);
      return !isNaN(rating) && rating >= min;
    });
  }

  // Sorting
  const dir = filters.orderDir === "asc" ? 1 : -1;

  result.sort((a, b) => {
    if (filters.orderBy === "name") {
      return (
        (b.attributes.name || "")
          .toLowerCase()
          .localeCompare((a.attributes.name || "").toLowerCase()) * dir
      );
    }

    if (filters.orderBy === "rating") {
      return (
        ((Number(a.attributes.rating) || 0) -
          (Number(b.attributes.rating) || 0)) *
        dir
      );
    }

    if (filters.orderBy === "firstReleaseDate") {
      return (
        ((new Date(a.attributes.firstReleaseDate).getTime() || 0) -
          (new Date(b.attributes.firstReleaseDate).getTime() || 0)) *
        dir
      );
    }

    return 0;
  });

  return result;
}
