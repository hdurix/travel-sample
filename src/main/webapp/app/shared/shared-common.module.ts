import { NgModule } from '@angular/core';

import { TravelSampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TravelSampleSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TravelSampleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TravelSampleSharedCommonModule {}
