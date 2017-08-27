export class Product {
  constructor(
    public pID: String,
    public pName: String,
    public pAmount: {amount: Number, type: String},
    public quantity: Number,
    public pPrice: Number,
    public pDiscount: Number,
    public pCategory: String,
    public pBrand: String,
    public pDescription: String,
    public pImgUrl: String
  ){}
}