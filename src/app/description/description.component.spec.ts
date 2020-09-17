import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';
import { Notebook } from '../notebook';
import { DescriptionComponent } from './description.component';

describe('DescriptionComponent', () => {
  let component: DescriptionComponent;
  let fixture: ComponentFixture<DescriptionComponent>;
  let libretaDescription: Notebook;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpClientModule,
      ],
      declarations: [DescriptionComponent,
      ],
      schemas: [
      ],
      providers: [
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(DescriptionComponent);
    component = fixture.componentInstance;
    component.libretaDescription = { id: "1", model: "Nuno", encuadernacion: "tradicional", color: "", sheets: "100", typeOfMaterial: "tela", sizeOfNotebook: "bolsillo", price: 120.00, urlPhoto: "/assets/IMG_4326.JPG" }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
