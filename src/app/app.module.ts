import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { DetailviewComponent } from './detailview/detailview.component';
import {AssetService} from "./asset.service";
import { HistoryViewComponent } from './history-view/history-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TablelistComponent,
    DetailviewComponent,
    HistoryViewComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
