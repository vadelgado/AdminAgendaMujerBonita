import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

// Guards
import { AuthGuard } from './utils/auth.guard';
import { AddEditCitasComponent } from './components/add-edit-citas/add-edit-citas.component';
import { ListCitasComponent } from './components/list-citas/list-citas.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'inicio', component: BienvenidaComponent },
      { path: 'addCita', component: AddEditCitasComponent },
      { path: 'listCita', component: ListCitasComponent },
      { path: 'editCita/:id', component: AddEditCitasComponent },
    ],
  },
  { path: 'not-found', component: NoFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
