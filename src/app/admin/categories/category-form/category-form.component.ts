import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  isEditing: boolean = false;
  category: Category = new Category();

  constructor(private activeRoute: ActivatedRoute, 
    private router: Router,
    private categoryRepository: CategoryRepository
    ) {

      this.isEditing = this.activeRoute.snapshot.params["mode"] == "edit";
      if(this.isEditing) {
        let id = +this.activeRoute.snapshot.params["id"];
        this.category = this.categoryRepository.getCategory(id);
      }

     }

  ngOnInit() {
  }

  save(form: NgForm) {
    this.categoryRepository.saveCategory(this.category);
    this.router.navigateByUrl("/admin/main/categories");
  }

}
