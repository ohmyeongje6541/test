// components/ProductCard/ProductCard.jsx

export default function ProductCard({product}) {
  return (
    <div className="border rounded-lg p-4 shadow-md w-80">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded mb-4" />
      <h2 className="text-xl font-semibold mb-2">상품명: {name}</h2>
      <p>가격: {price}원</p>
      <p>설명: {description}</p>
      <p>재고 상태: {inStock ? "재고 있음" : "품절"}</p>
      <p>평점: {rating}</p>
      <p>태그들: {tags}</p>
    </div>
  );
}
