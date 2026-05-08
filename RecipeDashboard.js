import React from 'react';
import { RecipeCards, IngredientFilters, FeaturedChefSection, FavoritesSidebar, CookingTipsPanel } from './components';

const RecipeDashboard = () => {
  return (
    <div>
      <header>Food Recipe Dashboard</header>
      <IngredientFilters />
      <RecipeCards />
      <FavoritesSidebar />
      <FeaturedChefSection />
      <CookingTipsPanel />
    </div>
  );
};

export default RecipeDashboard;
