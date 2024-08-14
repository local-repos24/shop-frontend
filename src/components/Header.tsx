import Menu from "./Menu";
import '../styles/Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*incons from fontawesome are camelcase, just remove hyphens. 
example: <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
fa-magnifying-glass -> faMagnifyingGlass
*/
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () : JSX.Element => {
    return(
        <header className="header-container"> 
            <div className="logo-container">
                <img className="logo-container-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1020px-TheHomeDepot.svg.png" />
                <div className="logo-container-title">
                    <h2>You are shopping at</h2>
                    <h3>Store</h3>
                    <h4>OPEN until: 4pm</h4>
                </div>
            </div>
            <div className="search-bar-container">
                <input type="text"  className="search-bar"/>
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={"1.5em"} />
                </div>
            </div>
            <Menu />
        </header>
    )
}

export default Header;