import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  { path: 'pais', component: PorPaisComponent, pathMatch: 'full' },
  { path: 'region', component: PorRegionComponent, pathMatch: 'full' },
  { path: 'capital', component: PorCapitalComponent, pathMatch: 'full' },
  { path: 'pais/:id', component: VerPaisComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'pais' }, //o puede llevarnos a un componenete 404
];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
