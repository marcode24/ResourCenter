export class Resource {
  constructor(
    public name: string,
    public description: string,
    public image: string,
    public link: string,
    public category?: string,
    public _id?: string,
  ) {}
}
