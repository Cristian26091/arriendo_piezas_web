import { Component, OnInit } from '@angular/core';

interface Region {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.css']
})
export class FilterResultComponent implements OnInit {

  regions: Region[] = [
    {value: 'R1', viewValue: 'Arica y parinacota'},
    {value: 'R2', viewValue: 'Tarapaca'},
    {value: 'R3', viewValue: 'Antofagaste'},
    {value: 'R4', viewValue: 'Atacama'},
    {value: 'R5', viewValue: 'Coquimbo'},
    {value: 'R6', viewValue: 'Valparaiso'},
    {value: 'R7', viewValue: 'Región Metropolitana'},
    {value: 'R8', viewValue: 'Libertador Bernardo O higgins'},
    {value: 'R9', viewValue: 'Maule'},
    {value: 'R10', viewValue: 'Ñuble'},
    {value: 'R11', viewValue: 'Biobío'},
    {value: 'R12', viewValue: 'Araucanía'},
    {value: 'R13', viewValue: 'Ríos'},
    {value: 'R14', viewValue: 'Lagos'},
    {value: 'R15', viewValue: 'Aysén'},
    {value: 'R15', viewValue: 'Magallanes'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
