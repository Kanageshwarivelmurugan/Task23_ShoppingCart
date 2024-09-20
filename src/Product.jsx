function Product({ product, addItem }) {


  return <div className="col">
    <div class="card" style={{ width: "10rem" }}>
    < img src= {product.image} class="card-img-top img-fluid" />

      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-text">Rs{product.price}</h6>
        <button onClick={() => {
          addItem(product)
        }} className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>



}
export default Product
//"image":    < img src= "https://fastly.picsum.photos/id/237/100/100.jpg?hmac=Pna_vL4vYBRMXxFMY-lYXcZAL34T7PZWdNDlEOwqqE4" class="card-img-top"    alt="..." />

