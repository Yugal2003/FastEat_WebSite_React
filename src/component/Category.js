import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Category.css'
import { NavLink } from 'react-router-dom';

const Category = () => {
    const [category , setCategory] = useState([]);

    async function fetchCategory(){
        const result = await axios("https://www.themealdb.com/api/json/v1/1/categories.php");
        // console.log(result.data.categories);
        setCategory(result.data.categories);
    }

    useEffect(() => {
        fetchCategory();
    },[]);

  return (
    <div className='whole_category_page'>
        <h1 style={{fontFamily: "cursive",textAlign : "center",textDecoration : "underline"}}>Category</h1>
        {
            category.map((subCategory) => {
                return (
                    <div className='subcategory_flex' key={subCategory.idCategory}>
                        <NavLink to={`/subcategory/${subCategory.strCategory}`} > 
                            <div className='subcategory_img_with_name'>
                                <img width={"300px"} height={"190px"} src={subCategory.strCategoryThumb} alt={subCategory.strCategory}/>
                                <h2>{subCategory.strCategory}</h2>
                            </div>
                        </NavLink>
                    </div>
                  );
            })
        }
    </div>
  )
}

export default Category