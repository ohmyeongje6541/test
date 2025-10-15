// counter 전역상태 count의 값을 1 증가 시키는 버튼 컴포넌트

// counterSlice 에서 increment(상태 count + 1) 액션 생성자 함수
// increment : 액션 생성자 함수 -> 액션을 생성한다
import { increment } from "../store/counterSlice";


import { useDispatch } from "react-redux";
export default function CounterIncrement() {
  
    // dispatch 함수 생성
    const dispatch = useDispatch();

    function clickHandler() {
      dispatch(increment());
    }
  
  return (
    <div>
      <button
        onClick={() => {
        clickHandler();
        }}
      >
        1 증가
      </button>
    </div>
  );
}
