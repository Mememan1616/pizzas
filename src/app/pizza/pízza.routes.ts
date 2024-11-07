import { Routes } from "@angular/router";

export default [
    {
    path:"main",
    loadComponent:() => import("./pizza.component")
    }
] as Routes