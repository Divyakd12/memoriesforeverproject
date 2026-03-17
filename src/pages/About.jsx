import React from "react";
function About() {
  return (
    <>
    <div className="about-container">

      <h1 className="about-title">About Memory Journal</h1>

      <p className="about-desc">
        Memory Journal is your personal space to capture moments,
        experiences, and stories that shape your journey.
        Every memory you write becomes a page in your life’s diary.
      </p>

      <h2 className="quote-title">Memory Quotes</h2>

      <div className="quotes-box">

        <p className="quote">
          "Memories are the timeless treasures of the heart." 💭
        </p>

        <p className="quote">
          "A journal is where yesterday lives and tomorrow begins."
        </p>

        <p className="quote">
          "Memories are proof that a moment once mattered."
        </p>

        <p className="quote">
          "Memories are whispers of the past, reminding us of the beauty
          we have already lived."
        </p>

        <p className="quote">
          "Take only memories, leave only footprints."
        </p>

        <p className="quote">
          "Travel isn't always about places — it's about the memories
          we collect along the way." 🌍
        </p>

      </div>

    </div>
   <style>
{`
.about-container{
  max-width:800px;
  margin:-70px auto;
  padding:40px;
  text-align:center;

  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(4px);
  border-radius:12px;

  color:white;
}

.about-title{
  font-size:36px;
  margin-bottom:20px;
  color:black;
}

.about-desc{
  font-size:18px;
  margin-bottom:30px;
  line-height:1.6;
  color:black;

}

.quote-title{
  font-size:26px;
  margin-bottom:20px;
}

.quotes-box{
  display:flex;
  flex-direction:column;
  gap:18px;
}

.quote{
  font-style:italic;
  font-size:18px;
  background:rgba(0,0,0,0.4);
  padding:15px;
  border-radius:8px;
  border-left:4px solid #4fd1c5;
  transition:0.3s;
}

.quote:hover{
  transform:scale(1.03);
  background:rgba(0,0,0,0.6);
}
`}
</style>
    </>
  );
}

export default About;