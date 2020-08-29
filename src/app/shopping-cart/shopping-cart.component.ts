import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BuyNotebookService } from '../buy-notebook.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Notebook } from '../notebook';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from '../ngbd-modal-content/ngbd-modal-content.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  animations: [
    trigger('shoppingAnimation', [
      state('active', style({
        opacity: '1',
        color: '#2455a7'
      })),

      transition('void => *', [
        style({ transform: 'translateX(-30px)', opacity: '0' }),
        animate('700ms ease-in-out')
      ]),
      transition('* => void', [
        animate('400ms ease-in-out', style({ transform: 'translateX(-30px)', opacity: '0', color: 'red' }))
      ]),
    ])
  ],
  changeDetection: ChangeDetectionStrategy.Default,
})

export class ShoppingCartComponent implements OnInit {
  buyOfNotebooks: Notebook[] = [];
  animationState = 'active';
  numberOfNotebooks: number;
  total: Number;

  constructor(private buyNotebook: BuyNotebookService, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.getBuy();
  }

  ngDoCheck() {
    this.total = this.buyNotebook.getTotalPrice();
  }

  openModal(index) {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    modalRef.componentInstance.index = index;
  }

  getBuy() {
    this.buyOfNotebooks = this.buyNotebook.getBuy();
  }


}

