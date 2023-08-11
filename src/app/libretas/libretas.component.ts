import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libretas',
  templateUrl: './libretas.component.html',
  styleUrls: ['./libretas.component.css']
})

export class LibretasComponent implements OnInit {

  imageArtesanal = [4343, 4302, 4360].map((f) => `https://notebooks-images.s3.eu-central-1.amazonaws.com/IMG_${f}.JPG`);
  imageBolsillo = [4319, 4326, 4327].map((f) => `https://notebooks-images.s3.eu-central-1.amazonaws.com/IMG_${f}.JPG`);

  constructor() { }

  ngOnInit(): void {

  }
} 
