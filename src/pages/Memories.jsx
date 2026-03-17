// import { useState, useEffect } from "react";
// import MemoryCard from "../components/MemoryCard";

// function Memories() {

//   const [entries,setEntries] = useState([]);
//   const [search,setSearch] = useState("");

//   useEffect(()=>{

//     const data =
//       JSON.parse(localStorage.getItem("entries")) || [];

//     setEntries(data);

//   },[]);

//   const filtered =
//     entries.filter((e)=>
//       e.title.toLowerCase().includes(search.toLowerCase())
//     );

//   return (
//     <div>

//       <h2>My Memories</h2>

//       <input
//       placeholder="Search memories..."
//       onChange={(e)=>setSearch(e.target.value)}
//       />

//       <div className="grid">

//         {filtered.map((entry,index)=>(
//           <MemoryCard
//           key={index}
//           entry={entry}
//           index={index}
//           entries={entries}
//           setEntries={setEntries}
//           />
//         ))}

//       </div>

//     </div>
//   );
// }

// export default Memories;

import { useState, useEffect } from "react";
import MemoryCard from "../components/MemoryCard";


function Memories() {

  const [entries, setEntries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("entries")) || [];

    setEntries(data);

  }, []);

  const filtered = entries.filter((e) =>
    (e.title || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h2>My Memories</h2>

      <input
        placeholder="Search memories..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">

        {filtered.map((entry, index) => (
          <MemoryCard
            key={index}
            entry={entry}
            index={index}
            entries={entries}
            setEntries={setEntries}
          />
        ))}

      </div>

    </div>
  );
}

export default Memories;