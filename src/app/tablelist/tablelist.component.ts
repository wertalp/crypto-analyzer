import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs/index";
import {IAsset} from "../iasset";
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {AssetService} from "../asset.service";
@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css']
})
export class TablelistComponent implements OnInit {

  private assets: IAsset[] ;
  faSearch = faSearch;
  faBell = faBell;
  faUser = faUser;
  faCoffee = faCoffee ;

  constructor( private assetService: AssetService) {
  }

  ngOnInit() {
    this.assetService.getInitialValue().subscribe( (assets: IAsset[]) => {
      this.assets = assets ;
    });
  }

  public getAssets(): IAsset[] { return this.assets}

  public clicker( asset: IAsset) {
    this.assetService.toggleDetail(asset) ;
  }

}
