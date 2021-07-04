import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartDetailComponent } from "./shop/cart-detail/cart-detail.component";
import { CheckoutComponent } from "./shop/checkout/checkout.component";
import { ShopComponent } from "./shop/shop.component";

const appRoutes: Routes = [
    { path: "shop", component: ShopComponent },
    { path: "cart", component: CartDetailComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "admin", loadChildren: './admin/admin.module#AdminModule' },
    { path: "**", redirectTo: "/shop" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
      
}