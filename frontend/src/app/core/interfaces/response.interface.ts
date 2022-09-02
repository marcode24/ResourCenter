import { Category } from "@models/category.model";

export interface IResponseCategory {
  ok: boolean,
  categories: Category[],
  category: Category
  msg?: string,
}
