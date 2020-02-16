import {Injectable, OnInit} from '@angular/core';
import {IAsset} from "./iasset";
import {BehaviorSubject, Observable, of, Subject} from "rxjs/index";
import {Configuration} from "./configuration";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Headers} from "@angular/http";
import {filter, take} from "rxjs/internal/operators";
import {ICoinAsset} from "./icoin-asset";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Asset} from "./asset";

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private  initalTestAsset  : Asset ;
   private _listAssets = [] ;
   private detailShow: boolean = false ;
   private _observableList: BehaviorSubject<IAsset[]> = new BehaviorSubject([]);
   private currentStock: IAsset ;
   private currentStock$ :  BehaviorSubject<IAsset> = new BehaviorSubject<IAsset>(this.initalTestAsset) ;
   private stocks$ : Observable<any> ;
   private abonementedStocks : IAsset[] =[];
   private abonementeStocks$ : Subject<IAsset[]> = new BehaviorSubject([]);



  constructor( private myConfig: Configuration, private httpClient: HttpClient) {

    this.initalTestAsset = new Asset();
      this.initalTestAsset.id = 1;
      this.initalTestAsset.name ="IBM";
      this.initalTestAsset.price= 1000 ;
      this.initalTestAsset.country = "Belgique";
      this.initalTestAsset.delta = 0.5 ;
      this.initalTestAsset.description = "Huawei Inc Ltd"

      this.stocks$ = this.httpClient.get<ICoinAsset[]>(this.myConfig.getCoinMarketAPIUrl(), this.getHeader()).pipe(take(5)) ;

  }


  getInitialValue() : Observable<IAsset[]>{
    return  of(this.myConfig.getstocksinit());
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

  getHeader(): any{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        "X-CoinAPI-Key": this.myConfig.getAPIKey(),
        'Authorization': 'my-xxx-token'
      })
    };
    return httpOptions ;
  }


  getAllStocksfromCoinAPI(): Observable<ICoinAsset[]> {
    return this.stocks$ ;
  }

  abonnieren(asset: IAsset) : Observable<IAsset[]>{
    this.abonementedStocks.push(asset) ;
    this.abonementeStocks$.next(this.abonementedStocks) ;
    return this.abonementeStocks$.asObservable() ;

  }
  getAboInfo() : Observable<IAsset[]> {
    this.abonementeStocks$.next(this.abonementedStocks) ;
    return this.abonementeStocks$.asObservable() ;
  }

  abmelden(asset: IAsset){
    this.abonementedStocks = this.abonementedStocks.filter((item: IAsset ) => item.name != asset.name);
    this.abonementeStocks$.next(this.abonementedStocks);
  }

  getInitialAset(): IAsset {
    return this.initalTestAsset ;

  }


}
