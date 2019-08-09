import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconGenComponent } from './icon-gen/icon-gen.component';
import { IosAppIconComponent } from './icon-gen/ios-app-icon/ios-app-icon.component';
import { AndoridAppIconComponent } from './icon-gen/andorid-app-icon/andorid-app-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    IconGenComponent,
    IosAppIconComponent,
    AndoridAppIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
