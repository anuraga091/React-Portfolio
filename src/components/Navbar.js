import React, {useRef} from 'react';
import { Button} from 'react-bootstrap';
import styled from 'styled-components';
import {FaBars, FaTimes} from 'react-icons/fa';

import { ImBlog } from "react-icons/im";
import {
  
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";


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
            <a href="#home">  <AiOutlineHome style={{ marginRight: "10px",height:'0.9em',width:'0.9em' }} /> Home</a>
            <a href="#features"><AiOutlineUser style={{ marginRight: "10px",height:'0.9em',width:'0.9em' }} /> About</a>
            <a href="#pricing"><AiOutlineFundProjectionScreen
                  style={{ marginRight: "10px",height:'0.9em',width:'0.9em' }}
                /> Projects</a>
            <a href="#pricing"><CgFileDocument style={{ marginRight: "10px",height:'0.9em',width:'0.9em' }} />  Resume</a>
            <a href="#pricing"> <ImBlog style={{ marginRight: "10px",height:'0.9em',width:'0.9em' }} /> Blogs (Coming Soon...)</a> 
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
      @media (min-width: 1024px){
        background: rgba( 31, 29, 54, 0.1 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 8.5px );
        -webkit-backdrop-filter: blur( 8.5px );
        
      }
      
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 2rem;
    color: #fff;
    background: rgba( 31, 29, 54, 1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 14.5px );
    -webkit-backdrop-filter: blur( 14.5px );
    

    
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
    font-size: 18px;
    font-weight: 700;

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
      height: 80vh;
      width: 75%;
      display: flex;
      flex-direction: column;
      padding-top: 100px;
      gap: 1.5rem;
      transition: 0.5s;
      transform: translateX(-100%);
      background: rgba( 31, 29, 54, 0.1 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 8.5px );
      -webkit-backdrop-filter: blur( 8.5px );
      border-radius: 5px;
      border: 1px solid rgba( 255, 255, 255, 0.18 );
    }

    nav a{
      margin: 0 0 0 2rem;
    }
  

    header .responsive_nav{
      transform: none;
    }

    nav .nav-close-btn{
      position: absolute;
      top: 0.7rem;
      left: 1.9rem;
    }
   
  }
`;

export default Navigation;