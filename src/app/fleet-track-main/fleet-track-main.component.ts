import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-fleet-track-main',
    templateUrl: './fleet-track-main.component.html',
    styleUrls: ['./fleet-track-main.component.scss']
})
export class FleetTrackMainComponent implements OnInit {

    public vehicles$: Observable<Vehicle[]>;
    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.vehicles$ = this.apiService.loadVehicle();
    }

}
