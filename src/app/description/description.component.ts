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

  libreta: Notebook;
  libretaFilter: any[];
  index: number;
  addedNotebook: boolean;
  newNotebook: Notebook;
  type: any;
  buttonOff: boolean;
  libretas: Notebook[] = [];
  notebooksNumber;
  @Input() libretaDescription: Notebook;
  @Output() isActive = new EventEmitter();
  isActiveDescription: boolean = false;


  constructor(private aR: ActivatedRoute, private api: ApiService, private buyNotebook: BuyNotebookService) { }

  ngOnInit(): void {
    if (this.libretaDescription.sizeOfNotebook == "carta") {
      this.libretaDescription.sheets = "Tamaño: Media carta (14.0*21.6cms), con 100 hojas blancas";
    } else {
      this.libretaDescription.sheets = "Tamaño: Bolsillo (7.0*10.8cms), con 100 hojas blancas";
    }
    /*
    this.aR.params.subscribe((params) => {
      this.index = params['index'];
      this.type = params['type'];
      
      
    });
    this.libreta = this.libretaDescription;
    
    if (this.type == "bolsillo") {
      this.api.getLibretaBolsillo(this.index).subscribe(x => {
        this.libretas = x.filter(x => x.sizeOfNotebook == "Bolsillo");
        //this.libreta = this.libretas[this.index];
        this.libreta = this.libretaDescription;
      });
    } else if(this.type == "bolsilloTela") {
      let typeOfMaterial = this.type;
      this.api.getLibretasBolsillo(typeOfMaterial.substr(8)).subscribe(x => {
          this.libretas = x.filter(x => x.typeOfMaterial == "Tela" && x.sizeOfNotebook == "Bolsillo")
          //  this.libreta = this.libretas[this.index];
          this.libreta = this.libretaDescription;
          
        })
    } else if (this.type =="bolsilloPapel") {
      let typeOfMaterial = this.type;
      this.api.getLibretasBolsillo(typeOfMaterial.substr(8)).subscribe(x => {
        this.libretas = x;
        //this.libreta =  this.libretas[this.index]
        this.libreta = this.libretaDescription;
        
        })
      } else if (this.type == "artesanal") {
        this.api.getLibretaCarta(this.index).subscribe(x => { 
          this.libretas = x.filter(x => x.sizeOfNotebook == "Carta");
          //this.libreta = this.libretas[this.index]
          this.libreta = this.libretaDescription;
          
        })
      } else if (this.type == "artesanalTela") {
        let typeOfMaterial = this.type;
        this.api.getLibretasCarta(typeOfMaterial.substr(9)).subscribe(x => {
          this.libretas = x.filter(x => x.sizeOfNotebook == "Carta" && x.typeOfMaterial == "Tela" );
          //          this.libreta =  this.libretas[this.index]
          this.libreta = this.libretaDescription;
          
        });
      } else {
        let typeOfMaterial = this.type;
        this.api.getLibretasCarta(typeOfMaterial.substr(9)).subscribe(x => { 
          this.libretas =  x.filter(x => x.sizeOfNotebook == "Carta" && x.typeOfMaterial == "Papel" );
          //        this.libreta =  this.libretas[this.index];
          this.libreta = this.libretaDescription;
          
        });
      }
      */
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