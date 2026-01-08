import "../assets/css/filter.css";

export default function Filters({ filters, onChange, onClear }) {
  return (
    <div className="filter-card">
      <h3 className="filter-title">Filter Results</h3>

      <div className="filter-group">
        <label htmlFor="name">Name (contains)</label>
        <input
          id="name"
          type="text"
          placeholder="Text string"
          value={filters.name}
          onChange={(e) => onChange({ ...filters, name: e.target.value })}
        />
      </div>

      <div className="filter-wrap">
        <div className="filter-group">
          <label htmlFor="score">Minimum Score</label>
          <input
            id="score"
            type="number"
            placeholder="1 - 100"
            value={filters.minScore}
            min={0}
            max={100}
            step={1}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "." || e.key === "e") {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              const value = e.target.value;

              // Allow empty (for clearing)
              if (value === "") {
                onChange({ ...filters, minScore: "" });
                return;
              }

              const num = Number(value);

              if (!Number.isInteger(num) || num < 0) return;

              onChange({
                ...filters,
                minScore: Math.min(num, 100),
              });
            }}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="orderBy">Order By</label>

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
              id="orderBy"
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
