import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CompanyPlaceholderComponent } from './company-placeholder/company-placeholder.component';

import {
    NbCardModule,
    NbListModule,
    NbTabsetModule,
    NbUserModule,
    NbIconModule,
    NbActionsModule,
    NbSpinnerModule,
    NbBadgeModule,
    NbSelectModule,
    NbInputModule,
} from '@nebular/theme';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        // Nebular Module
        NbCardModule,
        NbListModule,
        NbTabsetModule,
        NbUserModule,
        NbIconModule,
        NbActionsModule,
        NbSpinnerModule,
        NbBadgeModule,
        NbSelectModule,
        NbInputModule,
    ],
    declarations: [
        DashboardComponent,
        CompanyPlaceholderComponent
    ],
})
export class DashboardModule { }
