import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        loadChildren: './components/login/login.module#LoginModule'
      },
      {
        path: 'expense',
        loadChildren: './components/expenses/expenses.module#ExpensesModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'infoUser',
        loadChildren: './components/info-user/info-user.module#InfoUserModule',
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
