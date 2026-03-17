function StarRating({ rating, setRating }) {

  return (
    <div>

      {[1,2,3,4,5].map((star) => (

        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            cursor:"pointer",
            color: star <= rating ? "gold" : "gray",
            fontSize:"20px"
          }}
        >
          ★
        </span>

      ))}

    </div>
  );
}

export default StarRating;