import axios from "axios";

export async function fetchGames(page = 1, pageSize = 10) {
  const response = await axios.get("https://admin.edulatte.in/api/games", {
    params: {
      "pagination[page]": page,
      "pagination[pageSize]": pageSize,
    },
  });

  return {
    games: response.data.data,
    pagination: response.data.meta.pagination,
  };
}
