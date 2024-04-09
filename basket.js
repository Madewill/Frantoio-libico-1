import "./style.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  Object3D,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const harvestTag = document.querySelector(".harvesting-model");

const scene = new Scene();

const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 5);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
harvestTag.appendChild(renderer.domElement);

const ambience = new AmbientLight(0x404040);
scene.add(ambience);

const keyLight = new DirectionalLight(0xffffff, 1);
keyLight.position.set(-1, 1, 3);
scene.add(keyLight);

const fillLight = new DirectionalLight(0xffffff, 0.5);
fillLight.position.set(1, 1, 3);
scene.add(fillLight);

const backLight = new DirectionalLight(0xffffff, 1);
backLight.position.set(-1, 3, -1);
scene.add(backLight);

const loader = new GLTFLoader();

loader.load(
  "assets/models/basket.glb",
  function (gltf) {
    const modelContainer = new Object3D();
    const model = gltf.scene;

    // Set initial position and scale for desktop
    let initialPositionX = 1.5;
    let initialPositionY = -1;
    let initialScale = 0.2;

    if (window.innerWidth < 768) {
      // Adjust position and scale for mobile
      initialPositionX = -0.36;
      initialPositionY = 1.0;
      initialScale = 0.1;
    }

    model.position.set(initialPositionX, initialPositionY, 0);
    model.scale.set(initialScale, initialScale, initialScale);

    modelContainer.add(model);
    scene.add(modelContainer);
  },
  undefined,
  function (error) {
    console.error("Error loading 3D model", error);
  }
);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = false;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
