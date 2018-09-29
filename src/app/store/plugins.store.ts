import { Observer, Observable, BehaviorSubject } from 'rxjs';
import { IdePlugin } from '../models/ide-plugin.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PluginsStore implements Observer<IdePlugin[]> {
  private _shareWithBehavior = new BehaviorSubject<IdePlugin[]>(undefined);
  private plugins: IdePlugin[] = new Array<IdePlugin>();

  select(): Observable<IdePlugin[]> {
    return this._shareWithBehavior.asObservable();
  }

  next(value: IdePlugin[] | IdePlugin): void {
    if (!Array.isArray(value)) {
      this.plugins.push(value);
    } else {
      this.plugins = [...value];
    }
    this._shareWithBehavior.next(this.plugins);
  }

  error(err: any) {}
  complete() {
    // Noop
  }
}
