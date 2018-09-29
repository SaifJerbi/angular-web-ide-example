import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { PluginsStore } from '../../store/plugins.store';
import { IdePlugin } from '../../models/ide-plugin.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  plugins$: Observable<IdePlugin[]>;
  constructor(private pluginStore: PluginsStore) {}

  ngOnInit() {
    this.plugins$ = this.pluginStore.select().pipe(filter(Boolean));
  }
}
