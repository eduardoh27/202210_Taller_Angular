import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  seasonsAvg: number = 6;
  constructor(private serieService: SerieService) { }

  getSeries () {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    })
  }

  ngOnInit() {
    this.getSeries();
  }

}
