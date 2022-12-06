import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EInfoComponent } from './e-info/e-info.component';
import { NavComponent } from "./nav/nav.component";
import { IntroComponent } from "./intro/intro.component";
import {FooterComponent} from "./footer/footer.component";
import { WidgetComponent } from './widget/widget.component';
import { CommentsComponent } from './comments/comments.component';
@NgModule({
    declarations: [
        AppComponent,
        EInfoComponent,
        NavComponent,
        IntroComponent,
        FooterComponent,
        WidgetComponent,
        CommentsComponent,
    ],
    providers: [NavComponent,IntroComponent,WidgetComponent,CommentsComponent,FooterComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule
    ]
})
export class AppModule { }
