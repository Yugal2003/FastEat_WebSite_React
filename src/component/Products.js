import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import Navbar from "./Navbar";
import './Products.css'
import Footer from "./Footer";

const Product = () => {
  const [product, setProduct] = useState({});

  const params = useParams();

  async function fetchProduct() {
    const result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.productid}`
    );
    console.log(result.data.meals[0]);
    setProduct(result.data.meals[0]);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="products_h1tag">MEAL DETAILS</h1>

      <div className="meal_details_whole_page">
          <div className="products_img_with_text_part">
            <div className="meal_img"> 
              <img src={product.strMealThumb} alt={product.strMeal} />
            </div>
            <div className="category_source_tags_section_with_product_ingredients_orange_part">
              <div className="category_source_tags_section">
                <h2 className="product_orange_color">{product.strMeal}</h2>
                <h4><b>CATEGORY</b> : {product.strCategory}</h4>
                <h4><b>Source</b> : {product.strSource}</h4>
                <h4>Tags : {product.strTags}</h4>
              </div>
              <div className="product_ingredients_orange">
                  <h3>INGREDIENTS</h3>
                  <div className="infredients_data_only">
                      <div className="infredients_8_data">
                        <div style={{display : "flex"}}>
                          <span class="li-dot">1</span>
                          <ol className="oltag">{product.strIngredient1}</ol>
                        </div><br></br>
                        <div style={{display : "flex"}}>
                          <span class="li-dot">2</span>
                          <ol className="oltag">{product.strIngredient2}</ol>
                        </div><br></br>
                        <div style={{display : "flex"}}>
                          <span class="li-dot">3</span>
                          <ol className="oltag">{product.strIngredient3}</ol>
                        </div><br></br>
                        <div style={{display : "flex"}}>
                          <span class="li-dot">4</span>
                          <ol className="oltag">{product.strIngredient4}</ol>
                        </div><br></br>
                        <div style={{display : "flex"}}>
                          <span class="li-dot">5</span>
                          <ol className="oltag">{product.strIngredient5}</ol>
                        </div><br></br>
                        <div style={{display : "flex"}}>
                          <span class="li-dot">6</span>
                          <ol className="oltag">{product.strIngredient6}</ol>
                        </div><br></br>
                        <div style={{display : "flex"}}>
                          <span class="li-dot">7</span>
                          <ol className="oltag">{product.strIngredient7}</ol>
                        </div><br></br>
                        <div style={{display : "flex"}}>
                          <span class="li-dot">8</span>
                          <ol className="oltag">{product.strIngredient8}</ol>
                        </div><br></br>
                      </div>
                      <div className="infredients_7_data">
                        <div style={{display : "flex"}}>
                          <span class="li-dot">9</span>
                          <ol className="oltag">{product.strIngredient9}</ol>
                        </div><br></br>
                        <div style={{display : "flex"}}>
                          <span class="li-dot">10</span>
                          <ol className="oltag">{product.strIngredient10}</ol>
                        </div><br></br>
                        <div style={{display : "flex"}}>
                          <span class="li-dot">11</span>
                          <ol className="oltag">{product.strIngredient11}</ol>
                        </div><br></br>
                        <div style={{display : "flex"}}>
                          <span class="li-dot">12</span>
                          <ol className="oltag">{product.strIngredient12}</ol>
                        </div><br></br>
                        <div style={{display : "flex"}}>
                          <span class="li-dot">13</span>
                          <ol className="oltag">{product.strIngredient13}</ol>
                        </div><br></br>
                        <div style={{display : "flex"}}>
                          <span class="li-dot">14</span>
                          <ol className="oltag">{product.strIngredient14}</ol>
                        </div><br></br>
                        <div style={{display : "flex"}}>
                          <span class="li-dot">15</span>
                          <ol className="oltag">{product.strIngredient15}</ol>
                        </div><br></br>
                      </div>
                    </div>
              </div>
            </div>
          </div>
      
          <div className="products_Measure">
              <h2>Measure :</h2>
              <div className="measure_all_piece">
                  <div className="measure_8_piese">
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure1}</h4>
                      </div>
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure2}</h4>
                      </div>
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure3}</h4>
                      </div>
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure4}</h4>
                      </div>
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure5}</h4>
                      </div>
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure6}</h4>
                      </div>
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure7}</h4>
                      </div>
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure8}</h4>
                      </div>
                  </div>
                  <div className="measure_7_piese">
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure9}</h4>
                      </div>
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure10}</h4>
                      </div>
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure11}</h4>
                      </div>
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure12}</h4>
                      </div>
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure13}</h4>
                      </div>
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure14}</h4>
                      </div>
                      <div className="single_measure">
                        <svg color="#e16120" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                        <h4>{product.strMeasure15}</h4>
                      </div>
                  </div>
              </div>
          </div>
      
          <div className="products_Instructions">
              <h2>Products_Instructions</h2>
              <p>{product.strInstructions}</p>
          </div>
      </div>
      <Footer/>
    </div>
  );
  
};

export default Product;