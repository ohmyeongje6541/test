// components/DummyJSON/QuoteContainer.jsx

import Quote from "./Quote";
import axios from "axios";
import { useState } from "react";

export default function QuoteContainer() {
  const [quotes, setQuotes] = useState([
    { id: 0, quote: "견본 인용문", author: "견본 인용자" },
  ]);

  async function handleFetchQuotes() {
    // 랜덤 인용문 가져오기 로직
    // API : <https://dummyjson.com/docs/quotes#quotes-random>
    const response = await axios.get("https://dummyjson.com/quotes/random");
    const data = response["data"];
    
    // 데이터를 업데이트 할 배열에 넣어야 인용문이 잘 돌아감
    const updateQuotes = [...quotes,data];
    setQuotes(updateQuotes);
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <button
        className="bg-blue-500 text-white px-4 py-2 cursor-pointer mb-6"
        onClick={handleFetchQuotes}
      >
        인용문 가져오기
      </button>
      <div className="space-y-4">
        {/* Quote 컴포넌트 반복 */}
        {quotes.map((quote) => {
          <Quote key={quote.id} quote={quote}/>;
        })}
      </div>
    </div>
  );
}
