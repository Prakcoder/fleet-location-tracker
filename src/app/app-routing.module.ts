import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FleetTrackMainComponent } from './fleet-track-main/fleet-track-main.component';

const routes: Routes = [
    { path: '', component: FleetTrackMainComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
