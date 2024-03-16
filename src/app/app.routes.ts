import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { LoginComponent } from './Component/login/login.component';
import { OopsComponent } from './Component/oops/oops.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { CartComponent } from './Component/cart/cart.component';

export const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"contactus",component:ContactUsComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"login",component:LoginComponent},
  {path:"oops",component:OopsComponent},
  {path:"cart",component:CartComponent},
  {path:"product/:id",component:ProductDetailsComponent},
  {path:"**",component:NotfoundComponent},
];
