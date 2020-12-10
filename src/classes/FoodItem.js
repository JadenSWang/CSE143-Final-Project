export class FoodItem {
    constructor(json) {
        this.json = json;
    }
    getImage() {
        return this.json.food.image;
    }
    getLabel() {
        return this.json.food.label;
    }
    getCategory() {
        return this.json.food.category;
    }
    getId() {
        return this.json.food.foodId;
    }
    getNutrientsRaw() {
        return this.json.food.nutrients;
    }
    getCalories() {
        return this.getNutrients()[1].getValue();
    }
    getNutrients() {
        const toReturn = [];
        const nutrientsRaw = this.getNutrientsRaw();
        toReturn.push(new NutrientItem("Carbs", nutrientsRaw.CHOCDF));
        toReturn.push(new NutrientItem("Calories", nutrientsRaw.ENERC_KCAL));
        toReturn.push(new NutrientItem("Fat", nutrientsRaw.FAT));
        toReturn.push(new NutrientItem("Fiber", nutrientsRaw.FIBTG));
        toReturn.push(new NutrientItem("Protein", nutrientsRaw.PROCNT));
        return toReturn;
    }
}
export class NutrientItem {
    constructor(id, value) {
        this.id = id;
        this.value = value;
    }
    getName() {
        return this.id;
    }
    getValue() {
        return this.value;
    }
}
