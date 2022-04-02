import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  { 
    path: 'home',
   loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) 
  }, 
  { 
    path: 'about-us', 
    loadChildren: () => import('./pages/aboutpage/aboutpage.module').then(m => m.AboutpageModule) 
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
