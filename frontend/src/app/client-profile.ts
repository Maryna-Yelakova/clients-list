import { Component, Input } from '@angular/core';
import {Client} from './client';

@Component({
    moduleId: module.id,
    selector:'client-profile',
    templateUrl:'client-profile.html'
})
export class ClientProfileComponent {
    @Input() client: Client;
}