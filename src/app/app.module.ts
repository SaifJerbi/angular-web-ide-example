import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { BodyComponent } from './layouts/body/body.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { AvailablePluginsDisplayerComponent } from './plugins-management/available-plugins-displayer/available-plugins-displayer.component';
import { PluginsContainerComponent } from './plugins-management/plugins-container/plugins-container.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PluginsStore } from './store/plugins.store';
import { MainComponent } from './main/main.component';
import { FileApi } from 'shared-api/api';
import { FileApiImpl } from './shared-api-impl/file-api.impl';

const roots: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    BodyComponent,
    SideBarComponent,
    AvailablePluginsDisplayerComponent,
    PluginsContainerComponent,
    FooterComponent
  ],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(roots)],
  providers: [PluginsStore, { provide: FileApi, useClass: FileApiImpl }],
  bootstrap: [AppComponent],
  exports: [AvailablePluginsDisplayerComponent, PluginsContainerComponent]
})
export class AppModule {}
