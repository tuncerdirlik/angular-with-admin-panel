import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "src/app/model/cart.model";
import { Product } from "src/app/model/product.model";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  
  @Input() products: Product[] = [];
  selectedProduct: Product = null;

  constructor(
    private cartModel: Cart, 
    private router: Router) {}

  ngOnInit() {}

  addProductToCart(product: Product) {
    this.cartModel.addItem(product);
    this.router.navigateByUrl("/cart");
  }

  displayDetails(product: Product) {
    this.selectedProduct = product;
  }

  hideDetails() {
    this.selectedProduct = null;
  }
}
