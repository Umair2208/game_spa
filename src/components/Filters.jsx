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

          <div className="order-by">
            <div className="sort-icon">↑</div>

            <select>
              <option>Release Date</option>
              <option>Score</option>
              <option>Name</option>
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
