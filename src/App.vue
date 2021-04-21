<template>
  <div id="app">
    <base-header/>
    <main class="converter">
      <img class="background" :src="require('@/assets/images/strings-bg.png')" alt="Gradient background" >
      <conversion-card/>
    </main>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
    BaseHeader: () => import('@/components/layout/base-header'),
    ConversionCard: () => import('@/components/ui/conversion-card')
  }
}
</script>
<style lang="scss">
 @import "@/assets/scss/main.scss";
 #app{
  max-width: 100vw;
  min-height: 100vh;
 }
 .converter{
    width: 100%;
    height: 100vh;
    display: flex;
    place-items: center;
    //older browser
    justify-content: center;
    align-items: center;
 }
 .background{
   z-index: 0;
   position: absolute;
 }
</style>
