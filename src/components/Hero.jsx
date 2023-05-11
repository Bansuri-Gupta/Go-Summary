import React from 'react';
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="go_summary_logo" className="w-28 object-contain"/>
        <button 
        type="button"
        onClick={ () => window.open("https://github.com/Bansuri-Gupta")}
        className="black_btn"
        >
          Github
        </button>
      </nav>
        <h1 className="head_text">
          Get your Article Summary with <br className='max-md:hidden'/>
          <span className="blue_gradient">GoSummary</span>
        </h1>
        <h2 className='desc'>
           Simplify your reading by getting summary from one click using Go Summary  
        </h2>
    </header>
    
  );
};
export default Hero;
