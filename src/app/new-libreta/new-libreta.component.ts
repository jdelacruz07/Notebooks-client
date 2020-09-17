import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Notebook } from '../notebook';

@Component({
  selector: 'app-new-libreta',
  templateUrl: './new-libreta.component.html',
  styleUrls: ['./new-libreta.component.css']
})

export class NewLibretaComponent implements OnInit {
  form: FormGroup;
  newNotebook: Notebook = null;
  stockNotebooks: Notebook[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      model: new FormControl(''),
      encuadernacion: new FormControl(''),
      color: new FormControl(''),
      price: new FormControl(''),
      urlPhoto: new FormControl(''),
      typeOfMaterial: new FormControl(''),
      sizeOfNotebook: new FormControl(''),
    });
    this.stockOfNotebooks();
  }

  addNotebook(notebook: Notebook) {
    if (notebook.sizeOfNotebook == "carta") {
      this.api.addLibreta(notebook).subscribe(x => {
        this.form.reset();
        this.stockOfNotebooks();
        this.newNotebook = notebook;
      })
    } else {
      this.api.addLibretaBolsillo(notebook).subscribe(x => {
        this.form.reset();
        this.stockOfNotebooks();
        this.newNotebook = notebook;
      });
    };
  }

  stockOfNotebooks() {
    this.api.getAllNotebooks().subscribe(x => this.stockNotebooks = x
    );
  }

  deleteItem(id) {
    this.api.deleteLibreta(id).subscribe(resp => {
      this.stockOfNotebooks();
    }, error => console.log("Erorr en el delete", error)
    );
  }

}
