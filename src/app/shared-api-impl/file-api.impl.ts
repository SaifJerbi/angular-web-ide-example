import { Observable } from 'rxjs';
import { FileApi, IdeFile } from 'shared-api/api';
import { Injectable } from '@angular/core';

@Injectable()
export class FileApiImpl implements FileApi {
  getAllConfigFiles(): Observable<IdeFile[]> {
    throw new Error('Method not implemented.');
  }
}
