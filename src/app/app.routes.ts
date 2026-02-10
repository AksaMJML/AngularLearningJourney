import { Routes } from '@angular/router';
import { About } from './page/about/about';
import { Home } from './page/home/home';
import { Contact } from './page/contact/contact';


export const routes: Routes = [
    {
        path : "about",
        component : About
    },
    {
        path : "home",
        component : Home
    },
    {
        path : "contact",
        component : Contact
    }
];
