import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Notebook } from '../notebook';

@Component({
  selector: 'app-libreta-bolsillo',
  templateUrl: './libreta-bolsillo.component.html',
  styleUrls: ['./libreta-bolsillo.component.css']
})

export class LibretaBolsilloComponent implements OnInit {
  material: string = '';
  libretasFilter: Notebook[] = [];
  libretas: Notebook[] = [];
  selectedNotebook: Notebook;
  isActiveDescription: Boolean = false;

  constructor(private aR: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.aR.params.subscribe((params) => {
      this.material = params['material'];
      if (this.material) {
        this.apiService.getLibretasBolsillo(this.material).subscribe(x => {
          this.libretas = x.filter(x => x.sizeOfNotebook == "bolsillo" && x.typeOfMaterial == this.material);
        })
      } else {
        this.apiService.getAllLibretasBolsillo().subscribe(x => {
          this.libretas = x.filter(x => x.sizeOfNotebook == "bolsillo");
        })
      }
    })

  }

  selectedItem(libreta) {
    this.selectedNotebook = libreta;
    this.isActiveDescription = true;
  }

  inactiveDescription(inactive) {
    this.isActiveDescription = inactive;
  }
}
