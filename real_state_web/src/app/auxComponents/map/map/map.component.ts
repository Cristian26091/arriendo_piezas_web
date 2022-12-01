import { Component, AfterViewInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import * as Mapboxgl from 'mapbox-gl';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  mapa: Mapboxgl.Map;
  lat: number;
  long: number;

  ngAfterViewInit(): void {

    this.lat= -70.68835528874496;
    this.long=-34.17309713752227; 

    Mapboxgl.accessToken = environment.mapBoxToken;


    this.mapa = new Mapboxgl.Map({
      container: 'mapa_mapbox', // container ID
      style: 'mapbox://styles/mapbox/streets-v10', // style URL
      center: [this.lat, this.long], // starting position [Long, Lat]
      zoom: 16 // starting zoom
    });
     
    // Add zoom and rotation controls to the map.
    this.mapa.addControl(new Mapboxgl.NavigationControl());
    this.crearMarcador(this.lat, this.long);
  }

  crearMarcador(lng: Number, lat: number){
    const marker = new Mapboxgl.Marker({
      draggable: false
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
  }
}
