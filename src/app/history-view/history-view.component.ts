import { Component, OnInit } from '@angular/core';
import {faBell, faCoffee, faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {AssetService} from "../asset.service";
import {IAsset} from "../iasset";

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.css']
})
export class HistoryViewComponent implements OnInit {



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
