import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Home } from "./page/home/home";
import { Nav } from "./components/nav/nav";
import { Footer } from "./components/footer/footer";

interface Customer{
  name : string;
  age : number;
  address : string;
  phone : string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Home, Nav, Footer],
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
