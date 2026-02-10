import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./page/nav/nav";
import { Footer } from "./page/footer/footer";
import { LoginForm } from "./page/login-form/login-form";
import { FormsModule } from '@angular/forms';

interface Customer{
  name : string;
  age : number;
  address : string;
  phone : string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  customer : Customer = {
    name : '',
    age : 0,
    address : '',
    phone : ''
  }
}
