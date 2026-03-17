function MemoryCard({ entry,index,entries,setEntries }) {

  const deleteEntry = () => {

    entries.splice(index,1);

    setEntries([...entries]);

    localStorage.setItem(
      "entries",
      JSON.stringify(entries)
    );
  };

  const toggleFav = () => {

    entries[index].favorite =
      !entries[index].favorite;

    setEntries([...entries]);

    localStorage.setItem(
      "entries",
      JSON.stringify(entries)
    );
  };

  return (
    <div className="card">

      <img src={entry.image} alt="" />

      <h3>{entry.title}</h3>

      <p>{entry.location}</p>

      <p>{"⭐".repeat(entry.rating)}</p>

      <button onClick={toggleFav}>
        {entry.favorite ? "❤️" : "🤍"}
      </button>

      <button onClick={deleteEntry}>
        Delete
      </button>

    </div>
  );
}

export default MemoryCard;