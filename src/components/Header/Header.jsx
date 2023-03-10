import { NavLink } from "react-router-dom";
/* import logo from "../../assets/logo.png"; */

const CartButton = () => {
    return(
        <button>
            <i class="fa-solid fa-cart-shopping"></i>
            <span> 1205 руб.</span>
        </button>
    )
};


const Header = () => {
    return(
        <header className="header">
            <div className="logo">
                {/* <img src={logo} alt="React Sneakers Logo" /> */} Logo

                <div>
                    <h1>Reack Sneakers</h1>
                    <p>Магазин лучших кросовок</p>
                    
                </div>
            </div>

            <nav className="nav">
                <NavLink to="/favorites"><i class="fa-solid fa-heart"></i></NavLink>
                <NavLink to="/orders"><i class="fa-solid fa-user"></i></NavLink>
            </nav>
        </header>
    );
}

export default Header;