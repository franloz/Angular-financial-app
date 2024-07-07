import { Component, Input } from '@angular/core';
import { AssetDataCustom } from '../../../interfaces/asset-data-custom.interface';

@Component({
  selector: 'finance-general-asset-card',
  templateUrl: './general-asset-card.component.html',
  styleUrl: './general-asset-card.component.css'
})
export class GeneralAssetCardComponent {

  @Input() asset?: AssetDataCustom;
}
