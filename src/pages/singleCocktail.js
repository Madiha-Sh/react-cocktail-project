import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  { Link } from 'react-router-dom';
import Loading from '../components/loading';
import { useGlobalContext } from '../context';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const getData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(`${url}${id}`);
      const data = await resp.json();
      const { drinks } = data;
      if(drinks) {
        // console.log(drinks[0]);
        const { 
          idDrink : id, 
          strDrink : name,
          strGlass: glass,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
         } = drinks[0];
         const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
         ]
        const newCocktail = { name, image, info, category, glass, ingredients, instructions };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
      setIsLoading(false);

    } catch(error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);


  if(isLoading) {
    return <Loading />
  }
  if(!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }
  else {
    const { name, image, glass, info, category, instructions, ingredients } = cocktail;
    return (
      <section className='section cocktail-section'>
          <Link to='/' className='btn btn-primary'>
            back home
          </Link>
          <h2 className='section-title'>{name}</h2>
          <div className='drink'>
            <img src={image} alt={name}></img>
            <div className='drink-info'>
              <p>
                <span className='drink-data'>name :</span> {name}
              </p>
              <p>
                <span className='drink-data'>category :</span> {category}
              </p>
              <p>
                <span className='drink-data'>info :</span> {info}
              </p>
              <p>
                <span className='drink-data'>glass :</span> {glass}
              </p>
              <p>
                <span className='drink-data'>instructons :</span> {instructions}
              </p>
              <p>
                <span className='drink-data'>ingredients :</span>
                {ingredients.map((item, index) => {
                  return item ? <span key={index}> {item}</span> : null
                })}
              </p>
            </div>
          </div>
        </section>
    )
  };

};

export default SingleCocktail;