import { Category } from "@models/category.model";
import { Resource } from "@models/resource.model";
import { Website } from "@models/website.model";

export interface IResponseCategory {
  ok: boolean,
  categories: Category[],
  category: Category
  msg?: string,
}

export interface IResponseResource {
  ok: boolean,
  resources: Resource[],
  resource: Resource
  msg?: string,
}

export interface IResponseWebsite {
  ok: boolean,
  websites: Website[],
  website: Website,
  msg?: string,
}