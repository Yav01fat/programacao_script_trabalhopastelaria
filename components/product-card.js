import Image from "next/image"
import "./product-card.css"

export default function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <h3 className="product-name">{name}</h3>
      <div className="product-image-container">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="product-image" />
      </div>
      <p className="product-price">{price}</p>
    </div>
  )
}
