import { FoodItem } from "./FoodItem"

export class FetchFood {
  app_key: string
  app_id: string
  url_upc: string
  url_ingr: string

  constructor(app_key?, app_id?) {
    if (app_key == undefined) {
      app_key = "523ab7a940442e6dbcee45599240648f"
      app_id = "37258125"
    }

    this.app_key = app_key
    this.app_id = app_id
    this.url_upc = "https://api.edamam.com/api/food-database/v2/parser?app_id={app_id}&app_key={app_key}&upc={upc}"
      .replace("{app_id}", app_id)
      .replace("{app_key}", app_key)
    this.url_ingr = "https://api.edamam.com/api/food-database/v2/parser?app_id={app_id}&app_key={app_key}&ingr={ingr}"
      .replace("{app_id}", app_id)
      .replace("{app_key}", app_key)
  }

  generateUpcUrl(upc): string {
    return this.url_upc.replace("{upc}", upc)
  }

  generateIngrUrl(ingr): string {
    return this.url_ingr.replace("{ingr}", ingr)
  }

  getNutritionFromBarcode(upc) {
    return fetch(this.generateUpcUrl(upc))
      .then((response) => response.json())
      .catch(() => {
        console.log("Something Went Wrong")
      })
  }

  getFirstNutritionFromBarcode(upc) {
    return this.getNutritionFromBarcode(upc).then((response) => {
      if (response.hints.length == 0) {
        return null
      }
      
      if (response != undefined) {
        if (response.hints instanceof Array) response = response.hints[0]
        return new FoodItem(response)
      }
    })
  }

  getNutritionFromKeyword(ingr) {
    return fetch(this.generateIngrUrl(ingr))
      .then((response) => response.json())
      .catch(() => {
        console.log("Something Went Wrong")
      })
  }

  async getFirstNutritionFromKeyword(ingr): Promise<FoodItem> {
    return this.getNutritionFromKeyword(ingr).then((response) => {
      if (response.hints.length == 0) {
        return null
      }

      if (response != undefined) {
        if (response.hints instanceof Array) response = response.hints[0]
        return new FoodItem(response)
      }
    })
  }
}
