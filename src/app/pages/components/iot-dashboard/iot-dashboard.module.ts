import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { IotDashboardComponent } from './iot-dashboard.component';

@NgModule({
    imports: [
        ThemeModule,
    ],
    declarations: [
        IotDashboardComponent,
    ],
})
export class IotDashboardModule { }
