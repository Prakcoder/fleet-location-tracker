import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApiService } from '../services/api.service';
import { FleetTrackMainComponent } from './fleet-track-main.component';

@NgModule({
    declarations: [FleetTrackMainComponent],
    imports: [
        CommonModule
    ],
    providers: [ApiService]
})
export class FleetTrackMainModule { }
