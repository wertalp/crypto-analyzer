import { Component, OnInit } from '@angular/core';
import {AssetService} from "../asset.service";
import {IAsset} from "../iasset";

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {

  edited: boolean = true ;
  currentStock: IAsset ;

  constructor(private assetService: AssetService) { }

  ngOnInit() {
    this.edited = this.assetService.toggleDetail(this.currentStock) ;
    this.assetService.getCurrentStock().subscribe(
      data => { this.currentStock = data}
    )
  }

}
