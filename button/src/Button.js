import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  let likes = () => {
    if (count === 1) {
      return "like";
    } else {
      return "likes";
    }
  };

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {count} {likes()}
      </button>
    </div>
  );
}

export default Button;
