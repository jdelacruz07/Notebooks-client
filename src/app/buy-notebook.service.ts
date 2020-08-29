import { Injectable } from '@angular/core';
import { Notebook } from './notebook';

@Injectable({
  providedIn: 'root'
})
export class BuyNotebookService {

  buyOfNotebooks: Notebook[] = [];
  newNotebook: Notebook;
  total;

  constructor() { }


  deleteNotebook(index) {
    this.buyOfNotebooks.splice(index, 1);
  }

  addNotebook(libreta) {
    this.buyOfNotebooks.push(libreta);
  }

  getBuy() {
    return this.buyOfNotebooks;
  }

  getTotalPrice() {
    return this.buyOfNotebooks.reduce((prev: number, item: Notebook) => prev + item.price, 0);
  }


}
