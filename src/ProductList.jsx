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

  const productElements = products.map((product) => {
    return (
      <div>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Our Products</h2>
      {productElements}
    </div>
  );
};
