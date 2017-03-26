import {Component, OnInit} from '@angular/core';
import {ClientsService} from './clients.service';

@Component({
    moduleId: module.id,
    selector:'clients-list',
    templateUrl:'app.component.html'
})

export  class AppComponent implements OnInit{
    
    constructor(private clientsService: ClientsService){}

    ngOnInit() {
        this.clientsService.getClientsList()
            .subscribe(
                data => {
                    console.log(data)
                },
                error => {
                    console.log(error);
                });
    }
}

