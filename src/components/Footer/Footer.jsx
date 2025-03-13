import React from "react";
import logoFooter from "../../assets/images/logo_Footer.png"
import "../Footer/Footer.scss"


export default function Footer(){
    return (
        <footer className="footer">
          <img className="footer__logo" src={logoFooter} alt="logo_footer"/>
          <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}