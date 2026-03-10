import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

  const [entries, setEntries] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // Load memories
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(data);
  }, []);

  // Save memories
  const updateStorage = (updated) => {
    setEntries(updated);
    localStorage.setItem("entries", JSON.stringify(updated));
  };

  // Delete memory
  const deleteMemory = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    updateStorage(updated);
  };

  // Toggle favorite
  const toggleFavorite = (index) => {
    const updated = [...entries];
    updated[index].favorite = !updated[index].favorite;
    updateStorage(updated);
  };

  // View memory
  const viewMemory = (index) => {
    localStorage.setItem("selectedIndex", index);
    navigate("/view");
  };

  // Dashboard Stats
  const totalMemories = entries.length;

  const favorites = entries.filter(e => e.favorite).length;

  const avgRating =
    entries.reduce((sum, e) => sum + Number(e.rating || 0), 0) /
    (totalMemories || 1);

  // Search filter
  const filtered = entries.filter((e) =>
    (e.title || "").toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="dashboard-container">

      {/* Dashboard Stats */}
      <h1 className="dashboard-title">Memory Dashboard</h1>

      <div className="stats-container">

        <div className="stat-card">
          <h3>Total Memories</h3>
          <h2 style={{ color: "blue" }}>{totalMemories}</h2>
        </div>

        <div className="stat-card">
          <h3>Favorites</h3>
          <h2 style={{ color: "purple" }}>{favorites} ❤️</h2>
        </div>

        <div className="stat-card">
          <h3>Average Rating</h3>
          <h2>{avgRating.toFixed(1)} ⭐</h2>
        </div>

      </div>

      {/* Search */}
      <h2 className="mysearch">My Memories</h2>

      <input
        type="text"
        placeholder="Search memories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/* Memory Cards */}
      <div className="memory-grid">

        {filtered.map((entry, index) => (

          <div key={index} className="memory-card">

            <img
              src={entry.image}
              alt="memory"
            />

            <h4>{entry.title}</h4>

            <div>
              {"⭐".repeat(entry.rating)}
            </div>

            <div style={{ marginTop: "10px" }}>

              <button
                onClick={() => toggleFavorite(index)}
                className="btn btn-fav"
              >
                {entry.favorite ? "❤️" : "🤍"}
              </button>

              <button
                onClick={() => deleteMemory(index)}
                className="btn btn-delete"
              >
                Delete
              </button>

              <button
                onClick={() => viewMemory(index)}
                className="btn btn-view"
              >
                View
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Dashboard;