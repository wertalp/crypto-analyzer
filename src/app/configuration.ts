import {IAsset} from "./iasset";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class Configuration {

  private initStocks : IAsset[] = [] ;
  private testAsset1: IAsset ;
  private testAsset2: IAsset ;
  private testAsset3: IAsset ;
  private testAsset4: IAsset ;
  private testAsset5: IAsset ;
  private testAsset6: IAsset ;
  private bevSubjofAsssets: BehaviorSubject<IAsset[]> = new BehaviorSubject([]);


  constructor(){}

  public getstocksinit() : IAsset[] {
    this.testAsset1 =   { id: 1, country: "USA", currTimestamp: "Date.now()" , delta: 0.5 ,
                          position: 1 , weight: 79, description: "Tesla Inc", name: "TESLA", change:10, price: 780, status:"buy"},
    this.testAsset2 =   { id: 2, country: "USA", currTimestamp: "Date.now()" , delta: 0.5 ,
                          position: 2 , weight: 81, description: "Bitcoin Inc", name: "Bitcoin", change:7, price: 9500, status:"buy"};
    this.testAsset3 =   { id: 3, country: "USA", currTimestamp: "Date.now()" , delta: 0.5 ,
      position: 2 , weight: 81, description: "IBM Inc", name: "IBM", change:7, price: 9500, status:"buy"};
    this.testAsset4 =   { id: 4, country: "USA", currTimestamp: "Date.now()" , delta: 0.5 ,
      position: 2 , weight: 81, description: "MS Inc", name: "MICROSOFT", change:7, price: 9500, status:"buy"};
    this.testAsset5 =   { id: 5, country: "USA", currTimestamp: "Date.now()" , delta: 0.5 ,
      position: 2 , weight: 81, description: "Nestle Inc", name: "NESTLE", change:7, price: 9500, status:"buy"};
    this.testAsset6 =   { id: 6, country: "USA", currTimestamp: "Date.now()" , delta: 0.5 ,
      position: 2 , weight: 81, description: "Baeyer Inc", name: "BASF", change:7, price: 9500, status:"buy"};

    this.initStocks.push( this.testAsset1);
    this.initStocks.push( this.testAsset2);
    this.initStocks.push( this.testAsset3);
    this.initStocks.push( this.testAsset4);
    this.initStocks.push( this.testAsset5);

    return this.initStocks ;
}

}
