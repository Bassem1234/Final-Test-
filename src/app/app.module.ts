import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { LivreListComponent } from './livre-list/livre-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { AbonListComponent } from './abon-list/abon-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LivreStatComponent } from './livre-stat/livre-stat.component';
import { InterceptorService } from './interceptor.service';
import { GuardGuard } from './guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryListComponent,
    LivreListComponent,
    UserListComponent,
    AbonListComponent,
    RegisterComponent,
    LoginComponent,
    LivreStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}, GuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
