import { Injectable } from '@angular/core';
import {IAsset} from "./iasset";
import {BehaviorSubject, Observable, of, Subject} from "rxjs/index";
import {Configuration} from "./configuration";

@Injectable({
  providedIn: 'root'
})
export class AssetService {

   private _listAssets = [] ;
   private detailShow: boolean = false ;
   private _observableList: BehaviorSubject<IAsset[]> = new BehaviorSubject([]);
   private currentStock: IAsset ;
   private currentStock$ :  Subject<IAsset> = new Subject<any>();

  constructor( private myConfig: Configuration) {  }


  getInitialValue() : Observable<IAsset[]>{

    return  of(this.myConfig.getstocksinit());

  }


  init() : Observable<IAsset[]> {

    return this._observableList.asObservable() ;

  }

  toggleDetail(asset: IAsset) : boolean {
    this.detailShow = ! this.detailShow ;
    this.currentStock = asset ;
    this.currentStock$.next(asset);
    return this.detailShow ;
  }

  getCurrentStock() : Observable<IAsset> {
    return this.currentStock$.asObservable() ;
  }


}
