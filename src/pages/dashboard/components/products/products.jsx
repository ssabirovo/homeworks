const Products = ({ products }) => {
  return (
    <div>
      <h1>Products Component</h1>
      <pre>
       {JSON.stringify(products)}
      </pre>
    </div>
  );
};

export default Products;
