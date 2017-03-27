import { Component, Input } from '@angular/core';
import {Client} from './client';

@Component({
    moduleId: module.id,
    selector:'client-profile',
    templateUrl:'client-profile.component.html'
})
export class ClientProfileComponent {
    @Input() client: Client;
}