import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { MiscellaneousModule } from './components/miscellaneous/miscellaneous.module';
import { IotDashboardModule } from './components/iot-dashboard/iot-dashboard.module';

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule,
        NbMenuModule,

        CommonModule,
        DashboardModule,
        MiscellaneousModule,
        IotDashboardModule
    ],
    declarations: [
        PagesComponent,
    ],
})
export class PagesModule {
}
