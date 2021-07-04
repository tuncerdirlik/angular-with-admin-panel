import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../model/cart.model";
import { Category } from "../model/category.model";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: "shop",
    templateUrl: "shop.component.html"
})
export class ShopComponent{

    public selectedCategory: Category = null;

    public productsPerPage: number = 2;
    public selectedPage: number = 1;
    public selectedProducts: Product[] = [];

    constructor(
        private productRepository: ProductRepository
    ){}


    get products(): Product[] {

        let startIndex = (this.selectedPage - 1) * this.productsPerPage;
        let endIndex = startIndex + this.productsPerPage;

        this.selectedProducts = this.productRepository
                                    .getProducts(this.selectedCategory);

        return this.selectedProducts
                    .slice(startIndex, endIndex);
    }

    get pageNumbers(): number[] {
        
        let value = Math.ceil(this.productRepository.getProducts(this.selectedCategory).length / this.productsPerPage);
        
        return Array(value).fill(0).map((a,i) => i + 1);
    }


    changePage(pageNumber: number) {
        this.selectedPage = pageNumber;
    }

    

    changePageSize(value: number) {
        this.productsPerPage = value;
        this.changePage(1);
    }

    getCategory(category: Category) {
        this.selectedCategory = category;
    }
}