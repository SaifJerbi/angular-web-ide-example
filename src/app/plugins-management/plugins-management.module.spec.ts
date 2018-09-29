import { PluginsManagementModule } from './plugins-management.module';

describe('PluginsManagementModule', () => {
  let pluginsManagementModule: PluginsManagementModule;

  beforeEach(() => {
    pluginsManagementModule = new PluginsManagementModule();
  });

  it('should create an instance', () => {
    expect(pluginsManagementModule).toBeTruthy();
  });
});
