import Image from "next/image"
import ProductCard from "@/components/product-card"
import "./page.css"

export default function Home() {
  const products = [
    { id: 1, name: "Carne", price: "R$ 10,00", image: "/pastelreal.png" },
    { id: 2, name: "Pizza", price: "R$ 10,00", image: "/pastelcinza.png" },
    { id: 3, name: "Carne", price: "R$ 10,00", image: "/pastelreal.png" },
    { id: 4, name: "Pizza", price: "R$ 10,00", image: "/pastelcinza.png"},
    { id: 5, name: "Carne", price: "R$ 10,00", image: "/pastelreal.png" },
    { id: 6, name: "Pizza", price: "R$ 10,00", image: "/pastelcinza.png" },
    { id: 7, name: "Carne", price: "R$ 10,00", image: "/pastelreal.png" },
    { id: 8, name: "Pizza", price: "R$ 10,00", image: "/pastelcinza.png" },
  ]

  return (
    <main className="main-container">
      <div className="content-wrapper">
        {/* Header */}
        <div className="header">
          <h1 className="title">
            Pastelaria do seu Zé
            <Image src="/fotoicon.png" alt="Cake icon" width={40} height={40} className="cake-icon" />
          </h1>
        </div>

        {/* Products Grid */}
        <div className="products-container">
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
