import { Observable } from 'rxjs';
import { IdeFile, FileApi } from 'shared-api/api';
import { Injectable } from '@angular/core';

@Injectable()
export class FileApiImpl implements FileApi {
  getAllConfigFiles(): Observable<IdeFile[]> {
    throw new Error('Method not implemented.');
  }
}
