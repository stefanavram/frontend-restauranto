var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AppComponent } from './app.component';
import { PizzaModule } from './pizza/pizza.module';
import { HomeModule } from './home/home.module';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { ReservationModule } from './reservation/reservation.module';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
            ],
            imports: [
                RouterModule.forRoot(ROUTES),
                TranslateModule.forRoot({
                    provide: TranslateLoader,
                    useFactory: function (http) { return new TranslateStaticLoader(http, '/assets/i18n', '.json'); },
                    deps: [Http]
                }),
                BrowserModule,
                FormsModule,
                HttpModule,
                PizzaModule,
                HomeModule,
                ReservationModule,
            ],
            providers: [AUTH_PROVIDERS],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/stefan/WebstormProjects/angular2/frontend/src/app/app.module.js.map