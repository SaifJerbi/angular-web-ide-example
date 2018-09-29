import { TestBed } from '@angular/core/testing';

import { PluginsLoaderService } from './plugins-loader.service';

describe('PluginsLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PluginsLoaderService = TestBed.get(PluginsLoaderService);
    expect(service).toBeTruthy();
  });
});
