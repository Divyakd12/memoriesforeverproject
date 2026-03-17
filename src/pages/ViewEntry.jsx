import "./ViewEntry.css";

function ViewEntry(){

  const entries = JSON.parse(localStorage.getItem("entries")) || [];
  const index = localStorage.getItem("selectedIndex");

  const entry = entries[index];

  if(!entry){
    return <h2 className="view">No Memory Found</h2>;
  }

  return(

    <>
    <div className="view1" style={{padding:"30px"}}>

      <h1>{entry.title}</h1>

      <img
        src={entry.image}
        alt=""
        style={{width:"400px",borderRadius:"20px"}}
      />

      <p ><b>Location:</b> {entry.location}</p>

      <p><b>Date:</b> {entry.date}</p>

      <p><b>Rating:</b> {"⭐".repeat(entry.rating)}</p>

      <p><b>Experience:</b> {entry.notes}</p>

    </div>
    
    </>

  );

}

export default ViewEntry;