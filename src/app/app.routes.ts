import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './presentation/pages/login/login.component';
import { AjouterEleveComponent } from './presentation/pages/ajouter-eleve/ajouter-eleve.component';
import { AjouterProfesseurComponent } from './presentation/pages/ajouter-professeur/ajouter-professeur.component';
import { AjouterUtilisateursComponent } from './presentation/pages/ajouter-utilisateurs/ajouter-utilisateurs.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } ,
  { path: 'login', component: LoginComponent },
  { path: 'ajouter-eleve', component: AjouterEleveComponent },
  { path: 'ajouter-professeur', component: AjouterProfesseurComponent },
  { path: 'ajouter-utilisateurs', component: AjouterUtilisateursComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
