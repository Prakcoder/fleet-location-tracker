import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-vehicle-list',
    templateUrl: './vehicle-list.component.html',
    styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

    @Input() vehicles$: Observable<Vehicle[]>;
    constructor() { }

    ngOnInit() {
    }

}
