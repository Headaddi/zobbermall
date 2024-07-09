import React from 'react'
import './Navbar.css'
import Search from '../Search/Search';
import Cart from '../Cart/Cart';

function Navbar (){
   return (
    
        <div className='navbar'>
            <p className="navTitle">ZOBBERMALL</p>
            <div className='searchAndCart'>
              <Search/>
              <Cart/>
            </div>
           
        </div>
   )
}

export default Navbar;