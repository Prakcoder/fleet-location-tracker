import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-vehicle-list',
    templateUrl: './vehicle-list.component.html',
    styleUrls: ['./vehicle-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleListComponent implements OnInit {

    @Input() vehicles$: Observable<Vehicle[]>;
    @Output() showMapClicked = new EventEmitter<string>();
    constructor() { }

    ngOnInit() {
    }

    public showMap(vehicleId: string) {
        this.showMapClicked.emit(vehicleId);
    }

}
