import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { About } from './component/about/about';
import { Blogs } from './component/blogs/blogs';

export const routes: Routes = [
    {path:'',component: Home},
    {path:'about', component: About},
    {path:'blogs', component:Blogs}
];
