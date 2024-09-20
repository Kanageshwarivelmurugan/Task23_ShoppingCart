import "bootstrap/dist/css/bootstrap.min.css";
import AddtoCart from "./AddtoCart";
import Product from "./Product";
import { useState } from "react"



function App() {

  const products = [
    {
      "name": "Modern  Greeny Stylish Sofa",
      "description": "A sleek and stylish sofa perfect for contemporary living rooms.",
      "price": 900,
      "image": "../public/images/IMG_20240920_205504.jpg"

    },
    {
      "name": "Industrial Coffee Table",
      "description": "A rustic coffee table made from reclaimed wood and metal.",
      "price": 299.99,
      "image": "../public/images/IMG_20240920_204314.jpg"
    },
    {
      "name": "Ergonomic Office Chair",
      "description": "A comfortable chair designed for long hours at the desk.",
      "price": 200,
      "image": "../public/images/IMG_20240920_205230.jpg"
    },
    {
      "name": "Elegant Dining Table",
      "description": "A spacious dining table that can seat up to 8 people.",
      "price": 1300,
      "image": "../public/images/IMG_20240920_205246.jpg"

    },
    {
      "name": "Vintage Bookshelf",
      "description": "A charming bookshelf that adds character to any room.",
      "price": 340,
      "image": "../public/images/IMG_20240920_205330.jpg"

    },
    {
      "name": "Contemporary Bed Frame",
      "description": "A stylish bed frame with a modern design and built-in storage.",
      "price": 700,
      "image": "../public/images/IMG_20240920_205342.jpg"

    },
    {
      "name": "Luxury Recliner",
      "description": "A plush recliner with multiple reclining positions for ultimate comfort.",
      "price": 500,
      "image": "../public/images/IMG_20240920_205359.jpg"

    },
    {
      "name": "Folding Patio Table",
      "description": "A versatile outdoor table that folds for easy storage.",
      "price": 150,
      "image": "../public/images/IMG_20240920_205408.jpg"

    },
    {
      "name": "Rustic Dining Chairs",
      "description": "Set of 4 dining chairs with a rustic finish.",
      "price": 300,
      "image": "../public/images/IMG_20240920_205440.jpg"
    },
    {
      "name": "Adjustable Standing Desk",
      "description": "A desk that easily adjusts from sitting to standing positions.",
      "price": 350,
      "image": "../public/images/IMG_20240920_205454.jpg"


    },
  
  ]
  const [total, setTotal] = useState(0)
  const [items, setItems] = useState([])
  let addItem = (product) => {
    setItems([...items, product])
    setTotal(total + product.price)
  }
  let removeItem = (product) => {
    let index=items.findIndex(item => item.name === product.name)
    if (index != -1){
      items.splice(index,1)
      setItems([...items])
      setTotal(total - product.price)
    }
  }

  return (
    <div className="container " > 
      <div className="title" ><h1 className="display-4 fw-normal text-body-emphasis">Furniture Shopping Cart</h1>
      </div>
      <div className="row">
        <div className="col-lg-9">
          <h1>Products</h1>
          <div className="d-flex flex-wrap">
            {
              products.map((product) => {
                return <Product product={product} addItem={addItem}  />
              })
            }

          </div>
        </div>
        <div className="col-lg-3">
          <h1>Cart({items.length})</h1>
          <AddtoCart items={items} total={total}  removeItem={removeItem} />

        </div>
      </div>
    </div>
  )
}
export default App;