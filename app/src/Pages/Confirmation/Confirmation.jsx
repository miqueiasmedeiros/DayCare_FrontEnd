import React, { useEffect, useState } from "react";
import { getProducts } from "../../Services/Api";

export default function Confirmation() {
  const [originalProducts, setOriginalProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const getProductsFromLocalStorage = () => {
    const productsFromCart = JSON.parse(localStorage.getItem("products")) || [];
    return productsFromCart;
  };

  const fetchOriginalProducts = async () => {
    const response = await getProducts();
    console.log("Original Products:", response.data);
    setOriginalProducts(response.data);
  };

  const compareProducts = async () => {
    const productsFromCart = getProductsFromLocalStorage();
    setCartProducts(productsFromCart);

    if (!originalProducts || originalProducts.length === 0) {
      console.error("Original products are not loaded yet.");
      return;
    }

    const comparisonResults = productsFromCart.map((cartProduct) => {
      const originalProduct = originalProducts.find(
        (original) => original.id === cartProduct.id
      );
      return {
        ...cartProduct,
        originalPrice: originalProduct ? originalProduct.price : null,
        isPriceMatch: originalProduct
          ? arePricesEqual(originalProduct.price, cartProduct.price)
          : false,
      };
    });

    console.log("Comparison Results:", comparisonResults);
    setCartProducts(comparisonResults); // Atualiza o estado com os resultados da comparação
  };
  useEffect(() => {
    fetchOriginalProducts();
  }, []);

  useEffect(() => {
    compareProducts();
  }, [originalProducts]);

  return (
    <div>
      <h1>Compra realizada com sucesso!</h1>
      <div>
        {cartProducts.map((product) => (
          <div key={product.id + product.size}>
            <p>Produto: {product.nome}</p>
            <p>Preço no carrinho: {product.valor}</p>
            <p>Preço original: {product.originalPrice}</p>
            <p>
              {product.isPriceMatch
                ? "Os preços coincidem"
                : "Os preços não coincidem"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
