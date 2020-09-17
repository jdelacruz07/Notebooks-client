import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { BuyNotebookService } from '../buy-notebook.service';
import { Notebook } from '../notebook';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})

export class DescriptionComponent implements OnInit {

  @Input() libretaDescription: Notebook;
  @Output() isActive = new EventEmitter();
  addedNotebook: boolean;
  buttonOff: boolean;
  isActiveDescription: boolean = false;

  constructor(private aR: ActivatedRoute, private buyNotebook: BuyNotebookService) { }

  ngOnInit(): void {
    if (this.libretaDescription.sizeOfNotebook == "carta") {
      this.libretaDescription.sheets = "Tamaño: Media carta (14.0*21.6cms), con 100 hojas blancas";
    } else {
      this.libretaDescription.sheets = "Tamaño: Bolsillo (7.0*10.8cms), con 100 hojas blancas";
    }

  }

  addCar(notebook) {
    this.buyNotebook.addNotebook(notebook);
    this.addedNotebook = true;
    this.buttonOff = true;
  }

  onReturn() {
    this.isActive.emit(this.isActiveDescription);
  }

}