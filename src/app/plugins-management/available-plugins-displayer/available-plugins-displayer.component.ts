import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IdePlugin } from '../../models/ide-plugin.model';

@Component({
  selector: 'app-available-plugins-displayer',
  templateUrl: './available-plugins-displayer.component.html',
  styleUrls: ['./available-plugins-displayer.component.css']
})
export class AvailablePluginsDisplayerComponent {
  @Input()
  plugins: IdePlugin[];

  @Output()
  loadPlugin: EventEmitter<any> = new EventEmitter();

  doLoadPlugin(plugin: IdePlugin) {
    this.loadPlugin.emit(plugin);
  }
}
