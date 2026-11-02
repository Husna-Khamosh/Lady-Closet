import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    // Add product to cart
    function addItem(product) {

        const addedQuantity = Number(product.quantity) || 1;

        setCart(function (previousCart) {

            const existingProduct = previousCart.find(function (item) {
                return (
                    item.id === product.id &&
                    item.selectedColor === product.selectedColor &&
                    item.selectedSize === product.selectedSize
                );
            });

            if (existingProduct) {

                return previousCart.map(function (item) {

                    if (
                        item.id === product.id &&
                        item.selectedColor === product.selectedColor &&
                        item.selectedSize === product.selectedSize
                    ) {
                        return {
                            ...item,
                            quantity: (Number(item.quantity) || 1) + addedQuantity
                        };
                    }

                    return item;
                });
            }

            return [
                ...previousCart,
                {
                    ...product,
                    quantity: addedQuantity
                }
            ];
        });
    }

    // Update product quantity
    function updateQuantity(product, newQuantity) {

        setCart(function (previousCart) {

            return previousCart.map(function (item) {

                if (
                    item.id === product.id &&
                    item.selectedColor === product.selectedColor &&
                    item.selectedSize === product.selectedSize
                ) {
                    return {
                        ...item,
                        quantity: Math.max(1, Number(newQuantity) || 1)
                    };
                }

                return item;
            });
        });
    }

    // Remove product from cart
    function removeItem(product) {

        setCart(function (previousCart) {

            return previousCart.filter(function (item) {
                return !(
                    item.id === product.id &&
                    item.selectedColor === product.selectedColor &&
                    item.selectedSize === product.selectedSize
                );
            });
        });
    }

    // Calculate total
    const total = cart.reduce(function (sum, product) {

        return sum + (
            Number(product.price) * (Number(product.quantity) || 1)
        );

    }, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                updateQuantity,
                removeItem,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

export default CartContext;