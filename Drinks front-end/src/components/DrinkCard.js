import React, { useState } from 'react';
import './drinkCard.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Drink = ({ drink}) => {
  const [showRecipe, setShowRecipe] = useState(false);

  const handleClick = () => {
    setShowRecipe((prevState) => !prevState);
  };

  const renderTooltip = (props) => (
    <Tooltip {...props} data-bs-theme="dark" className="custom-tooltip">
      <div className="popup">
              <div className="ingredients">
                <h4>Ingredients:</h4>
                <>
                  {getIngredientsWithMeasures(drink).map((ingredientWithMeasure, index) => (
                    <li key={index}>{ingredientWithMeasure}</li>
                  ))}
                </>
              </div>
              <h4>Directions:</h4>
              <p>{drink.strInstructions}</p>
            </div>
    </Tooltip>
  );

  return (
      <div className="drink-container">
        <div className='drink-item'>
          <OverlayTrigger
            placement="auto"
            
            overlay={renderTooltip}
          >
            <img src={drink.strDrinkThumb} alt={drink.strDrink} onClick={handleClick} />
          </OverlayTrigger>
  
          <h2 className='drink-name'>{drink.strDrink}</h2>
          <h3>Ingredients:</h3>
          <p>{getIngredients(drink).join(', ')}</p>
          {/* click on pick to show recipe */}
          {/* {showRecipe && (
            <div className="popup2">
              <div className="ingredients">
                <h4>Ingredients:</h4>
                <ul>
                  {getIngredientsWithMeasures(drink).map((ingredientWithMeasure, index) => (
                    <li key={index}>{ingredientWithMeasure}</li>
                  ))}
                </ul>
              </div>
              <h4>Directions:</h4>
              <p>{drink.strInstructions}</p>
            </div>
          )} */}
        </div>
      </div>
    );
  };

export default Drink;

// Helper functions
function getIngredientsWithMeasures(drink) {
  const ingredientsWithMeasures = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink['strIngredient' + i];
    const measure = drink['strMeasure' + i];

    if (ingredient && measure) {
      ingredientsWithMeasures.push(`${measure} ${ingredient}`);
    } else if (ingredient) {
      ingredientsWithMeasures.push(ingredient);
    }
  }
  return ingredientsWithMeasures;
}

function getIngredients(drink) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink['strIngredient' + i];

    if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  return ingredients
}