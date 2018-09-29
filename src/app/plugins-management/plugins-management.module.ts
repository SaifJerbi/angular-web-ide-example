import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailablePluginsDisplayerComponent } from './available-plugins-displayer/available-plugins-displayer.component';
import { PluginsContainerComponent } from './plugins-container/plugins-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AvailablePluginsDisplayerComponent, PluginsContainerComponent],
  exports: [AvailablePluginsDisplayerComponent, PluginsContainerComponent]
})
export class PluginsManagementModule { }
