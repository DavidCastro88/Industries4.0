import React,{useState,useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn,NavBtnLink} from './Navbarelements';
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav]=useState(false)

    const changeNav=()=>{
        if(window.scrollY>=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[])
    const toggleHome=()=>{
        scroll.scrollToTop();
    }
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}> 
                    Industries 4.0
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='machineLearning'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'
                        >MachineLearning</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='cloudComputing'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>CloudComputing</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='iot'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Internet of Things</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='cibersecurity'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Cibersecurity</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar