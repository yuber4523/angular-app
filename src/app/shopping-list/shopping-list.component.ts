import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Talong', 12)
  //   ,new Ingredient('Okra', 8)
  // ];
  ingridients: Ingredient[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingridients = this.slService.getIngredients();
    this.subscription =this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingridients = ingredients;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  // }

}
