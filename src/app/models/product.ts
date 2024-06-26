import {Category} from "@app/models/category";

export class Product {
  private _image: string
  private _name: string
  private _description: string
  private _price: number
  private _sku: string
  private _visible: boolean
  private _category: Category
  private _waiting: boolean
  private _quantity: number
  private _short_description: string
  private _stock: number
  private _in_cart: boolean

  constructor(image: string, name: string, description: string, price: number, sku: string, visible: boolean,
              category: Category, short_description: string, stock: number, in_cart: boolean, quantity: number = 0,) {
    this._image = image;
    this._name = name;
    this._description = description;
    this._price = price;
    this._sku = sku;
    this._visible = visible;
    this._category = category;
    this._waiting = false
    this._quantity = quantity
    this._short_description = short_description
    this._stock = stock
    this._in_cart = in_cart
  }

  get in_cart(): boolean {
    return this._in_cart;
  }

  set in_cart(value: boolean) {
    this._in_cart = value;
  }

  get stock(): number {
    return this._stock;
  }

  set stock(value: number) {
    this._stock = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get short_description(): string {
    return this._short_description;
  }

  set short_description(value: string) {
    this._short_description = value;
  }

  get waiting(): boolean {
    return this._waiting;
  }

  set waiting(value: boolean) {
    this._waiting = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get sku(): string {
    return this._sku;
  }

  set sku(value: string) {
    this._sku = value;
  }

  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
  }

  get category(): Category {
    return this._category;
  }

  set category(value: Category) {
    this._category = value;
  }
}
