import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //@Input() recipe: Recipe;
  recipe: Recipe;
  @Input() index: number;
  
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    //console.log(this.route.params['id']);
    this.recipe = this.recipeService.getRecipe(this.index);
  }

}
