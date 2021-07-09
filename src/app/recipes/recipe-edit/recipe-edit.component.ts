import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    editMode = false;
    id: number;
    recipe: Recipe;
    recipeForm: FormGroup;

    constructor(private route: ActivatedRoute,
        private recipeService: RecipeService,
        private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                if (params['id']) {
                    this.recipe = this.recipeService.getRecipe(+params['id']);
                    this.id = +params['id'];
                    this.editMode = true;
                } else {
                    this.recipe = new Recipe("New", "Tasty", "", []);
                    this.editMode = false;
                }

                this.initForm()
            }
        );
    }

    private initForm() {
        let name: string = '';
        let imagePath: string = '';
        let description: string = '';
        let recipeIngredients = new FormArray([]);

        if (this.editMode) {
            name = this.recipe.name;
            imagePath = this.recipe.imagePath;
            description = this.recipe.description;
            if (this.recipe['ingredients']) {
                for (let ingredient of this.recipe.ingredients) {
                    recipeIngredients.push(
                        new FormGroup({
                            'name': new FormControl(ingredient.name, Validators.required),
                            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
                        })
                    );
                }
            }
        }

        this.recipeForm = new FormGroup({
            'name': new FormControl(name, Validators.required), 
            'imagePath': new FormControl(imagePath, Validators.required), 
            'description': new FormControl(description, Validators.required),
            'ingredients': recipeIngredients
        })
    }

    get controls() {
        //console.log((<FormArray>this.recipeForm.get('ingredients')))
        return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }

    onSubmit() {
        let name = this.recipeForm.value['name'];
        let desc = this.recipeForm.value['description'];
        let imgP = this.recipeForm.value['imagePath'];
        let ings = this.recipeForm.value['ingredients'];

        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, name, desc, imgP, ings);
            this.router.navigate(['../'], { relativeTo: this.route });
        } else {
            const recipe = new Recipe(name, desc, imgP, ings);
            this.recipeService.addRecipe(recipe)
            this.router.navigate(['../'], { relativeTo: this.route });
        }

    }

    onAddIngredient() {
        (<FormArray>this.recipeForm.get('ingredients')).push(
            new FormGroup({
                'name': new FormControl(null, Validators.required),
                'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
        );
    }

    onDeleteIngredient(index: number) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }

    onCancel() {
        this.recipeForm.reset();
        
        this.router.navigate(['../']);
    }
}
