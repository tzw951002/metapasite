<template>
  <v-card class="cardBackground" :style="changeCardStyle" style="background-color: transparent;">
      <v-row justify="center" align="center">
        <v-col cols="12" align="center" style="padding-top: 2%">
          <div :style="imageHeightStyle">
            <img :src="testSrc" style="width: 100%;height: 100%">
          </div>
          <div style="width: 100%;margin-top: 5%;margin-bottom: 10%">
            <v-row style="width: 100%">
              <v-col cols="12" align="start">
                <p style="color: whitesmoke;margin-top: 3%;font-size: 1.5vw;padding-left: 10%"><b>{{ subTitle }}</b></p>
                <div style="height: 13%"></div>
                <p style="color: whitesmoke;padding-left: 10%;font-size: 1.3vw"><b>{{ textBody }}</b></p>
              </v-col>
            </v-row>
          </div>

        </v-col>
      </v-row>
  </v-card>
</template>

<script>
export default {
  name: "DetailShowLongSP",
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
    }
  },
  data() {
    return {
      changeCardStyle: 'height: auto;',
      testSrc: require(`@/assets/longBody/${this.imageSrc}`)
    }
  },
  computed: {
    heightStyle() {
      return "40%"
    },
    imageHeightStyle() {
      const widthNumber = 350 / 1700 * window.innerWidth;
      const heightNumber = widthNumber;
      return "height:" + heightNumber + "px; width: " + widthNumber + "px;";
    }
  }
}
</script>

<style scoped>
.cardBackground {
  background: url('../../assets/longBody/graybackgroud.png') no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
