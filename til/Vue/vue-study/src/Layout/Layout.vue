<template>
  <div id="header">
    <LayoutHeader></LayoutHeader>
  </div>
  <div id="slider">
    <LayoutSlider></LayoutSlider>
  </div>
  <div id="container">
    <LayoutContainer></LayoutContainer>
  </div>
  <div id="footer">
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script>

import LayoutHeader from './LayoutHeader.vue';
import LayoutContainer from './LayoutContainer.vue';
import LayoutSlider from './LayoutSlider.vue';
import LayoutFooter from './LayoutFooter.vue';

export default {
  components: {
    LayoutHeader,
    LayoutContainer,
    LayoutSlider,
    LayoutFooter,
  }
}
</script>

<style>
  /* div{border: 1px solid powderblue; position: relative;}
  #header {height: 50px;}
  #slider {width: 20%; height: calc(100vh-100px);} */
  div {border: 1px solid blue; position: relative;}     
  #header {height: 50px;}     
  #sider {width: 20%; height: calc(100vh - 100px); display: inline-block;}     
  #container {width: 80%; height: calc(100vh - 100px); display: inline-block;}     
  #footer {height: 50px;}
</style>