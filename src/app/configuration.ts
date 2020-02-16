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
  private curDate = '2017-11-27T09:10:00';
  private time : any ;

  private yahooUrl: string = "" ;
  private yahooAPIKey: string = "" ;

  private coinUrl: string    =  "https://rest.coinapi.io/v1/assets/";
  private coinAPIKey: string =  "B14AC8FB-C406-4813-9A37-31A466BF1238" ;

  constructor(){

    this.time = new Date(Date.now());
  }

  public getstocksinit() : IAsset[] {
    this.testAsset1 =   { id: 1, country: "USA", currTimestamp: this.time , delta: 0.5 ,
                          position: 1 , weight: 79, description: "Tesla Inc", name: "TESLA", change:10, price: 780, status:"buy"},
    this.testAsset2 =   { id: 2, country: "USA", currTimestamp: this.time  , delta: 0.5 ,
                          position: 2 , weight: 132, description: "Bitcoin Inc", name: "Bitcoin", change:7, price: 9500, status:"strong buy"};
    this.testAsset3 =   { id: 3, country: "USA", currTimestamp: this.time  , delta: 0.5 ,
                          position: 2 , weight: 33, description: "IBM Inc", name: "IBM", change:7, price: 249, status:"hold"};
    this.testAsset4 =   { id: 4, country: "USA", currTimestamp: this.time  , delta: 0.5 ,
                          position: 2 , weight: 81, description: "MS Inc", name: "MICROSOFT", change:7, price: 566, status:"buy"};
    this.testAsset5 =   { id: 5, country: "USA", currTimestamp: this.time  , delta: 0.5 ,
                          position: 2 , weight: 12, description: "Nestle Inc", name: "NESTLE", change:7, price: 43, status:"sell"};
    this.testAsset6 =   { id: 6, country: "USA", currTimestamp: this.time  , delta: 0.5 ,
                           position: 2 , weight: 67, description: "Baeyer Inc", name: "BASF", change:7, price: 342, status:"buy"};

    this.initStocks.push( this.testAsset1);
    this.initStocks.push( this.testAsset2);
    this.initStocks.push( this.testAsset3);
    this.initStocks.push( this.testAsset4);
    this.initStocks.push( this.testAsset5);

    return this.initStocks ;
}

getCoinMarketAPIUrl() : string{
    return this.coinUrl ;
}

getAPIKey(): string{
    return this.coinAPIKey ;
}

public PDF_LAYOUT = {
    content: [
      {
        text: 'Crypto Anayltics Financial Tools TM of Bern in 2020',
        style: 'header'
      },
      'This product is developed and maintained by  wertal.application.ai. ' +
      'Build useful fast and sustainable software for automate your business processes with  big effect on business ' +
      'Target Customer Single Professional Experts  \n\n',
      {
        text: 'Assets on Crypto market',
        style: 'subheader'
      },
      'Diverse Featurs für Finanztools',
      'tool for finance strategie analysing',
      'analyze Chart',
      'analyze buy/sell volumen per customized timep eriod',
      'analyze  big shareHolder moves',
      'analyze and  compare several stocks  and build algorythm for actioning  ',
      'monitoring and  alarming over different Channels',
      {
        text: 'Stocks on all markets (Stoks)',
        style: 'subheader'
      },

        'tool for finance strategie analysing',
        'analyze Chart',
        'analyze buy/sell volumen per customized timep eriod',
        'analyze  big shareHolder moves',
        'analyze and  compare several stocks  and build algorythm for actioning  ',
        'monitoring and  alarming over different Channels',

      {
        // to treat a paragraph as a bulleted list, set an array of items under the ul key
        ul: [
          'analyze',
          'simplyfiy',
          'sustainable',
          'purposeful',
          'freeofdraft'
        ]
      },
      {
        text: 'It is possible to buy or suggest some exxtra features, by contacting info patrick.wertal@gmail.com. This is a trademark of suisse (haha small country full of secretservice) .' +
        'It is planned to serve different channels, too Thanks to Hyperion also known as Harry K' +
        ' Greetings by patrick wertal 2020 ',
        style: ['quote', 'small']
      }

    ],
    styles: {
      header: {
        fontSize: 20,
        margin: [0, 80, 0, 80],
        bold: true
      },
      subheader: {
        fontSize: 15,
        bold: true
      },
      quote: {
        italics: true
      },
      small: {
        fontSize: 8
      }
    }

  }

}
