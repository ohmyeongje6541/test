import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// useSearchParams 훅 불러오기
// useSearchParams 훅: 쿼리 파라미터 관리
import { useSearchParams } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  // SearchParams: 쿼리 파라미터 값을 가진 객체
  // setSearchParmas: 쿼리 파라미터 값을 변경하는 함수
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect 콜백 함수를 언제 실행할 것이냐를 결정
  // 의존성 배열이 빈 배열이면 컴포넌트가 첫 랜더링 될 때 콜백 함수 실행
  // 의존성 배열에 데이터가 있으면 데이터가 변경 될 때 콜백 함수 실행
  useEffect(() => {
    const order = searchParams.get("order") ?? "asc"; // Nullish 연산자를 통해 기본값 지정
    const sortBy = searchParams.get("sortBy") ?? "id";

    async function getPosts() {
      const response = await axios.get(
        `https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}`
      );
      setPosts(response.data.posts);
    }
    getPosts();
  }, [searchParams]);
  // 의존성 배열에 searchParams를 넣어서
  // 쿼리 파라미터가 변경되면 useEffect 콜백 함수 실행
  // 쿼리 파라미터가 변경된다 -> searchParams() 실행
  return (
    <div>
      <div className="flex gap-2">
        <button
          className="bolder-2 p-2 cursor-pointer"
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "asc" });
          }}
        >
          ID 오름차순
        </button>
        <button
          className="bolder-2 p-2 cursor-pointer"
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "desc" });
          }}
        >
          ID 내림차순
        </button>
      </div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              No. {post.id} - {post.title}
            </Link>
            <br />
          </div>
        );
      })}
    </div>
  );
}
