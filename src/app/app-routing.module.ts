import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionFormComponent } from './components/section-form/section-form.component';
import { SectionBulletinComponent } from './components/section-bulletin/section-bulletin.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
