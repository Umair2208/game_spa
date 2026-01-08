import "../assets/css/filter.css";

export default function Filters({ filters, onChange, onClear }) {
  return (
    <div className="filter-card">
      <h3 className="filter-title">Filter Results</h3>

      <div className="filter-group">
        <label>Name (contains)</label>
        <input
          type="text"
          placeholder="Text string"
          value={filters.name}
          onChange={(e) => onChange({ ...filters, name: e.target.value })}
        />
      </div>

      <div className="filter-wrap">
        <div className="filter-group">
          <label>Minimum Score</label>
          <input
            type="number"
            placeholder="1 - 100"
            value={filters.minScore}
            onChange={(e) => onChange({ ...filters, minScore: e.target.value })}
          />
        </div>

        <div className="filter-group">
          <label>Order By</label>

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

        <div className="filter-actions">
          <button className="clear-btn" onClick={onClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
