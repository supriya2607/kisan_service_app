import React from "react";
import  './Header.css'
import logo from './logo.jpeg';

function Header() {
  // function goBack(){}
    return (
        <>
        <div className="header">
        {/* <span onClick={goBack}><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" 
        xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" 
        strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 12L17 12M7 12L11 8M7 12L11 16" 
        stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></span> */}
        <a href="/" className="logo">
        <img src={logo} alt=""/></a>
      </div>
      </>
    );
  }

  export default Header;
