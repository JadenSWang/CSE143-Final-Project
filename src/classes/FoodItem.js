export default class FoodItem {
    constructor(json) {
        this.json = json;
    }

    getImage() {
        return this.json.hints[0].food.image
    }

    getLabel() {
        return this.json.hints[0].food.label
    }

    getCategory() {
        return this.json.hints[0].food.category
    }
}