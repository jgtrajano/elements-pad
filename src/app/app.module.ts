import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { PadComponent } from './pad/pad.component';
import { FileComponent } from './file/file.component';

@NgModule({
    declarations: [
        PadComponent,
        FileComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    entryComponents: [
        PadComponent
    ]
})
export class AppModule {

    constructor(private injector: Injector) {}
    
    ngDoBootstrap() {
        const elements: any[] = [
            [PadComponent,"chaospad-pad"],
            [FileComponent,"chaospad-file"]
        ]; 
        for (const [component ,name] of elements) {
            const el = createCustomElement(component, { injector: this.injector });
            customElements.define(name, el);
        }
    }
}
