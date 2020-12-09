export interface EdamamReturn {
  food: {
    image: string
    label: string
    category: string
    categoryLabel: string
    foodId: string
    nutrients: Nutrients
  }
  [key: string]: any
}

export interface Nutrients {
  CHOCDF: number
  ENERC_KCAL: number
  FAT: number
  FIBTG: number
  PROCNT: number
}

export class FoodItem {
  json: EdamamReturn

  constructor(json) {
    this.json = json
  }

  getImage(): string {
    return this.json.food.image
  }

  getLabel(): string {
    return this.json.food.label
  }

  getCategory(): string {
    return this.json.food.category
  }

  getId(): string {
    return this.json.food.foodId
  }

  getNutrientsRaw() {
    return this.json.food.nutrients
  }

  getNutrients(): NutrientItem[] {
    const toReturn = []
    const nutrientsRaw = this.getNutrientsRaw()

    toReturn.push(new NutrientItem("Carbs", nutrientsRaw.CHOCDF))
    toReturn.push(new NutrientItem("Calories", nutrientsRaw.ENERC_KCAL))
    toReturn.push(new NutrientItem("Fat", nutrientsRaw.FAT))
    toReturn.push(new NutrientItem("Fiber", nutrientsRaw.FIBTG))
    toReturn.push(new NutrientItem("Protein", nutrientsRaw.PROCNT))

    return toReturn
  }
}

export class NutrientItem {
  id: string
  value: string

  constructor(id, value) {
    this.id = id
    this.value = value
  }

  getName(): string {
    return this.id
  }

  getValue(): string {
    return this.value
  }
}
