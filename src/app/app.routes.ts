import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"pizza",
        loadChildren:()=>import("./pizza/pízza.routes")    
    }

];
