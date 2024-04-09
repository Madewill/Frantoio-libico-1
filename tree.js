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

const growingTag = document.querySelector(".growing-model");

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
growingTag.appendChild(renderer.domElement);

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

let modelContainer;

loader.load(
  "assets/models/olive_tree.glb",
  function (gltf) {
    modelContainer = new Object3D();
    const model = gltf.scene;

// Set the initial position and rotation for desktop
let initialPositionX = -3.5;
let initialPositionY = -3.2;
let initialPositionZ = 0.8;

let initialRotationX = -0.1;
let initialRotationY = 0.1;
let initialRotationZ = -0.25;

if (window.innerWidth < 768) {
  // Adjust position and rotation for mobile
  initialPositionX = -1.5;
  initialPositionY = -2;
  initialPositionZ = 0;

  initialRotationX = -0.1; 
  initialRotationY = 0.1; 
  initialRotationZ = -0.25; 
}

modelContainer.position.set(initialPositionX, initialPositionY, initialPositionZ);
modelContainer.rotation.set(initialRotationX, initialRotationY, initialRotationZ);

    // Scale the model
    model.scale.set(0.5, 0.5, 0.5);

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

// Add event listener to OrbitControls change event
controls.addEventListener('change', () => {
  // Log rotation angle and position
  if (modelContainer) {
    console.log('Rotation:', modelContainer.rotation);
    console.log('Position:', modelContainer.position);
  }
});

const scrollElement = document.scrollingElement || document.documentElement;

const updateModelScale = () => {
  if (modelContainer) {
    const scrollPercentage = scrollElement.scrollTop / (scrollElement.scrollHeight - scrollElement.clientHeight);
    const scaleFactor = 0.25 + scrollPercentage * 2; // Scale from 0.25 to 2.25
    modelContainer.scale.set(scaleFactor, scaleFactor, scaleFactor);
  }
};

window.addEventListener('scroll', updateModelScale);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
  updateModelScale(); // Update model scale on every frame
}

animate();









































































// import "./style.css";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import {
//   Scene,
//   PerspectiveCamera,
//   WebGLRenderer,
//   AmbientLight,
//   DirectionalLight,
//   Object3D,
// } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const growingTag = document.querySelector(".growing-model");

// const scene = new Scene();

// const camera = new PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0, 0, 5);

// const renderer = new WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x000000, 0);
// growingTag.appendChild(renderer.domElement);

// const ambience = new AmbientLight(0x404040);
// scene.add(ambience);

// const keyLight = new DirectionalLight(0xffffff, 1);
// keyLight.position.set(-1, 1, 3);
// scene.add(keyLight);

// const fillLight = new DirectionalLight(0xffffff, 0.5);
// fillLight.position.set(1, 1, 3);
// scene.add(fillLight);

// const backLight = new DirectionalLight(0xffffff, 1);
// backLight.position.set(-1, 3, -1);
// scene.add(backLight);

// const loader = new GLTFLoader();

// let modelContainer;

// loader.load(
//     "assets/models/olive_tree.glb",
//     function (gltf) {
//       modelContainer = new Object3D();
//       const model = gltf.scene;
  
//       // Set the initial position and rotation
//       modelContainer.position.set(-3.5, -3.2, 0.8); // Set the position to the desired default position
//       modelContainer.rotation.set(-0.1, 0.1, -0.25); // Set the rotation to the desired default rotation
  
//       // Scale the model
//       model.scale.set(0.5, 0.5, 0.5);
  
//       modelContainer.add(model);
//       scene.add(modelContainer);
//     },
//     undefined,
//     function (error) {
//       console.error("Error loading 3D model", error);
//     }
//   );

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = false;

// // Add event listener to OrbitControls change event
// controls.addEventListener('change', () => {
//   // Log rotation angle and position
//   if (modelContainer) {
//     console.log('Rotation:', modelContainer.rotation);
//     console.log('Position:', modelContainer.position);
//   }
// });

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();




































































































// import "./style.css";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import {
//   Scene,
//   PerspectiveCamera,
//   WebGLRenderer,
//   AmbientLight,
//   DirectionalLight,
//   Object3D,
// } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const growingTag = document.querySelector(".growing-model");

// const scene = new Scene();

// const camera = new PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0, 0, 5);

// const renderer = new WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x000000, 0);
// growingTag.appendChild(renderer.domElement);

// const ambience = new AmbientLight(0x404040);
// scene.add(ambience);

// const keyLight = new DirectionalLight(0xffffff, 1);
// keyLight.position.set(-1, 1, 3);
// scene.add(keyLight);

// const fillLight = new DirectionalLight(0xffffff, 0.5);
// fillLight.position.set(1, 1, 3);
// scene.add(fillLight);

// const backLight = new DirectionalLight(0xffffff, 1);
// backLight.position.set(-1, 3, -1);
// scene.add(backLight);

// const loader = new GLTFLoader();

// loader.load(
//   "assets/models/olive_tree.glb",
//   function (gltf) {
//     const modelContainer = new Object3D();
//     const model = gltf.scene;
//     gltf.scene.position.x = 0;
//     gltf.scene.position.y = -3;

//     // Scale the model
//     model.scale.set(0.5, 0.5, 0.5);

//     modelContainer.add(model);
//     scene.add(modelContainer);
//   },
//   undefined,
//   function (error) {
//     console.error("Error loading 3D model", error);
//   }
// );

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = false;

// // Add event listener to OrbitControls change event
// controls.addEventListener("change", () => {
//   // Log rotation angle and position
//   if (modelContainer) {
//     console.log("Rotation:", modelContainer.rotation);
//     console.log("Position:", modelContainer.position);
//   }
// });

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();

// import "./style.css";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import {
//   Scene,
//   PerspectiveCamera,
//   WebGLRenderer,
//   AmbientLight,
//   DirectionalLight,
//   Object3D,
//   MeshStandardMaterial,
//   TextureLoader,
// } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const growingTag = document.querySelector(".growing-model");

// const scene = new Scene();

// const camera = new PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0, 0, 5);

// const renderer = new WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x000000, 0);
// growingTag.appendChild(renderer.domElement);

// const ambience = new AmbientLight(0x404040);
// scene.add(ambience);

// const keyLight = new DirectionalLight(0xffffff, 1);
// keyLight.position.set(-1, 1, 3);
// scene.add(keyLight);

// const fillLight = new DirectionalLight(0xffffff, 0.5);
// fillLight.position.set(1, 1, 3);
// scene.add(fillLight);

// const backLight = new DirectionalLight(0xffffff, 1);
// backLight.position.set(-1, 3, -1);
// scene.add(backLight);

// const loader = new GLTFLoader();

// loader.load(
//   "assets/models/tree4.glb",
//   function (gltf) {
//     const modelContainer = new Object3D();
//     const model = gltf.scene;

//     const textureLoader = new TextureLoader();

//     const woodOcclusion = textureLoader.load("assets/textures/tree-textures/M_Wood_Occlusion.png");
//     const woodNormal = textureLoader.load("assets/textures/tree-textures/M_Wood_Normal.png");
//     const woodMetallicRoughnessG = textureLoader.load("assets/textures/tree-textures/M_Wood_MetallicRoughnessG.png");
//     const woodMetallicRoughnessB = textureLoader.load("assets/textures/tree-textures/M_Wood_MetallicRoughnessB.png");
//     const woodBaseColor = textureLoader.load("assets/textures/tree-textures/M_Wood_BaseColor.png");

//     const leavesOcclusion = textureLoader.load("assets/textures/tree-textures/M_Leaves_Occlusion.png");
//     const leavesNormal = textureLoader.load("assets/textures/tree-textures/M_Leaves_Normal.png");
//     const leavesMetallicRoughnessG = textureLoader.load("assets/textures/tree-textures/M_Leaves_MetallicRoughnessG.png");
//     const leavesMetallicRoughnessB = textureLoader.load("assets/textures/tree-textures/M_Leaves_MetallicRoughnessB.png");
//     const leavesBaseColor = textureLoader.load("assets/textures/tree-textures/M_Leaves_BaseColor.png");

//     const woodMaterial = new MeshStandardMaterial({
//     //   aoMap: woodOcclusion,
//     //   normalMap: woodNormal,
//     //   metalnessMap: woodMetallicRoughnessG,
//     //   roughnessMap: woodMetallicRoughnessB,
//       map: woodBaseColor,
//     });

//     const leavesMaterial = new MeshStandardMaterial({
//     //   aoMap: leavesOcclusion,
//     //   normalMap: leavesNormal,
//     //   metalnessMap: leavesMetallicRoughnessG,
//     //   roughnessMap: leavesMetallicRoughnessB,
//       map: leavesBaseColor,
//     });

//     model.traverse((child) => {
//         if (child.isMesh) {
//           child.material = child.name.includes("Leaves") ? leavesMaterial : woodMaterial;
//         }
//       });

//     modelContainer.add(model);
//     scene.add(modelContainer);
//   },
//   undefined,
//   function (error) {
//     console.error("Error loading 3D model", error);
//   }
// );

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = false;

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();
