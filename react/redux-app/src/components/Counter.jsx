import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function Counter() {
  const counter = useSelector((state) => state.counter);

  const count = useSelector((state) => state["counter"]["count"])
  // useEffect(() => {
  //   console.log(counter);
  // }, []);
  return <div>전역 상태 Count의 값 : {count}</div>;
}
