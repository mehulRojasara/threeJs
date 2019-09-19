var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

controls = new THREE.OrbitControls(camera, renderer.domElement);

var geometry = new THREE.BoxGeometry(50, 50, 50);
var cubeSides = [
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("../images/po_ft.png"),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("../images/po_bk.png"),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("../images/po_up.png"),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("../images/po_dn.png"),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("../images/po_rt.png"),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("../images/po_lf.png"),
    side: THREE.DoubleSide
  })
];
var material = new THREE.MeshFaceMaterial(cubeSides); //new THREE.MeshPhongMaterial({ color: 0xffffff });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

var update = function() {
  //   console.log("main update called");
  //   cube.rotation.y += 0.01;
  //   cube.rotation.x += 0.01;
};

var render = function() {
  renderer.render(scene, camera);
  //   console.log("main renderer called");
};

var GameLoop = function() {
  requestAnimationFrame(GameLoop);
  update();
  render();
  //   console.log("main gameloop called");
};
GameLoop();
window.addEventListener("resize", function() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

var scene2 = new THREE.Scene();
var camera2 = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//=========================================

// var light1 = new THREE.PointLight(0xffffff, 1);
// scene.add(light1);

// var obj1;

// var mtlLoader = new THREE.MTLLoader();
// mtlLoader.load("./assets/ring.mtl", function(materials) {
//   materials.preload();

//   var objLoader = new THREE.OBJLoader();
//   objLoader.setMaterials(materials);
//   objLoader.load("./assets/ring.obj", function(object) {
//     scene.add(object);
//     obj1 = object;
//     object.position.z -= 10;
//     object.rotation.x = 50;
//   });
// });
// scene.add(mtlLoader);

var light2 = new THREE.PointLight(0xff0000, 1);
scene.add(light2);
var geometry2 = new THREE.BoxGeometry(1, 1, 1);
geometry2.verticesNeedUpdate = true;
geometry2.elementsNeedUpdate = true;
geometry2.morphTargetsNeedUpdate = true;
geometry2.uvsNeedUpdate = true;
geometry2.normalsNeedUpdate = true;
geometry2.colorsNeedUpdate = true;
geometry2.tangentsNeedUpdate = true;

var material2 = new THREE.MeshBasicMaterial({ color: 0x060f3a });

var cube2 = new THREE.Mesh(geometry2, material2);
scene.add(cube2);

// var jwel = new THREE.

camera2.position.z = 3;

//=======================

// change functions

function colorChange() {
  tl = new TimelineMax();
  tl.to(cube2.position, 1, { z: -50, ease: Bounce.easeOut }).call(function() {
    cube2.material.color.setHex(0xff214f);
  });
  tl.to(cube2.position, 1, { z: 0, ease: Bounce.easeIn });
}
function weightChange() {
  tl = new TimelineMax();
  tl.to(cube2.position, 1, { z: -50, ease: Bounce.easeOut }).call(function() {
    cube2.material.color.setHex(0x060f3a);
  });
  tl.to(cube2.position, 1, { z: 0, ease: Bounce.easeIn });
}
function variantChange() {
  alert("variant changed");
}
