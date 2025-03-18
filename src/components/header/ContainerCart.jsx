import "../../styles/containerCart.css";
import close from "../../img/close.svg";
import ItemCart from "./ItemCart";
import clear from "../../img/clear.svg";
import { useContext } from "react";
import { controllerShowCart } from "./ContextCart";
import { listCartContext } from "../components item/providerContextoListCart";
import { useNavigate } from "react-router-dom";

const ContainerCart = () => {

    const { cartShow, setCartShow} = useContext(controllerShowCart);
    const {listCart, clearCart } = useContext(listCartContext);
    const navigate = useNavigate();

    const style = {
        display: cartShow
    }

    const closeCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    const handleFinishPurchase = () => {
        if (listCart.length === 0) {
            alert("Tu carro esta vacio. Agrega algunos productos primero.");
            return;
        }
        navigate("/checkout");
    }

    return(
        
            <div className="cart" style={style} >
                <div className="cerrar">
                    <button className="close" onClick={closeCart}>
                        <img src={close}></img>
                    </button>
                </div>

                <div className="containerItemsCart">
                    {
                        (listCart.length === 0 ) ? <span className="emptyCart">Tu carrito esta vacio, ¡llenalo!</span>
                        : listCart.map(producto => ( 
                            <ItemCart 
                                key={producto.id}
                                id={producto.id}
                                title={producto.title}
                                image={producto.imageProduct.firtsImage}
                                quantity={producto.quantity}
                                price={producto.price}
                            />
                        ))
                    }   
                </div>

                <div className="TerminarCompra">
                    
                    <button className="terminar" onClick={handleFinishPurchase} >
                        Terminar compra
                    </button>

                    <button className="clear" onClick={clearCart}>
                        <img src={clear}></img>
                    </button>
                </div>
            </div>
        
    )
}

export default ContainerCart