import React from "react";
import { useState } from "react";

export default function Form() {

  const [form, setForm] = useState({
    username: "",
    age: 0,
    email: "",
  });

  // 입력 요소의 값을 관리할 3개 형태
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  function hadleChange(event) {
    const target = event["target"];
    console.log(target);

    const { name, value } = target;
    console.log(name, value);

    const newForm = { ...form, [name]: value };
    setForm(newForm);

    if (username === "username") {
      setUsername(value);
    } else if (age === "age") {
      setAge(value);
    } else if (email === "email") {
      setEmail(value);
    }
  }

  return (
    <div>
      <form>
        <input
          className="border-2"
          type="text"
          name="username"
          value={form["username"]}
          onChange={(event) => {
            hadleChange(event);
          }}
        />
        <input
          className="border-2"
          type="number"
          name="age"
          value={form["age"]}
          onChange={(event) => {
            hadleChange(event);
          }}
        />
        <input
          className="border-2"
          type="email"
          name="email"
          value={form["email"]}
          onChange={(event) => {
            hadleChange(event);
          }}
        />
      </form>
    </div>
  );
}
