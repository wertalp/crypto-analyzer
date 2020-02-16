import { Component, OnInit } from '@angular/core';
import {AssetService} from "../asset.service";
import {IAsset} from "../iasset";
import {ICoinAsset} from "../icoin-asset";

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {

  hided: boolean  = true   ;
  edited: boolean = true ;
  currentStock: IAsset   ;

  constructor(private assetService: AssetService) {
    this.hided = true ;
    this.currentStock =this.assetService.getInitialAset();
  }

  ngOnInit() {
    this.hided = this.assetService.toggleDetail(this.currentStock) ;
    this.assetService.getCurrentStock().subscribe(
      (data: IAsset) => { this.currentStock = data}
    )
  }

  abonnieren( asset: IAsset){
    this.hided = false ;
    console.log(asset.name) ;
    this.assetService.abonnieren(asset) ;
    setTimeout(() => {
      this.hided = true;
    }, 2000);
  }

}
