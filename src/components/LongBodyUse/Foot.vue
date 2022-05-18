<template>
  <v-row>
    <v-col cols="4"></v-col>
    <v-col cols="4">
      <img src="../../assets/header/logo.png" style="width: 100%;height: 100%">
    </v-col>
    <v-col cols="1"></v-col>
    <v-col cols="3" align="end">
      <v-row dense justify="center" align="center" style="margin-top: 2%;margin-bottom: 2%">
        <v-col cols="3" align="center"  style="align-self: center">
          <div>
            <img src="../../assets/video/bird.png" height="50%" width="50%">
          </div>
        </v-col>
        <v-col cols="3" align="center"  style="align-self: center">
          <div>
            <img src="../../assets/video/ET.png" height="50%" width="50%">
          </div>
        </v-col>
        <v-col cols="3" align="center"  style="align-self: center">
          <div>
            <img src="../../assets/video/fish.png" height="50%" width="50%">
          </div>
        </v-col>
        <v-col cols="3" align="center"  style="align-self: center">
          <div>
            <img src="../../assets/video/fly.png" height="50%" width="50%">
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Foot",
  computed:{
    imageHeightStyle(){
      const widthNumber = 30/1700*window.innerWidth;
      const heightNumber = 30 / 929 * window.innerHeight;
      return "height:"+heightNumber +"px; width: "+widthNumber+"px;";
    }
  }
}
</script>

<style scoped>

</style>
