import { useNavigate } from "react-router-dom";

function EntryCard({entry,index,deleteEntry,toggleFavorite}) {

const navigate = useNavigate();

const viewEntry = () => {

localStorage.setItem("selectedEntry",JSON.stringify(entry));

navigate("/view");

};

return(

<div className="card">

<img src={entry.image} alt={entry.title}/>

<h3>{entry.title}</h3>

<p>{entry.location}</p>

<p>⭐ {entry.rating}</p>

<button onClick={()=>toggleFavorite(index)}>
{entry.favorite ? "❤️" : "🤍"}
</button>

<button onClick={()=>deleteEntry(index)}>
Delete
</button>

<button onClick={viewEntry}>
View
</button>

</div>

);

}

export default EntryCard;