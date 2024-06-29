import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAssetCardComponent } from './general-asset-card.component';

describe('GeneralAssetCardComponent', () => {
  let component: GeneralAssetCardComponent;
  let fixture: ComponentFixture<GeneralAssetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralAssetCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralAssetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
