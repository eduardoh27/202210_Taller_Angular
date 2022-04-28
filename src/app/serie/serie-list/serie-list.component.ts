import { Component, OnInit } from '@angular/core';
import { serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
})
export class SerieListComponent implements OnInit {
  
  Series: serie[] = [];
  promedio: number=0;
  constructor(private serieService: SerieService) { }
  
  
  getSeries(): void {
    this.serieService.getSeries().subscribe(series => this.funcion(series));
      
  }
  funcion(series: serie[]) {
    this.Series = series;
    this.promedio = this.promedioPuntuacion(series);
  }
  promedioPuntuacion(series: serie[]): number {
    let suma: number = 0;
    for (let serie of series) {
      suma += serie.seasons;
    }
    return suma / series.length;
  }
  ngOnInit() {
    this.getSeries();
  }

}
