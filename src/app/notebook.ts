export class Notebook {
  id: string;
  model: string;
  encuadernacion: string;
  color: string;
  sheets: string;
  typeOfMaterial: string;
  sizeOfNotebook: string;
  price: number;
  urlPhoto: string;

  constructor(id: string, model: string, encuadernacion: string, color: string, sheets: string,
    typeOfMaterial: string, sizeOfNotebook: string, price: number, urlPhoto: string) {
    this.id = id;
    this.model = model;
    this.encuadernacion = encuadernacion;
    this.color = color;
    this.sheets = sheets;
    this.typeOfMaterial = typeOfMaterial;
    this.sizeOfNotebook = sizeOfNotebook;
    this.price = price;
    this.urlPhoto = urlPhoto;
  }
}
