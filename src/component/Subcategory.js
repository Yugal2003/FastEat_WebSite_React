import React,{ useEffect, useState } from 'react'
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import Navbar from './Navbar';
import './Subcategory.css'
import Footer from './Footer';

const Subcategory = () => {

  const [subCategoryProduct, setSubCategoryProduct] = useState([]);

  const params = useParams();

  async function fetchSubCategoryProduct(){
    const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.subcategory}`);
    console.log(result);
    setSubCategoryProduct(result.data.meals);
  }

  useEffect(() =>{
    fetchSubCategoryProduct();
  },[]);

  return (
      <div>
        <Navbar/>
        <h1 style={{fontFamily : "cursive",textDecoration : "underline",textAlign : "center"}}>MEALS</h1>
        {
          subCategoryProduct &&
            subCategoryProduct.map((product) => {
              return (
                <div className='img_with_name_box' key={product.idMeal}>
                  <NavLink to={`/product/${product.idMeal}`}>
                    <img
                      className='img'
                      src={product.strMealThumb}
                      alt={product.strMeal}
                    />
                    <h6 style={{textDecoration : "none"}}>{product.strMeal}</h6>
                  </NavLink>
                </div>
              );
            })
        }
        <Footer/>
      </div>
  )
}

export default Subcategory