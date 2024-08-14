import { useEffect, useState, useRef } from "react";
import {NavLink, redirect} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//css
import "../styles/components/Menu.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";


const redirectToLogin = (): any => {
        window.location.href="/auth/signin"
    }

const redirectToSingUp = (): any => {
        window.location.href="/auth/signup"
    }

const Menu = (): JSX.Element =>{

    const [showSubMenu, setShowSubmenu] = useState(false);
    const accountComponentRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
    const btnClick = () : void => {
        setShowSubmenu(!showSubMenu);
      }
    
    const handleClickOutside = (event: MouseEvent) => {
        if (accountComponentRef.current && !accountComponentRef.current.contains(event.target as Node)) {
            setShowSubmenu(false);
        }
      };
    
    const signInButton = {
        text: "SignIn",
        style: "button-style-signin",
        call: redirectToLogin
    }
    const signUpButton = {
        text: "Register",
        style: "button-style-signup",
        call: redirectToSingUp
    }


    return(
        <nav className="menu-container">
            <ul className="ul-menu-container">
                <div className={"ul-subMenu"}
                 onClick={btnClick}>
                    <FontAwesomeIcon icon={faUser} className="icon"/> My Account
                </div>
                {
                    (showSubMenu) && (
                        <div className="account-component" ref={accountComponentRef}>
                            <div className="parent-buttons">
                                <Button {...signInButton}/>
                                <Button {...signUpButton}/>
                            </div>
                        </div>
                     )
                }
                <NavLink to={"/cart"}
                 className="ul-subMenu">
                 <FontAwesomeIcon icon={faCartShopping} className="icon"/>
                Cart | item
                </NavLink>
            </ul>
        </nav>
    );
}

export default Menu;