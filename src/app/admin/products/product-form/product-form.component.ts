import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  isEditing: boolean = false;
  product: Product = new Product();

  constructor(private activeRoute: ActivatedRoute, 
    private productRepository: ProductRepository,
    private router: Router) { 

    this.isEditing = this.activeRoute.snapshot.params["mode"] == "edit";
    if(this.isEditing) {
      let id = +this.activeRoute.snapshot.params["id"];
      this.product = this.productRepository.getProduct(id);
    }
  }

  ngOnInit() {
  }

  save(form: NgForm) {
    this.productRepository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }

}
