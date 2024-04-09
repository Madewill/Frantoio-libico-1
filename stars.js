// Import necessary Three.js components
import * as THREE from 'three';

// Get the container element where you want to add the stars
const starsContainer = document.getElementById('starsCanvas');

// Create a function to generate random stars
const generateStars = (numStars) => {
  const stars = [];
  const geometry = new THREE.BufferGeometry();

  const positions = [];
  const colors = [];

  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * 2000 - 1000;
    const y = Math.random() * 2000 - 1000;
    const z = Math.random() * 2000 - 1000;

    positions.push(x, y, z);

    colors.push(0.969, 0.757, 0.4); // RGB values for #f7c166

  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({ size: 2, vertexColors: true }); // smaller size
  const points = new THREE.Points(geometry, material);

  return points;
};

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer's DOM element to the container
starsContainer.appendChild(renderer.domElement);

// Add the stars to the scene
const stars = generateStars(1000);
scene.add(stars);

// Set the camera position
camera.position.z = 1000;

// Create an animate function to update the scene
const animate = () => {
  requestAnimationFrame(animate);

  // Rotate the stars
  stars.rotation.x += 0.001;
  stars.rotation.y += 0.001;

  // Render the scene
  renderer.render(scene, camera);
};

// Call the animate function to start the animation
animate();























































































// import * as THREE from 'three';
// const starsContainer = document.getElementById('stars-container');

// const Stars = () => {
//   const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
//   const material = new THREE.PointsMaterial({
//     color: 0xf272c8,
//     size: 0.002,
//     sizeAttenuation: true,
//     transparent: true,
//     depthWrite: false,
//   });
//   const geometry = new THREE.BufferGeometry();
//   geometry.setAttribute('position', new THREE.BufferAttribute(sphere, 3));

//   const points = new THREE.Points(geometry, material);

//   return points;
// };

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// starsContainer.appendChild(renderer.domElement);

// const animate = () => {
//   requestAnimationFrame(animate);

//   scene.rotation.x -= 0.01;
//   scene.rotation.y -= 0.015;

//   renderer.render(scene, camera);
// };

// const init = () => {
//   const stars = Stars();
//   scene.add(stars);

//   animate();
// };

// init();


// const canvas = document.getElementById("starsCanvas");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const stars = [];
// for (let i = 0; i < 1000; i++) {
//   stars.push({
//     x: Math.random() * canvas.width,
//     y: Math.random() * canvas.height,
//     radius: Math.random() * 2,
//   });
// }

// function drawStars() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   for (let i = 0; i < stars.length; i++) {
//     const star = stars[i];
//     ctx.beginPath();
//     ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//     ctx.fillStyle = '#f7c166';
//     ctx.fill();
//   }
// }

// function animateStars() {
//   requestAnimationFrame(animateStars);

//   drawStars();
// }

// animateStars();






// import "./style.css";


// const starsContainer = document.getElementById('starsCanvas');

// const Stars = () => {
//   const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
//   const material = new THREE.PointsMaterial({
//     color: 0xf272c8,
//     size: 0.002,
//     sizeAttenuation: true,
//     transparent: true,
//     depthWrite: false,
//   });
//   const geometry = new THREE.BufferGeometry();
//   geometry.setAttribute('position', new THREE.BufferAttribute(sphere, 3));

//   const points = new THREE.Points(geometry, material);

//   return points;
// };

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// starsContainer.appendChild(renderer.domElement);

// const animate = () => {
//   requestAnimationFrame(animate);

//   scene.rotation.x -= 0.01;
//   scene.rotation.y -= 0.015;

//   renderer.render(scene, camera);
// };

// const init = () => {
//   const stars = Stars();
//   scene.add(stars);

//   animate();
// };

// init();