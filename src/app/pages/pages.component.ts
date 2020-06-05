import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
    selector: 'ngx-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['pages.component.scss'],
})
export class PagesComponent {
    menu = MENU_ITEMS;
}
