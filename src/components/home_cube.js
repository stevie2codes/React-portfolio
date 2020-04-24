import React, { Component } from "react";
import * as THREE from "three";

class HomeCube extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 40;
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // this.renderer.setClearColor("0x000000, 0");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //ADD CUBE

    const geometry = new THREE.TorusKnotBufferGeometry(20, 4.6, 583, 60, 2, 4);

    // const texture = new THREE.TextureLoader().load(
    //   "https://res.cloudinary.com/df9q0hnuw/image/upload/v1586534332/default_tq2jz7.png"
    // );
    const material = new THREE.MeshBasicMaterial({
      // map: texture,
      color: 0x742020,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });

    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    this.cube.rotation.x += 0.006;
    this.cube.rotation.y += 0.006;
    this.cube.rotation.z += 0.006;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute"
            // right: "15vw",
            // bottom: "10px"
          }}
          ref={mount => {
            this.mount = mount;
          }}
        />
      </React.Fragment>
    );
  }
}

export default HomeCube;
