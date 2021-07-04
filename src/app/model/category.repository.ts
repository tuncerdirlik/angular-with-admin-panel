import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { RestService } from "./rest.service";

@Injectable()
export class CategoryRepository implements OnInit {
    
    private categories: Category[];

    constructor(private restService: RestService){
        this.restService.getCategories().subscribe(categories => this.categories = categories);
    }

    ngOnInit() {
        
    }

    getCategory(id: number): Category {
        return this.categories.find(k => k.id === id);
    }

    getCategories(): Category[] {
        return this.categories;
    }

    saveCategory(category: Category) {
        if(category.id == null || category.id == 0) {
            this.restService.addCategory(category).subscribe(k => this.categories.push(k));
        }
        else {
            this.restService.updateCategory(category).subscribe(p => {
                let _id = this.categories.findIndex(k => k.id == category.id);
                this.categories.splice(_id,1,category);
            })
        }
    }

    deleteCategory(category: Category) {
        this.restService.deleteCategory(category).subscribe(p => {
            let _index = this.categories.findIndex(k => k.id == category.id);
            this.categories.splice(_index,1);
        });
    }

}
