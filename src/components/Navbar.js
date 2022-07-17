import React, {useRef} from 'react';
import { Button} from 'react-bootstrap';
import styled from 'styled-components';
import {FaBars, FaTimes} from 'react-icons/fa';


const Navigation = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <NavbarItems>
      <header>
          <Button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
          </Button>
        <nav ref = {navRef}>
          <Button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes/>
          </Button>
            <a href="#home">Home</a>
            <a href="#features">About</a>
            <a href="#pricing">Projects</a>
            <a href="#pricing">Resume</a>
            <a href="#pricing">Blogs (Coming Soon...)</a> 
        </nav>
        <div>
            <Image src="/images/Anurag.jpeg" className="img-fluid logo" alt="brand" />
        </div>
      </header>
    </NavbarItems>
  )
}

const Image = styled('img')`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const NavbarItems = styled('div')`
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 2rem;
    color: #fff;

    
  }
  header .nav-btn{
      padding: 5px;
      cursor: pointer;
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
      visibility: hidden;
      opacity: 0;
    }


  nav a{
    margin: 0 3rem;
    text-decoration: none;
    color: #fff;

    :hover{
      color: #f345;
    }
  }

  svg{
    font-size: 1.5rem;
  }

  

  @media only screen and (max-width: 1024px){
    header .nav-btn{
      visibility: visible;
      opacity: 1;
    }

    nav{
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 75%;
      display: flex;
      flex-direction: column;
      padding-top: 100px;
      gap: 1rem;
      transition: 1s;
      transform: translateX(-100%);
      background: rgba( 31, 29, 54, 0.1 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 8.5px );
      -webkit-backdrop-filter: blur( 8.5px );
      border-radius: 5px;
      border: 1px solid rgba( 255, 255, 255, 0.18 );
    }

    nav a{
      margin: 0 2rem;
    }
  

    header .responsive_nav{
      transform: none;
    }

    nav .nav-close-btn{
      position: absolute;
      top: 1.4rem;
      left: 2rem;
    }
   
  }
`;

export default Navigation;