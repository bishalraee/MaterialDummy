import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { About } from './component/about/about';
import { Blogs } from './component/blogs/blogs';
import { Product1 } from './component/product1/product1';
import { Registration } from './component/registration/registration';
import { Registration2 } from './component/registration2/registration2';

export const routes: Routes = [
    {path:'',component: Home},
    {path:'about', component: About},
    {path:'blogs', component:Blogs},
    {path:'product1', component:Product1},
    {path:'registration', component: Registration},
    {path:'registration2', component: Registration2}
];
