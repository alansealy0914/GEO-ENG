import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'home',
    templateUrl: './home.html'
})
export class HomeComponent {
    title: string;
    constructor(private toastr: ToastrService) {
        this.title = 'Internal Ordering System';
        this.toastr.success('Successful login.');
    }
}
