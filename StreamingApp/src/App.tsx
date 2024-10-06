import { useEffect, useState } from "react";

interface Product {
  Id: number;
  Name: string;
  Description: string;
  Price: number;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const eventSource = new EventSource(
      "https://localhost:7252/api/product/stream"
    );

    eventSource.onmessage = (event) => {
      const newProduct: Product = JSON.parse(event.data);
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    };

    eventSource.onerror = (error) => {
      console.error("Error Occurred", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>Product List (Streaming with SSE)</h1>
      <ul>
        {products.map((product) => (
          <li key={product.Id}>
            <strong>{product.Name}</strong> - {product.Description} ($
            {product.Price})
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
