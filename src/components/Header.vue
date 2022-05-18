<template>
  <v-container class="header" :style="backgroudStyle" fluid>
    <v-row>
      <v-col cols="3" class="ma-lg-0">
        <div :style="logoStyle">
          <img src="../assets/header/logo.png" style="width: 100%;height: 100%">
        </div>
<!--        <v-img src="../assets/header/logo.png" height="100%" width="100%" contain></v-img>-->
      </v-col>
    </v-row>
    <v-row :style="fontStyle">
      <v-col cols="12" align="center">
        <span class="titleFont"><b>Meta World of Mega Amusement</b></span><br>
        <span class="titleFont"><b>in Japan</b></span>
      </v-col>
    </v-row>
    <v-row style="height: 20px;background-color: black">
      <v-col cols="5" ></v-col>
      <v-col cols="2" align="center" >
        <div :style="arrowImg">
        <img src="../assets/video/arrow.png"  style="margin-top: -18%;width: 25%;height: 25%">
        </div>
      </v-col>
      <v-col cols="5" ></v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Header",
  computed: {
    logoStyle(){
      const widthNumber = window.innerWidth*0.3;
      const heightNumber = 246 / 468 * widthNumber;
      return "Height: " + heightNumber + "px"+ "; Width: " + widthNumber + "px";
    },
    fontStyle() {
      const pxNumber = 430 / 929 * window.innerHeight;
      const marginBottom = 70 / 929 * window.innerHeight;
      return "margin-top: " + pxNumber + "px"+ "; margin-bottom: " + marginBottom + "px";
    },
    backgroudStyle() {
      const widthNumber = window.innerWidth;
      const heightNumber = 651 / 1440 * widthNumber;
      return "Height: " + heightNumber + "px";
    },
    arrowImg(){
      const widthNumber = 15/1281*window.innerWidth;
      const heightNumber = 60*widthNumber/50;
      return "Height: " + heightNumber + "px"+ "; Width: " + widthNumber + "px";
    }
  }
}
</script>

<style scoped>
.header {
  background: url('../assets/header/background.png') no-repeat !important;
  background-size: 100% 100% !important;
}

.titleFont {
  font-size: 2.6vw;
  font-weight: bold;
  color: whitesmoke;
  font-weight: bold;
}

</style>
