<template>
  <v-container class="showMessage" :style="changeStyle" fluid style="margin-top: 2%">
    <v-row :style="fontStyle">
      <v-col cols="12" align="center">
        <span class="titleFont"><b>Realizing the dream of huge amusement in Japan</b></span><br>
        <span class="titleFont"><b>as scale of 14 trillion yen by METAVERSE</b></span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ShowMessage",
  data() {
    return {
    }
  },
  computed: {
    changeStyle(){
      const backgroudWidth = window.innerWidth;
      const backgroundHeight = backgroudWidth*873/1551;
      return 'width:' + backgroudWidth + 'px;'+'height:' + backgroundHeight + 'px;';
    },
    fontStyle() {
      return "margin-top:45%;"
    }
  }
}
</script>

<style scoped>
.showMessage {
  background: url('../assets/showMessage/tower.png') no-repeat !important;
  background-size: 100% 100% !important;
}

.titleFont {
  font-size: 2vw;
  font-weight: bold;
  color: whitesmoke;
}
</style>
