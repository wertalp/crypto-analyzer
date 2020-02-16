import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { DetailviewComponent } from './detailview/detailview.component';
import {AssetService} from "./asset.service";
import { HistoryViewComponent } from './history-view/history-view.component';
import { StockSelectorComponent } from './stock-selector/stock-selector.component';
import { NgxPopper } from 'angular-popper';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { HistoryboardComponent } from './historyboard/historyboard.component';
import { ExportComponent } from './export/export.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TablelistComponent,
    DetailviewComponent,
    HistoryViewComponent,
    StockSelectorComponent,
    HistoryboardComponent,
    ExportComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgxPopper,
    HttpClientModule
  ],
  providers: [AssetService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
