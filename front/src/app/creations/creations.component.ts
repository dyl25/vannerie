import {Component, OnInit} from '@angular/core';

import {Creation} from './creation';
import {CreationsService} from './creations.service';

@Component({
    selector: 'app-creations',
    templateUrl: './creations.component.html',
    styleUrls: ['./creations.component.css']
})
export class CreationsComponent implements OnInit {

    title = 'Mes créations';
    creations: Creation[];

    constructor(private creationsService: CreationsService) {}

    getCreations():void {
        this.creationsService.getCreations().then(creations => this.creations = creations);
    }

    ngOnInit() {
        this.getCreations();
    }

}
