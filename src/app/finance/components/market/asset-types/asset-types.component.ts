import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'finance-asset-types',
  templateUrl: './asset-types.component.html',
  styleUrl: './asset-types.component.css'
})
export class AssetTypesComponent {

  public assetTypes: ['Nasdaq','DowJones','Crypto'] = ['Nasdaq','DowJones','Crypto'];
  @Input() currentAssetType: string ='';

  constructor(
    private router: Router,
  ) {}

  public changeAssetTypes = (assetType: string): void => {
    if (assetType === 'stocks') {
      this.router.navigate(['/'])
    } else {
      this.router.navigate([`/${assetType}`])
    }
  }

}
