// Generic types
/// <reference types="../../../../custom_types/extraprobe.d.ts"/>

// Heat levels for mixing and compressing recipes.
type RecipeHeat = "none" | "heated" | "superheated";

// The basic mixing recipe definition.
interface MixingRecipe {
    output: Internal.IngredientJS_;
    input: Internal.IngredientJS_;
    heat?: RecipeHeat;
    time?: number;
    id?: string;
};
