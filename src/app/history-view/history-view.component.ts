import { Component, OnInit } from '@angular/core';
import {faBell, faCoffee, faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {AssetService} from "../asset.service";
import {IAsset} from "../iasset";

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {Configuration} from "../configuration";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.css']
})
export class HistoryViewComponent implements OnInit {
  pdfLayout: {} ;
  private assets: IAsset[] ;
  faSearch = faSearch;
  faBell = faBell;
  faUser = faUser;
  faCoffee = faCoffee ;

  constructor( private assetService: AssetService, private config: Configuration) {
  }

  ngOnInit() {
    this.assetService.getAboInfo().subscribe( (assets: IAsset[]) => {
      this.assets = assets ;
    });
  }

  public getAssets(): IAsset[] { return this.assets}

  public clicker( asset: IAsset) {
    this.assetService.toggleDetail(asset) ;
  }

  abmelden(asset: IAsset) {
   this.assetService.abmelden(asset);
  }

  generatePdf(IAsset){
      this.pdfLayout = this.config.PDF_LAYOUT ;
      const documentDefinition = this.pdfLayout ;
      pdfMake.createPdf(this.pdfLayout).open();

  }

  revealpage() {

  }

}
