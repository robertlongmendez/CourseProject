import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Meat Cakes', 'Traditional cakes', 'https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/c/829/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg'),

    new Recipe('Fish Cakes', 'Fun cakes', 'https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/c/829/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

}
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

// onRecipeSelected(recipe: Recipe) {
// // this.recipeWasSelected.emit(recipe);
// //   }
