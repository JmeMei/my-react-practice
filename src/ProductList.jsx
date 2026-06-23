export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999,
    },
    {
      id: 2,
      name: "Phone",
      price: 699,
    },
    {
      id: 3,
      name: "Tablet",
      price: 499,
    },
  ];

  return (
    <div>
      <h2>Our Products</h2>
      {products.map((products) => {
        return (
          <div>
            <h3>{products.name}</h3>
            <p>Price: ${products.price}</p>
          </div>
        );
      })}
    </div>
  );
};
