import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-routing-outlet-footer',
    template: "<footer id='footer'> This is a footer controlled by a router-outlet name </footer>",
})
export class RoutingOutletFooterComponent implements OnInit {
    ngOnInit(): void {
        console.log('initialized');
    }
    
}