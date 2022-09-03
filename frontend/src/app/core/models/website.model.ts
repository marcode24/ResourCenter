import { Resource } from "./resource.model";

export class Website {
  constructor(
    public resource: Resource,
    public name: string,
    public description: string,
    public image: string,
    public link: string,
    public stars: number,
    public comments: string[],
    public _id?: string
  ) {}
}
