import { Component, OnInit } from '@angular/core';
import {AssetService } from "../asset.service";
import {ICoinAsset} from "../icoin-asset";

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.css']
})
export class StockSelectorComponent implements OnInit {

  infos: any[] ;

  constructor(private assetservice: AssetService)  { }

  ngOnInit() {
    this.assetservice.getAllStocksfromCoinAPI().subscribe(

      (data: ICoinAsset[]) => { this.infos = data}
    );
  }

}
