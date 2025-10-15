import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../store/counterSlice";

export default function CounterIncrementByAmount() {
  const dispatch = useDispatch();
  // 지역 상태 payload 목적: 사용자 입력 값 관리
  const [payload, setPayload] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={payload}
        onChange={(e) => {
          setPayload(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmount(payload));
        }}
      >
        증가
      </button>
    </div>
  );
}
