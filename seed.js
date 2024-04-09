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

const seedTag = document.querySelector(".planting-model");

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
seedTag.appendChild(renderer.domElement);

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
  "assets/models/seed-1.glb",
  function (gltf) {
    const modelContainer = new Object3D();
    const model = gltf.scene;
    // Set the initial position for desktop
    let positionX = 1;
    let positionY = -1;
    // Check if it's a mobile screen
    if (window.innerWidth < 768) {
      // Adjust position for mobile
      positionX = -1.25;
      positionY = 0.2;
    }
    gltf.scene.position.x = positionX;
    gltf.scene.position.y = positionY;

    // Scale the model
    model.scale.set(25, 25, 25);

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




// import "./style.css";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import {
//   Scene,
//   PerspectiveCamera,
//   WebGLRenderer,
//   AmbientLight,
//   DirectionalLight,
// } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
// import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
// import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
// import { CopyShader } from "three/examples/jsm/shaders/CopyShader.js"; // CopyShader for the final pass
// import { NoiseShader } from "./noise-shader"; // Assuming you have the noise shader in a separate file

// const seedTag = document.querySelector(".planting-model");

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
// seedTag.appendChild(renderer.domElement);

// const ambience = new AmbientLight(0x404040);
// scene.add(ambience);

// const keyLight = new DirectionalLight(0xffffff, 1);
// keyLight.position.set(-1, 1, 3);
// scene.add(keyLight);

// const composer = new EffectComposer(renderer);

// const renderPass = new RenderPass(scene, camera);
// composer.addPass(renderPass);

// let model;

// const loader = new GLTFLoader();

// loader.load(
//   "assets/models/seed-1.glb",
//   function (gltf) {
//     model = gltf.scene;
//     model.position.x = 1;
//     model.position.y = -1;

//     // Scale the model
//     model.scale.set(25, 25, 25);

//     scene.add(model);
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

//   composer.render();
// }

// animate();

// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();

//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// window.addEventListener("resize", onWindowResize);

// // ShaderPass for the noise effect
// const noisePass = new ShaderPass(NoiseShader);
// noisePass.uniforms.time.value = 0; // Set initial time value
// noisePass.uniforms.effect.value = 0; // Set initial effect value
// composer.addPass(noisePass);

// // ShaderPass for the final effect
// const finalPass = new ShaderPass(CopyShader);
// finalPass.renderToScreen = true; // Render the final pass to the screen
// composer.addPass(finalPass);

// // Handle scroll to trigger noise effect and model rotation
// let currentEffect = 0;

// function onScroll() {
//   const targetEffect = window.scrollY > 200 ? 1.8 : 0;
//   currentEffect += (targetEffect - currentEffect) * 0.1;
//   noisePass.uniforms.effect.value = currentEffect;

//   // Rotate the model based on the scroll position
//   model.rotation.y = -Math.PI * 0.5 * (window.scrollY / (document.body.clientHeight - window.innerHeight));

//   clearTimeout(timeoutEffect);
//   timeoutEffect = setTimeout(() => {
//     currentEffect = 0;
//     noisePass.uniforms.effect.value = currentEffect;
//   }, 1500);
// }

// let timeoutEffect;
// window.addEventListener("scroll", onScroll);


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
// import { NoiseShader } from "./noise-shader"; // Import the noise shader

// const seedTag = document.querySelector(".planting-model");
// const noiseShaderElement = document.querySelector(".noise-shader");

// const containerHeight = seedTag.clientHeight;

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
// seedTag.appendChild(renderer.domElement);

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
//     "assets/models/seed-1.glb",
//     function (gltf) {
//       const modelContainer = new Object3D();
//       const model = gltf.scene;
//       gltf.scene.position.x = 1;
//       gltf.scene.position.y = -1;

//       // Scale the model
//       model.scale.set(25, 25, 25);

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

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();

// function updateNoiseEffect() {
//   const scrollY = window.scrollY || window.pageYOffset;
//   const scrollPercent = scrollY / (containerHeight - window.innerHeight);
//   const effectValue = Math.min(Math.max(scrollPercent * 2, 0), 1);

//   NoiseShader.uniforms.effect.value = effectValue; // Use NoiseShader instead of noiseShader

//   // Render the noise shader
//   renderer.setRenderTarget(null);
//   renderer.render(noiseShaderElement, camera);
// }

// window.addEventListener("scroll", updateNoiseEffect);
// updateNoiseEffect();




































// THE CODE I USED GAN GAN GAN!

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

// const seedTag = document.querySelector(".planting-model");

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
// seedTag.appendChild(renderer.domElement);

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
//     "assets/models/seed-1.glb",
//     function (gltf) {
//       const modelContainer = new Object3D();
//       const model = gltf.scene;
//       gltf.scene.position.x = 1;
//       gltf.scene.position.y = -1;

//       // Scale the model
//       model.scale.set(25, 25, 25);

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

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();














// ANIMATED CODE!

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
// import { animate, inView } from "motion";
// import { NoiseShader } from "./noise-shader";

// const seedTag = document.querySelector(".planting-model");

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
// seedTag.appendChild(renderer.domElement);

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
//   "assets/models/seed-1.glb",
//   function (gltf) {
//     const modelContainer = new Object3D();
//     const model = gltf.scene;
//     gltf.scene.position.x = 1;
//     gltf.scene.position.y = -1;
//     model.scale.set(25, 25, 25);
//     modelContainer.add(model);
//     scene.add(modelContainer);

//     // Animate model entrance
//     animate(
//       modelContainer,
//       { x: 1, y: -1, opacity: 0 },
//       { x: 0, y: 0, opacity: 1 },
//       { duration: 1, delay: 0.5 }
//     );
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

// function animateModelRotation(scrollY) {
//   const angle = Math.PI * 0.5 * (scrollY / window.innerHeight);
//   // Rotate model based on scroll
//   modelContainer.rotation.z = angle;
//   // Update noise shader effect based on scroll
//   noisePass.uniforms.effect.value = scrollY / window.innerHeight;
// }

// function onScroll() {
//   const scrollY = window.scrollY;
//   animateModelRotation(scrollY);
// }

// window.addEventListener("scroll", onScroll);

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();
