function Card(props) {
  return (
    <div className='card' style={{ border: "2px solid black", padding: "2px" }}>
      <img
        src='https://images.unsplash.com/photo-1724490056260-44bf1de2617e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        height='200px'
        width='200px'
      />
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}

export default Card;
