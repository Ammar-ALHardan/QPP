import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
   
        
            {path: '', pathMatch: 'full', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)},
            {path: 'add-task', pathMatch: 'full', loadChildren: () => import('./pages/add-task/add-task.module').then(m => m.AddTaskPageModule)},
            {path: 'edit-task/:ID', pathMatch: 'full', loadChildren: () => import('./pages/edit-task-page/edit-task-page.module').then(m => m.EditTaskPageModule)},
        
    
];
