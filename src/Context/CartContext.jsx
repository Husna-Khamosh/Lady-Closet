import { createContext, useState, useContext } from "react";

const CartContext = createContext();
export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    function addItem(product){
        setCart(function(previousCart){
            return [...previousCart, product];
        });

    }


    function removeItem(product) {
        setCart(function (previousCart) {
            return previousCart.filter(function (item) {
                return item.id !== product.id;
            });
        });
    }

    const total = cart.reduce(function (sum, product) {
        return sum + Number(product.price);
    }, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
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