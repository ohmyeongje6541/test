import React from "react";

// submit 이벤트는 form 태그만 발생한다
export default function onSubmit() {
  function handleSubmit(event) {
    event.preventDefault();
   console.log(event);
   
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input type="text" name="email" className="border-2" />
        <input type="password" name="password" className="border-2" />
        <input type="submit" value="제출" className="border-2" />
      </form>
    </div>
  );
}
