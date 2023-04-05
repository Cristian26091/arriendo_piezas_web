import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { RegionService } from '../../services/region.service';
import { Region } from '../../models/region.model';


// interface Region {
//   numero: String,
//   nombre_region: string,
//   comunas: {
//       nombre_comuna: string,
//   }[],
// }

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.css']
})
export class FilterResultComponent implements OnInit {
  selectedRegion: string;
  selectedComuna: string;
  selectedRegionComunas: string[];

  constructor(public RegionService: RegionService) { }

  ngOnInit(): void {
    this.getRegions();
  }

  // onRegionSelected(event: MatSelectChange) {
  //   this.selectedRegion = event.value;
  //   const region = this.regions.find(r => r.nombre_region === this.selectedRegion);
  //   this.selectedRegionComunas = region.comunas.map(comuna => comuna.nombre_comuna);
  //   console.log(this.selectedRegion)
  // }
  getRegions(){
    this.RegionService.getRegions()
      .subscribe( res =>{
        this.RegionService.regions = res as Region[];
        console.log(res);
    });
  }
}
