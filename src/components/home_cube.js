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
    this.camera.position.set(180, 0, 0);
    this.camera.lookAt(new THREE.Vector3());
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // this.renderer.setClearColor("0x000000, 0");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //ADD CUBE
    //TorusKnotBufferGeometry
    const geometry = new THREE.TorusKnotGeometry(100, 15, 1200, 30, 12, 6);

    const light = new THREE.DirectionalLight("rgb(116, 32, 32)", 2);
    light.position.set(3, 2, 0);
    this.scene.add(light);
    const material = new THREE.MeshPhongMaterial({
      color: "rgb(116, 32, 32)",
      shininess: "6000"
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
    this.cube.rotation.x += 0.003;
    this.cube.rotation.y += 0.003;
    this.cube.rotation.z += 0.02;

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
            position: "fixed"
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
