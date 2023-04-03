import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';


interface Region {
  numero: String,
  nombre_region: string,
  comunas: {
      nombre_comuna: string,
  }[],
}

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.css']
})
export class FilterResultComponent implements OnInit {
  selectedRegion: string;
  selectedComuna: string;
  selectedRegionComunas: string[];

  regions: Region[] = [
    {
      numero: "1",
      nombre_region: "Tarapacá",
      comunas: [
        { nombre_comuna: "Iquique" },
        { nombre_comuna: "Alto Hospicio" },
        { nombre_comuna: "Pozo Almonte" },
        { nombre_comuna: "Camiña" },
        { nombre_comuna: "Colchane" },
        { nombre_comuna: "Huara" },
        { nombre_comuna: "Pica" }
      ]
    },
    {
      numero: "2",
      nombre_region: "Antofagasta",
      comunas: [
        { nombre_comuna: "Antofagasta" },
        { nombre_comuna: "Mejillones" },
        { nombre_comuna: "Sierra Gorda" },
        { nombre_comuna: "Taltal" },
        { nombre_comuna: "Calama" },
        { nombre_comuna: "Ollagüe" },
        { nombre_comuna: "San Pedro de Atacama" },
        { nombre_comuna: "Tocopilla" },
        { nombre_comuna: "María Elena" }
      ]
    },
    {
      numero: "3",
      nombre_region: "Atacama",
      comunas: [
        { nombre_comuna: "Copiapó" },
        { nombre_comuna: "Caldera" },
        { nombre_comuna: "Tierra Amarilla" },
        { nombre_comuna: "Chañaral" },
        { nombre_comuna: "Diego de Almagro" },
        { nombre_comuna: "Vallenar" },
        { nombre_comuna: "Alto del Carmen" },
        { nombre_comuna: "Freirina" },
        { nombre_comuna: "Huasco" }
      ]
    },
    {
      numero: "4",
      nombre_region: "Coquimbo",
      comunas: [
        { nombre_comuna: "La Serena" },
        { nombre_comuna: "Coquimbo" },
        { nombre_comuna: "Andacollo" },
        { nombre_comuna: "La Higuera" },
        { nombre_comuna: "Paiguano" },
        { nombre_comuna: "Vicuña" },
        { nombre_comuna: "Illapel" },
        { nombre_comuna: "Canela" },
        { nombre_comuna: "Los Vilos" },
        { nombre_comuna: "Salamanca" },
        { nombre_comuna: "Ovalle" },
        { nombre_comuna: "Combarbalá" },
        { nombre_comuna: "Monte Patria" },
        { nombre_comuna: "Punitaqui" },
        { nombre_comuna: "Río Hurtado" }
      ]
    },
    {
      numero: "5",
      nombre_region: "Valparaíso",
      comunas: [
        { nombre_comuna: "Valparaíso" },
        { nombre_comuna: "Viña del Mar" },
        { nombre_comuna: "Concón" },
        { nombre_comuna: "Quilpué" },
        { nombre_comuna: "Villa Alemana" },
        { nombre_comuna: "Limache" },
        { nombre_comuna: "Olmué" },
        { nombre_comuna: "La Ligua" },
        { nombre_comuna: "Cabildo" },
        { nombre_comuna: "Papudo" },
        { nombre_comuna: "Petorca" },
        { nombre_comuna: "Zapallar" },
        { nombre_comuna: "Quillota" },
        { nombre_comuna: "La Calera" },
        { nombre_comuna: "Hijuelas" },
        { nombre_comuna: "Nogales" },
        { nombre_comuna: "La Cruz" },
        { nombre_comuna: "San Antonio" },
        { nombre_comuna: "Cartagena" },
        { nombre_comuna: "El Tabo" },
        { nombre_comuna: "El Quisco" },
        { nombre_comuna: "Algarrobo" },
        { nombre_comuna: "Santo Domingo" }
      ]
    },
    {
      numero: "RM",
      nombre_region: "Metropolitana de Santiago",
      comunas: [
        { nombre_comuna: "Santiago" },
        { nombre_comuna: "Cerrillos" },
        { nombre_comuna: "Cerro Navia" },
        { nombre_comuna: "Conchalí" },
        { nombre_comuna: "El Bosque" },
        { nombre_comuna: "Estación Central" },
        { nombre_comuna: "Huechuraba" },
        { nombre_comuna: "Independencia" },
        { nombre_comuna: "La Cisterna" },
        { nombre_comuna: "La Florida" },
        { nombre_comuna: "La Granja" },
        { nombre_comuna: "La Pintana" },
        { nombre_comuna: "La Reina" },
        { nombre_comuna: "Las Condes" },
        { nombre_comuna: "Lo Barnechea" },
        { nombre_comuna: "Lo Espejo" },
        { nombre_comuna: "Lo Prado" },
        { nombre_comuna: "Macul" },
        { nombre_comuna: "Maipú" },
        { nombre_comuna: "Ñuñoa" },
        { nombre_comuna: "Pedro Aguirre Cerda" },
        { nombre_comuna: "Peñalolén" },
        { nombre_comuna: "Providencia" },
        { nombre_comuna: "Pudahuel" },
        { nombre_comuna: "Quilicura" },
        { nombre_comuna: "Quinta Normal" },
        { nombre_comuna: "Recoleta" },
        { nombre_comuna: "Renca" },
        { nombre_comuna: "San Joaquín" },
        { nombre_comuna: "San Miguel" },
        { nombre_comuna: "San Ramón" },
        { nombre_comuna: "Vitacura" }
      ]
    },
    {
      numero: "6",
      nombre_region: "O'Higgins",
      comunas: [
        { nombre_comuna: "Rancagua" },
        { nombre_comuna: "Machalí" },
        { nombre_comuna: "Graneros" },
        { nombre_comuna: "San Francisco de Mostazal" },
        { nombre_comuna: "Codegua" },
        { nombre_comuna: "Requínoa" },
        { nombre_comuna: "Doñihue" },
        { nombre_comuna: "Coinco" },
        { nombre_comuna: "Coltauco" },
        { nombre_comuna: "Las Cabras" },
        { nombre_comuna: "Peumo" },
        { nombre_comuna: "San Vicente de Tagua Tagua" },
        { nombre_comuna: "Pichidegua" },
        { nombre_comuna: "Pichilemu" },
        { nombre_comuna: "Litueche" },
        { nombre_comuna: "Marchigüe" },
        { nombre_comuna: "Navidad" },
        { nombre_comuna: "La Estrella" },
        { nombre_comuna: "Paredones" }
      ]
    },
    {
      numero: "7",
      nombre_region: "Maule",
      comunas: [
        { nombre_comuna: "Talca" },
        { nombre_comuna: "San Clemente" },
        { nombre_comuna: "Pelarco" },
        { nombre_comuna: "Pencahue" },
        { nombre_comuna: "San Rafael" },
        { nombre_comuna: "Curepto" },
        { nombre_comuna: "Constitución" },
        { nombre_comuna: "Empedrado" },
        { nombre_comuna: "Maule" },
        { nombre_comuna: "San Javier" },
        { nombre_comuna: "Villa Alegre" },
        { nombre_comuna: "Linares" },
        { nombre_comuna: "Colbún" },
        { nombre_comuna: "Longaví" },
        { nombre_comuna: "Parral" },
        { nombre_comuna: "Retiro" },
        { nombre_comuna: "Yerbas Buenas" },
        { nombre_comuna: "Villa Prat" },
        { nombre_comuna: "Hualañé" },
        { nombre_comuna: "Licantén" },
        { nombre_comuna: "Rauco" },
        { nombre_comuna: "Romeral" },
        { nombre_comuna: "Sagrada Familia" },
        { nombre_comuna: "Teno" },
        { nombre_comuna: "Vichuquén" },
      ],
    },
    {
      numero: "8",
      nombre_region: "Biobío",
      comunas: [
        { nombre_comuna: "Concepción" },
        { nombre_comuna: "Coronel" },
        { nombre_comuna: "Chiguayante" },
        { nombre_comuna: "Florida" },
        { nombre_comuna: "Hualqui" },
        { nombre_comuna: "Lota" },
        { nombre_comuna: "Penco" },
        { nombre_comuna: "San Pedro de la Paz" },
        { nombre_comuna: "Santa Juana" },
        { nombre_comuna: "Talcahuano" },
        { nombre_comuna: "Tomé" },
        { nombre_comuna: "Hualpén" }
      ]
    },
    {
      numero: "9",
      nombre_region: "La Araucanía",
      comunas: [
        { nombre_comuna: "Temuco" },
        { nombre_comuna: "Carahue" },
        { nombre_comuna: "Cunco" },
        { nombre_comuna: "Curarrehue" },
        { nombre_comuna: "Freire" },
        { nombre_comuna: "Galvarino" },
        { nombre_comuna: "Gorbea" },
        { nombre_comuna: "Lautaro" },
        { nombre_comuna: "Loncoche" },
        { nombre_comuna: "Melipeuco" },
        { nombre_comuna: "Nueva Imperial" },
        { nombre_comuna: "Padre Las Casas" },
        { nombre_comuna: "Perquenco" },
        { nombre_comuna: "Pitrufquén" },
        { nombre_comuna: "Pucón" },
        { nombre_comuna: "Saavedra" },
        { nombre_comuna: "Teodoro Schmidt" },
        { nombre_comuna: "Toltén" },
        { nombre_comuna: "Vilcún" },
        { nombre_comuna: "Villarrica" }
      ]
    },
    {
      numero: "10",
      nombre_region: "Los Lagos",
      comunas: [
        { nombre_comuna: "Puerto Montt" },
        { nombre_comuna: "Calbuco" },
        { nombre_comuna: "Cochamó" },
        { nombre_comuna: "Fresia" },
        { nombre_comuna: "Frutillar" },
        { nombre_comuna: "Los Muermos" },
        { nombre_comuna: "Llanquihue" },
        { nombre_comuna: "Maullín" },
        { nombre_comuna: "Puerto Varas" },
        { nombre_comuna: "Castro" },
        { nombre_comuna: "Ancud" },
        { nombre_comuna: "Chonchi" },
        { nombre_comuna: "Curaco de Vélez" },
        { nombre_comuna: "Dalcahue" },
        { nombre_comuna: "Puqueldón" },
        { nombre_comuna: "Queilén" },
        { nombre_comuna: "Quellón" },
        { nombre_comuna: "Quemchi" },
        { nombre_comuna: "Quinchao" }
      ]
    },
    {
      numero: "11",
      nombre_region: "Aysén",
      comunas: [
        { nombre_comuna: "Coyhaique" },
        { nombre_comuna: "Lago Verde" },
        { nombre_comuna: "Aysén" },
        { nombre_comuna: "Cisnes" },
        { nombre_comuna: "Guaitecas" },
        { nombre_comuna: "Cochrane" },
        { nombre_comuna: "O'Higgins" },
        { nombre_comuna: "Tortel" }
      ]
    },
    {
      numero: "12",
      nombre_region: "Magallanes y Antártica Chilena",
      comunas: [
        { nombre_comuna: "Punta Arenas" },
        { nombre_comuna: "Laguna Blanca" },
        { nombre_comuna: "Río Verde" },
        { nombre_comuna: "San Gregorio" },
        { nombre_comuna: "Cabo de Hornos (Ex Navarino)" },
        { nombre_comuna: "Antártica" },
        { nombre_comuna: "Porvenir" },
        { nombre_comuna: "Primavera" },
        { nombre_comuna: "Timaukel" }
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRegionSelected(event: MatSelectChange) {
    this.selectedRegion = event.value;
    const region = this.regions.find(r => r.nombre_region === this.selectedRegion);
    this.selectedRegionComunas = region.comunas.map(comuna => comuna.nombre_comuna);
    console.log(this.selectedRegion)
  }

}
