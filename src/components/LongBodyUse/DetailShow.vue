<template>
  <v-container style="background-color: transparent;margin-top: 2%">
    <v-row justify="start" align="start">
      <v-col cols="12" align="center">
        <div :style="imageHeightStyle">
          <img :src="testSrc" style="width: 100%;height: 100%">
        </div>
      </v-col>
    </v-row>
    <v-row style="margin-top: 2%">
      <v-col cols="12" align="start" :style="paddingLeftStyle">
        <p style="color: whitesmoke;font-size: 1.8vw;margin-bottom: 5px;line-height:100%" :style="paddingLeftTitleStyle"  v-for="(item1,index) in subTitle.split(';')" :key="`first-${index}`"><b>{{ item1 }}</b></p>
        <div style="height: 10%"></div>
        <p style="color: whitesmoke;font-size: 1.5vw;margin-bottom: 3px;line-height:100%" v-for="(item,index) in textBody.split(';')" :key="`second-${index}`"><b>{{ item }}</b></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DetailShow",
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    },
    textBody: {
      type: String,
      required: true
    },
    paddingValue:{
      type: String,
      required: false,
      default: "25%"
    },
    paddingValueTitle:{
      type: String,
      required: false,
      default: "0%"
    },
    imageHeight:{
      type: String,
      required: false,
      default: "100%"
    }
  },
  data() {
    return {
      testSrc: require(`@/assets/longBody/${this.imageSrc}`)
    }
  },
  computed: {
    paddingLeftStyle() {
      return "padding-left:" + this.paddingValue;
    },
    paddingLeftTitleStyle(){
      return "padding-left:" + this.paddingValueTitle;
    },
    imageHeightStyle(){
      const widthNumber = 400/1700*window.innerWidth;
      // const heightNumber = 400 / 929 * window.innerHeight;
      const heightNumber = widthNumber;
      return "height:"+heightNumber +"px; width: "+widthNumber+"px;";
    }
  }
}
</script>

<style scoped>

</style>
