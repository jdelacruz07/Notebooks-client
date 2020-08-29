import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { BuyNotebookService } from '../buy-notebook.service';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './ngbd-modal-content.component.html',
  styleUrls: ['./ngbd-modal-content.component.css'],
})

export class NgbdModalContentComponent implements OnInit {
  @Input() index;

  constructor(public activeModal: NgbActiveModal, private buyNotebook: BuyNotebookService) { }

  ngOnInit(): void {
  }

  deleteItem(index) {
    this.activeModal.close('Close click');
    this.buyNotebook.deleteNotebook(index);
  }


}
