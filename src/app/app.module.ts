import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule, CarouselModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RootRouteMappingConfiguration } from 'app/app.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsModule } from 'app/products/products.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    CollapseModule.forRoot(),
    RouterModule.forRoot(RootRouteMappingConfiguration),
    CarouselModule.forRoot(),
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
