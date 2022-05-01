<template>
  <v-container class="showMessage" :style="changeStyle" fluid>
      <v-row style="margin-top: 780px;">
        <v-col cols="12" align="center">
          <span class="titleFont">We provide not only the exciting experience of choosing a store or stand and</span><br>
          <span class="titleFont">playing for victory,but also the joy of winning.</span>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ShowMessage",
  data() {
    return {
      changeStyle: 'height:' + window.innerHeight + 'px;'
    }
  },
}
</script>

<style scoped>
.showMessage {
  background: url('../assets/showMessage/tower.png') no-repeat !important;
  background-size: 100% 100% !important;
}
.titleFont {
  font-size: 28px;
  font-weight: bold;
  color: whitesmoke;
}
</style>
