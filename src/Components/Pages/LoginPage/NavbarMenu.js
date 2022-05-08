import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import './NavbarStyle.css';

const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isMenu2, setisMenu2] = useState(false);
    const [isMenu3, setisMenu3] = useState(false);
    const [isMenu4, setisMenu4] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const [isResponsiveclose2, setResponsiveclose2] = useState(false);
    const [isResponsiveclose3, setResponsiveclose3] = useState(false);
    const [isResponsiveclose4, setResponsiveclose4] = useState(false);
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
    const [isMenuSubMenu3, setMenuSubMenu3] = useState(false);
    const [isMenuSubMenu4, setMenuSubMenu4] = useState(false);



    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };


  const toggleClass2 = () => {
    setisMenu2(isMenu2 === false ? true : false);
    setResponsiveclose2(isResponsiveclose2 === false ? true : false);
};

const toggleClass3 = () => {
    setisMenu3(isMenu3 === false ? true : false);
    setResponsiveclose3(isResponsiveclose3 === false ? true : false);
};

const toggleClass4 = () => {
    setisMenu4(isMenu4 === false ? true : false);
    setResponsiveclose4(isResponsiveclose4 === false ? true : false);
};

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

  
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
  
    const toggleSubmenu2= () => {
        setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
      };

    const toggleSubmenu3= () => {
        setMenuSubMenu3(isMenuSubMenu3 === false ? true : false);
      };

    const toggleSubmenu4= () => {
        setMenuSubMenu4(isMenuSubMenu4 === false ? true : false);
      }; 
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
    let boxClassSubMenu2 = ["sub__menus"];
    if(isMenuSubMenu2) {
        boxClassSubMenu2.push('sub__menus__Active');
    }else {
        boxClassSubMenu2.push('');
    }

    let boxClassSubMenu3 = ["sub__menus"];
    if(isMenuSubMenu3) {
        boxClassSubMenu3.push('sub__menus__Active');
    }else {
        boxClassSubMenu3.push('');
    }

    let boxClassSubMenu4 = ["sub__menus"];
    if(isMenuSubMenu4) {
        boxClassSubMenu4.push('sub__menus__Active');
    }else {
        boxClassSubMenu4.push('');
    }
  
    return (
    <header className="header__middle">
        <div className="containernavbar">
            <div className="row">

                {/* Add Logo  */}

                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' style = {{color:"#85231d"}}to="/Home">
                         <h2>LOSTSECURE</h2> 
                    </NavLink>
                </div> 
             

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>} 
  
    
                    <ul className={boxClass.join(' ')}>                    
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/WantedPeopleList`}> Şahısları Listele </NavLink> </li>
                    
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/AddWantedPeople/_add`}> Şahıs Ekle </NavLink> </li>
                       
                   </ul>
            



                    </nav>     
                </div>          
        
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu;