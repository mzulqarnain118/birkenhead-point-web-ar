<style scoped>
/* Styles */
.arjs-loader {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }

  .arjs-loader div {
    text-align: center;
    font-size: 1.25em;
    color: black;
  }
</style> 
<template>
  <head>
    
  </head>
<div >
     <!-- minimal loader shown until image descriptors are loaded. Loading may take a while according to the device computational power -->
  <div class="arjs-loader">
    <div>Loading, please wait...</div>
  </div>
    <!-- <a-scene
      vr-mode-ui="enabled: false;"
      renderer="logarithmicDepthBuffer: true;"
      embedded
      arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
    >
      <a-nft
             type='nft' url='/public/trex'
            smooth='true' smoothCount='10' smoothTolerance='0.01' smoothThreshold='5'
      >
        <a-entity
                gltf-model='/public/scene.gltf'
          scale="5 5 5"
          position="50 150 0"
        >
        </a-entity>
      </a-nft>
      <a-entity camera></a-entity>
      <a-entity
        id="outputText"
        position="0 0.5 -1"
        text="value: QR Code data will appear here; align: center; width: 6"
      ></a-entity>
    </a-scene> -->
    <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded arjs='trackingMethod: best; sourceType: webcam; debugUIEnabled: false;'>
        <!-- use rawgithack to retrieve the correct url for nft marker (see 'trex' below) -->
        <a-nft
            type='nft' url='https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex'
      smooth="true"
      smoothCount="10"
      smoothTolerance=".01"
      smoothThreshold="5"
    >
    <a-entity
        gltf-model='https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf'
        scale="7 7 7"
        position="80 80 0"
        rotation="0 -90 90"
        >
    </a-entity>
    </a-nft>
    <a-entity camera></a-entity>
    </a-scene>
  </div>
</template>

<script setup>
// import 'aframe';
// import 'ar.js';

</script>