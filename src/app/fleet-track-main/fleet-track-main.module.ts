import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GoogleMapComponent } from '../components/google-map/google-map.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { VehicleListComponent } from '../components/vehicle-list/vehicle-list.component';
import { ApiService } from '../services/api.service';
import { FleetTrackMainComponent } from './fleet-track-main.component';

@NgModule({
    declarations: [
        FleetTrackMainComponent,
        VehicleListComponent,
        LoaderComponent,
        GoogleMapComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [ApiService]
})
export class FleetTrackMainModule { }
