import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/pages/login/login.component';
import { RegisterComponent } from './user/pages/register/register.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "profile",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: "book",
    loadChildren: () => import("./book/book.module").then(m => m.BookModule),
    canActivate: [AuthGuard]
  },
  {
    path: "blog",
    loadChildren: () => import("./blog/blog.module").then(m => m.BlogModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
