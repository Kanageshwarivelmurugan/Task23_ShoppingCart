const AddtoCart = ({ total, items ,removeItem}) => {
  return (

    <div>
      <ol className="list-group list-group-numbered">
      {items.map((items) => {
       return ( <li class="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{items.name}</div>
          Rs{items.price}
        </div>
        <button onClick={() => {
          removeItem(items)
        }}  className="badge text-bg-primary rounded-pill">X</button>
      </li>)
      })
    }
      </ol>
      <h1>Total : {total}</h1>
    </div>
  )
}
export default AddtoCart