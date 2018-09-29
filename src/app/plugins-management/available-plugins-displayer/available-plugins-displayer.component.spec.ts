import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePluginsDisplayerComponent } from './available-plugins-displayer.component';

describe('AvailablePluginsDisplayerComponent', () => {
  let component: AvailablePluginsDisplayerComponent;
  let fixture: ComponentFixture<AvailablePluginsDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablePluginsDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablePluginsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
