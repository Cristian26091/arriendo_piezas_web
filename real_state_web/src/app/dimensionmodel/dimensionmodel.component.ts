import { Component, OnInit, ViewChild, ElementRef,  } from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-dimensionmodel',
  templateUrl: './dimensionmodel.component.html',
  styleUrls: ['./dimensionmodel.component.css']
})
export class DimensionmodelComponent implements OnInit{

  // @ViewChild('canvas') canvasRef: ElementRef<HTMLCanvasElement>;
  @ViewChild('container', { static: true }) container!: ElementRef;

  private scene: THREE.Scene = new THREE.Scene();

  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: THREE.OrbitControls;
  
  private ambientLight: THREE.AmbientLight;
  private directionalLight : THREE.DirectionalLight;

  constructor() {
  }

  private initscene() {

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 5);
    this.renderer = new THREE.WebGLRenderer({antialias : true});
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.nativeElement.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;

    // Agregar luces a la escena
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(this.ambientLight);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.directionalLight.position.set(1, 1, 1).normalize();
    this.scene.add(this.directionalLight);

    // Agregar fondo a la escena
    this.scene.background = new THREE.Color(0x000000);

  }

  private load3DObject(url: string): Promise<THREE.Object3D> {
    return new Promise((resolve, reject) => {
      const loader = new OBJLoader();
      loader.load(url, resolve, undefined, reject);
    });
  }

  ngOnInit(): void {
    this.initscene();

    // Aquí puedes acceder al canvas utilizando la referencia container
    this.load3DObject('../assets/3d-models/bugatti.obj')
    .then((object) => {
      object.scale.set(0.1, 0.1, 0.1);
      this.scene.add(object);
    })
    .catch((error) => {
      console.error(`Error al cargar el objeto 3D: ${error}`);
    });

    // this.renderer.setSize(this.container.nativeElement.clientWidth, this.container.nativeElement.clientHeight);
    // this.container.nativeElement.appendChild(this.renderer.domElement);

    const containerElement = this.container.nativeElement;
    this.renderer.setSize(containerElement.clientWidth, containerElement.clientHeight);


    this.camera.lookAt(0,0,0);//apunta la camaara hacia el orijen


    this.animate();    
  } 

  ngOnDestroy() {
    this.controls.dispose();
    this.renderer.dispose();
    this.scene.dispose();
  }

   private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }
}
