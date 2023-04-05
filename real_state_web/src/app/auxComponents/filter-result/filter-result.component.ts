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

  getRegions(){
    this.RegionService.getRegions()
      .subscribe( res =>{
        this.RegionService.regions = res as Region[];
        console.log(res);
    });
  }

  onRegionSelected(event: MatSelectChange){
    const region = this.RegionService.regions.find(r => r.nombre_region === event.value);
    this.selectedRegionComunas = region.comunas.map(c => c.nombre_comuna);
  }
}
