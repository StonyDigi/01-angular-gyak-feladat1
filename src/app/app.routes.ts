import { Routes, RouterModule } from '@angular/router';
import { HaromszogKerSzamolComponent } from './haromszog-ker-szamol/haromszog-ker-szamol.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'haromszogkerszamol', component: HaromszogKerSzamolComponent},
    {path: '', redirectTo: '/haromszogkerszamol', pathMatch: 'full'},
    {path: '**', redirectTo: '/haromszogkerszamol', pathMatch: 'full'}
];


@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}