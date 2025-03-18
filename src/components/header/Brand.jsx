import brand from "../../img/brand.png";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="Bit Store" title="Bit Store"></img>
        </Link>
    )
}

export default Brand;