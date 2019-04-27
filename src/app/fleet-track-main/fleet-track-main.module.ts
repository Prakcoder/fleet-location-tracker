import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ApiService } from '../services/api.service';
import { FleetTrackMainComponent } from './fleet-track-main.component';

@NgModule({
    declarations: [FleetTrackMainComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [ApiService]
})
export class FleetTrackMainModule { }
