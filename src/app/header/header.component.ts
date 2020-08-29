import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BuyNotebookService } from '../buy-notebook.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class HeaderComponent implements OnInit {
  totalOfNotebooks: number;

  constructor(private buyNotebook: BuyNotebookService) {

  }

  ngOnInit(): void {

  }

  ngDoCheck() {
    this.numberOfNoteboks();
  }

  numberOfNoteboks() {
    this.totalOfNotebooks = this.buyNotebook.getBuy().length;
  }

}
