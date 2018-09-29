import { Component } from '@angular/core';
import { IdePlugin } from '../models/ide-plugin.model';
import { PluginsStore } from '../store/plugins.store';

@Component({ selector: 'app-main', templateUrl: './main.component.html' })
export class MainComponent {
  allPlugins: IdePlugin[] = [
    {
      name: 'Explorer',
      version: '1.0.0',
      entryPoint: 'plugin-explorer',
      icon: 'fa-folder-open',
      path: '/REMOTE_LOCATION_TO_LOAD_MODULE'
    },
    {
      name: 'Versioning',
      version: '1.0.0',
      entryPoint: 'plugin-git',
      icon: 'fa-git-square',
      path: '/REMOTE_LOCATION_TO_LOAD_MODULE'
    }
  ];

  constructor(private pluginStore: PluginsStore) {}

  doLoadPlugin(plugin: IdePlugin) {
    this.pluginStore.next(plugin);
  }
}
