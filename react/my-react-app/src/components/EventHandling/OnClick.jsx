import React from "react";

export default function OnClick() {
  function handleClick(event) {
    alert("클릭");
  }

  return (
    <div>
      <button
        onClick={(event) => {
          handleClick(event);
        }}
      >
        클릭
      </button>
    </div>
  );
}
