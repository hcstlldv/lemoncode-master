import {
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiLabelModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
} from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './components/about/about.component';
import { CrudComponent } from './components/crud/crud.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        CrudComponent,
        DashboardComponent,
        GalleryComponent,
        HomeComponent,
        LoginComponent,
        ProfileComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        ReactiveFormsModule,
        FormsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiInputModule,
        TuiLabelModule,
        TuiInputPasswordModule,
        TuiTextfieldControllerModule,
        TuiButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
