import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionFormComponent } from './components/section-form/section-form.component';
import { SectionBulletinComponent } from './components/section-bulletin/section-bulletin.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'section-bulletin',
    pathMatch: 'full'
  },
  {
    path: 'section-form',
    component: SectionFormComponent
  },
  {
    path: 'section-bulletin',
    component: SectionBulletinComponent
  },
  {
    path: 'pensamentos/excluir-pensamentos/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editar-pensamentos/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
