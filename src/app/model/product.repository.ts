import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { Product } from "./product.model";
import { RestService } from "./rest.service";

@Injectable()
export class ProductRepository implements OnInit {
    
    private products: Product[];

    constructor(private restService: RestService){
        this.restService.getProducts().subscribe(products => this.products = products);
    }

    ngOnInit() {
        
    }

    getProduct(id: number): Product {
        return this.products.find(k => k.id == id);
    }

    getProducts(category: Category = null): Product[] {
        if (category)
        {
            return this.products.filter(k => k.category == category.name);
        }
        else {
            return this.products;
        }
    }

    saveProduct(product: Product) {
        if(product.id == null || product.id == 0) {
            this.restService.addProduct(product).subscribe(k => this.products.push(k));
        }
        else {
            this.restService.updateProduct(product).subscribe(p => {
                let _id = this.products.findIndex(k => k.id == product.id);
                this.products.splice(_id,1,product);
            })
        }
    }

    deleteProduct(product: Product) {
        this.restService.deleteProduct(product).subscribe(p => {
            let _index = this.products.findIndex(k => k.id == product.id);
            this.products.splice(_index,1);
        });
    }

}
