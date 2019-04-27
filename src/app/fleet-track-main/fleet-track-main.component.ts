import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-fleet-track-main',
    templateUrl: './fleet-track-main.component.html',
    styleUrls: ['./fleet-track-main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FleetTrackMainComponent implements OnInit {

    public vehicles$ = this.apiService.vehicles$;
    public loading$ = this.apiService.loading$;
    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.apiService.loadVehicle();
    }

}
