import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProvidersModule } from "./providers.module";
import { CarComponent } from "./car/car.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroesTspComponent } from "./heroes/heroes-tsp.component";
import { HeroListComponent } from "./heroes/hero-list.component";
import { InjectorComponent } from "./injector.component";
import { TestComponent } from "./test.component";
import { Logger } from "./logger.service";
import { UserService } from "./user.service";
import { APP_CONFIG, HERO_DI_CONFIG } from "./app.config";

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    HeroesComponent,
    HeroesTspComponent,
    HeroListComponent,
    InjectorComponent,
    TestComponent
  ],
  imports: [BrowserModule, ProvidersModule],
  providers: [
    Logger,
    UserService,
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
  ],
  exports: [CarComponent, HeroesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
