import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_stock extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['Today G/L'] = "2900";
    item['Symbol'] = "TSLA";
    item['% Change'] = "2.34";
    item['Value'] = "260000";
    item['Last'] = "1300";
    item['Quantity'] = "200";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['Today G/L'] = "-300";
    item['Value'] = "40000";
    item['% Change'] = "-1.34";
    item['Last'] = "400";
    item['Quantity'] = "100";
    item['Symbol'] = "AAPL";
    item.key = key++;
  }

}
