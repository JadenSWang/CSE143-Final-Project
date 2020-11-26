export default class FoodItem {
    constructor(json) {
        this.json = json;
    }

    getImage() {
        return this.json.food.image
    }

    getLabel() {
        return this.json.food.label
    }

    getCategory() {
        return this.json.food.category
    }

    getId() {
        return this.json.food.foodId
    }

    getNutrients() {
        return this.json.food.nutrients
    }

    getCalories() {
        return this.getNutrients().ENERC_KCAL
    }
}