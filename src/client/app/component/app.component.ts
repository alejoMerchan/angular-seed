import { Component } from '@angular/core';
@Component({
    selector: 'app',
    template: `<h1>Esto es  {{ name }}!</h1>`
})
export class AppComponent {
    name: string;
    constructor() {
        this.name = 'El Mercadito';
    }
}