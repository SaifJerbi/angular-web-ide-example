import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginsContainerComponent } from './plugins-container.component';

describe('PluginsContainerComponent', () => {
  let component: PluginsContainerComponent;
  let fixture: ComponentFixture<PluginsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
