import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAssetCardComponent } from './portfolio-asset-card.component';

describe('PortfolioAssetCardComponent', () => {
  let component: PortfolioAssetCardComponent;
  let fixture: ComponentFixture<PortfolioAssetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioAssetCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioAssetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
