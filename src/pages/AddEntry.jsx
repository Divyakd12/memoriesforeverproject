// import { useState } from "react";
// import StarRating from "../components/StarRating";

// function AddEntry() {
//   const [lat,setLat] = useState("");
//   const [lng,setLng] = useState("");
//   const [title,setTitle] = useState("");
//   const [image,setImage] = useState("");
//   const [location,setLocation] = useState("");
//   const [rating,setRating] = useState(0);

//   const handleSubmit = (e) => {

//     e.preventDefault();

//     const entries =
//       JSON.parse(localStorage.getItem("entries")) || [];

//     entries.push({
//       title,
//       image,
//       location,
//       rating,
//       favorite:false
//     });

//     localStorage.setItem("entries",JSON.stringify(entries));

//     alert("Memory Added!");

//   };

//   return (
//     <div className="form">

//       <h2>Add Memory</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//               type="file"
//               onChange={(e)=>{
              
//               const file = e.target.files[0];
              
//               const reader = new FileReader();
              
//               reader.onloadend = ()=>{
//               setImage(reader.result);
//               };
              
//               reader.readAsDataURL(file);
              
//               }}
//               />

//         <input placeholder="Title"
//         onChange={(e)=>setTitle(e.target.value)} />

//       <input placeholder="Image URL"
//         onChange={(e)=>setImage(e.target.value)} />

//         <input placeholder="Location"
//         onChange={(e)=>setLocation(e.target.value)} />
//         <input
//         placeholder="Latitude"
//         onChange={(e)=>setLat(e.target.value)}
//         />
        
//         <input
//         placeholder="Longitude"
//         onChange={(e)=>setLng(e.target.value)}
//         />

//         <StarRating rating={rating} setRating={setRating}/>

//         <button>Add</button>

//       </form>

//     </div>
//   );
// }

// export default AddEntry;
//  import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AddEntry() {

//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     title: "",
//     location: "",
//     rating: "",
//     notes: "",
//     date: "",
//     image: ""
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Convert image to Base64
//   const handleImage = (e) => {
//     const file = e.target.files[0];

//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setForm({
//         ...form,
//         image: reader.result
//       });
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let entries = JSON.parse(localStorage.getItem("entries")) || [];
//     const editIndex = localStorage.getItem("editIndex");

//     if (editIndex !== null) {
//       entries[editIndex] = form;
//       localStorage.removeItem("editIndex");
//     } 
//     else {
//       if (entries.length >= 20) {
//         entries.shift();
//       }

//       entries.push(form);
//     }

//     try {
//       localStorage.setItem("entries", JSON.stringify(entries));
//       alert("Entry Saved Successfully!");
//       navigate("/");
//     } 
//     catch (error) {
//       alert("Storage Full! Please clear old entries.");
//       console.error(error);
//     }

//     setForm({
//       title: "",
//       location: "",
//       rating: "",
//       notes: "",
//       date: "",
//       image: ""
//     });
//   };

//   return (
//     <div className="container">
//       <h2>Add Travel Entry</h2>

//       <form onSubmit={handleSubmit}>

//         <input
//           type="text"
//           name="title"
//           placeholder="Trip Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           value={form.location}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="number"
//           name="rating"
//           placeholder="Rating (1-5)"
//           value={form.rating}
//           onChange={handleChange}
//           min="1"
//           max="5"
//           required
//         />

//         <textarea
//           name="notes"
//           placeholder="Write your experience..."
//           value={form.notes}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//           required
//         />

//         {/* Image Upload */}
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImage}
//         />

//         {/* Image Preview */}
//         {form.image && (
//           <img
//             src={form.image}
//             alt="preview"
//             style={{ width: "150px", marginTop: "10px" }}
//           />
//         )}

//         <button type="submit">Save Entry</button>

//       </form>
//     </div>
//   );
// }

// export default AddEntry;

import { useState } from "react";
import StarRating from "../components/StarRating";
import "./AddEntry.css";
function AddEntry() {

  const [title,setTitle] = useState("");
  const [location,setLocation] = useState("");
  const [notes,setNotes] = useState("");
  const [date,setDate] = useState("");
  const [image,setImage] = useState("");
  const [rating,setRating] = useState(0);

  // Upload image
  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const entries =
      JSON.parse(localStorage.getItem("entries")) || [];

    const newEntry = {
      title,
      location,
      notes,
      date,
      image,
      rating,
      favorite:false
    };

    entries.push(newEntry);

    localStorage.setItem("entries",JSON.stringify(entries));

    alert("Memory Added!");

    // reset form
    setTitle("");
    setLocation("");
    setNotes("");
    setDate("");
    setImage("");
    setRating(0);
  };

  return (

    <div className="form">


      <form className=".form"onSubmit={handleSubmit}>
      <h2 className="form-title">Add Memory</h2>


        {/* Upload Image */}
        <label>Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />

        <p className="ortheme">OR</p>

        {/* Image URL */}
        <input
          type="text"
          placeholder="Paste Image URL"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
        />

        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
          required
        />

        {/* Date */}
        <input
          type="date"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
          required
        />

        {/* Experience */}
        <textarea
          placeholder="Write your experience..."
          value={notes}
          onChange={(e)=>setNotes(e.target.value)}
        />

        {/* Clickable Star Rating */}
        <br/><label className="lablerating">Rating</label>
        <StarRating
          rating={rating}
          setRating={setRating}
        />

        {/* Image Preview */}
        {image && (
          <img
            src={image}
            alt="preview"
            style={{
              width:"200px",
              marginTop:"10px",
              borderRadius:"8px"
            }}
          />
        )}

        <button>Add Memory</button>

      </form>

    </div>
  );
}

export default AddEntry;