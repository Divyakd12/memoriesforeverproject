


import React, { useState, useEffect } from "react";

function ThemeToggle() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
      <style>
{`
body.dark{
  background:#121212;
  color:white;
  background: url("https://t4.ftcdn.net/jpg/06/72/18/19/360_F_672181955_lXsf7pCfWNRjsdHsBAx9h3kf3eI4FuaS.jpg") no-repeat center center/cover;
  min-height: 100vh;
 background:black;
z-index: -1;
  
}
body.dark .dashboard-title {
  color:white;

}
  body.dark .mysearch{
  color:white;
}
body.dark .navbar{
  // background:white;
}

body.dark .entry-card{
  background:#1e1e1e;
  color:white;
}

body.dark .theme-btn{
  background:#333;
  color:white;
}

/* ADD THIS PART */
body.dark .form form{
  background:#1e1e1e;
  color:white;
}

body.dark .form input,
body.dark .form textarea{
  background:#2c2c2c;
  color:white;
  border:1px solid #555;
}

body.dark .form input::placeholder,
body.dark .form textarea::placeholder{
  color:#bbb;
}

body.dark .form label{
  color:white;
}

body.dark .form button{
  background:#2980b9;
}

body.dark .form button:hover{
  background:#1f6391;


}
body.dark .form-title,lablerating,ortheme{
color:white;
}
body.dark .ortheme{
color:white;
}

body.dark .box{
color:white;
}
body.dark .box1{
color:white;
}
body.dark .box2{
color:white;
}
body.dark .box3{
color:white;
}
body.dark .view1 p,
body.dark .view1 h1,
body.dark .view1 b{
  color:white;
}
`}
</style>
    </>
  );
}

export default ThemeToggle;