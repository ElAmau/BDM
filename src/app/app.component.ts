import { Component, OnInit } from '@angular/core';
import  { ArticulosService } from './articulos.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit{

  articulos: any;
  title = 'proyecto013';

  constructor(private articulosService: ArticulosService) {}

  ngOnInit() {
    this.articulosService.retornar()
      .subscribe( result =>  this.articulos = result)
  }
}