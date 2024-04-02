import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');

  async function searchProducts() {
    const results = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
    setProducts(results.data.meals);
  }

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchProducts();
    }
  };

  return (
    <>
      <div className='main_navbar'>
        <div className="fasteat_with_signin_and_signout">
          <div className='fasteat'>
            <svg width={"25px"} height={"25px"}  style={{marginTop: "0.7rem", marginRight: "1rem"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/>
            </svg>
            <NavLink to='/'><h2 style={{ color: "white", fontFamily: "cursive", fontSize: "30px", textDecoration: "underline" }}>FastEat</h2></NavLink>
          </div>
          <div className='signin_and_signout'>
            {/* <button className='signup_btn'></button>
            <button className='login_btn'></button> */}
          </div>
        </div>
        <div className='input_with_search_bar'>
          <div className='input_with_button'>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress} // Add event listener for key press
              type='text'
              placeholder='Search Recipes Here ...'
            />
            <button onClick={searchProducts}>
              <svg className='svg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </button>
          </div><br></br><br></br>
          <h1 id='h1tag'>What are your favourite cuisines?</h1><br></br>
          <h3 id='h3tag'>PERSONALIZE YOUR EXPERIENCE</h3>
        </div>
      </div>

      {products.length > 0 && (
        <div className='meals_parent_elememt'>
          <h1 style={{ fontFamily: "cursive", textAlign: "center", textDecoration: "underline" }}>MEALS</h1>
          {products.map((pro) => {
            return (
              <div className='meals_whole_div' key={pro.idMeal}>
                  <NavLink to={`/product/${pro.idMeal}`}>
                  <div className='meals_div_only'>
                    <img width={"300px"} height={"220px"} src={pro.strMealThumb} alt={pro.idMeal} />
                    <div className='search_meals_data_name'>
                        <h3 className='h3tag_in_meals_page'>{pro.strCategory}</h3>
                        <h3 className='h3tag_in_meals_page'>{pro.strArea}</h3>
                        <h3 className='h3tag_in_meals_page'>{pro.strMeal}</h3>
                    </div>
                  </div>
                  </NavLink>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Navbar;