import "./style.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  Object3D,
  MeshBasicMaterial,
  TextureLoader,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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
document.body.appendChild(renderer.domElement);

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
  "assets/models/seed.glb",
  function (gltf) {
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load("assets/models/seed_diff.png");
    const material = new MeshBasicMaterial({ map: texture });
    // OR
    // const material = new MeshStandardMaterial({ map: texture });

    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
      }
    });

    const modelContainer = new Object3D();
    modelContainer.add(gltf.scene);
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
