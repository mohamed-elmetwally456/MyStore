import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { FormsModule } from '@angular/forms';
import { HighlightIPipe } from '../../pipes/highlight-i.pipe';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,NgClass,ProductsComponent,HighlightIPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchText: string = '';
}
