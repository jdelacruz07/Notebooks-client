import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Notebook } from '../notebook';

@Component({
  selector: 'app-libreta-media-carta',
  templateUrl: './libreta-media-carta.component.html',
  styleUrls: ['./libreta-media-carta.component.css']
})

export class LibretaMediaCartaComponent implements OnInit {
  material: String = '';
  libretas: Notebook[] = [];
  libretaSelect: Notebook;
  isDescription: boolean = false;

  constructor(private aR: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.aR.params.subscribe((params) => {
      this.material = params['material'];

      if (this.material) {
        this.apiService.getLibretasCarta(this.material).subscribe(x => {
          this.libretas = x.filter(x => x.sizeOfNotebook == "carta" && x.typeOfMaterial == this.material);
        })
      } else {
        this.apiService.getAllLibretasCarta().subscribe(x => {
          this.libretas = x.filter(x => x.sizeOfNotebook == "carta");
        })
      }
    })
  }

  descriptionNotebook(libreta) {
    this.libretaSelect = libreta;
    this.isDescription = true;
  }

  inactiveDescriptionNotebook(inactive) {
    this.isDescription = inactive;
  }

}
