import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        AppRoutingModule,
    ],
    exports: [
        HeaderComponent,
    ]
})
export class CoreModule { }
