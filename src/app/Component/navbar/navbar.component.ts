import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
routes=[
  {path:"home",title:"Home"},
  {path:"cart",title:"Shope"},
  {path:"aboutus",title:"About Us"},
  {path:"contactus",title:"Contact Us"},
  {path:"profile",title:"Profile"},
  {path:"login",title:"Login"},
  {path:"oops",title:"Oops"},
]
}
