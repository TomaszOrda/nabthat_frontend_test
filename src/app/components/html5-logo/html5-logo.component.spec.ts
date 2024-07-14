import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5LogoComponent } from './html5-logo.component';

describe('Html5LogoComponent', () => {
  let component: Html5LogoComponent;
  let fixture: ComponentFixture<Html5LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Html5LogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Html5LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
