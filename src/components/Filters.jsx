import "../assets/css/filter.css";

export default function Filters() {
  return (
    <div className="filter-card">
      <h3 className="filter-title">Filter Results</h3>

      {/* Name filter */}
      <div className="filter-group">
        <label>Name (contains)</label>
        <input type="text" placeholder="Text string" />
      </div>

      <div className="filter-wrap">
        {/* Minimum score */}
        <div className="filter-group">
          <label>Minimum Score</label>
          <input type="text" placeholder="1 - 10" />
        </div>

        {/* Order By */}
        <div className="filter-group">
          <label>Order By</label>
<<<<<<< Updated upstream

          <div className="order-by">
=======
          {/* <div className="order-by">
>>>>>>> Stashed changes
            <div className="sort-icon">↑</div>

            <select>
              <option>Release Date</option>
              <option>Score</option>
              <option>Name</option>
            </select>
          </div> */}
          <div className="order-by">
            <button
              type="button"
              className="sort-icon"
              onClick={() =>
                onChange({
                  ...filters,
                  orderDir: filters.orderDir === "asc" ? "desc" : "asc",
                })
              }
            >
              {filters.orderDir === "asc" ? "↑" : "↓"}
            </button>

            <select
              value={filters.orderBy}
              onChange={(e) =>
                onChange({ ...filters, orderBy: e.target.value })
              }
            >
              <option value="firstReleaseDate">Release Date</option>
              <option value="rating">Score</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        {/* Clear button */}
        <div className="filter-actions">
          <button className="clear-btn">Clear</button>
        </div>
      </div>
    </div>
  );
}
