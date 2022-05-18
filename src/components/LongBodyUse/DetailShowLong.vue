<template>
  <v-card class="cardBackground" :style="changeCardStyle" style="background-color: transparent;">
    <v-card-title>
      <v-row style="width: 100%">
        <v-col cols="12" align="center">
          <p style="color: whitesmoke;font-size: 2vw"><b>COMING SOON</b></p>
        </v-col>
      </v-row>
      <v-row justify="start" align="start" style="margin-top: 2%">
        <v-col cols="12" align="center">
          <div :style="imageHeightStyle">
            <img :src="testSrc" style="width: 100%;height: 100%">
          </div>
          <div style="width: 100%;margin-top: 5%">
            <v-row style="width: 100%">
              <v-col cols="12" align="start">
                <p style="color: whitesmoke;margin-top: 3%;font-size: 1.5vw;padding-left: 10%"><b>{{ subTitle }}</b></p>
                <div style="height: 5%"></div>
                <p style="color: whitesmoke;padding-left: 10%;font-size: 1.3vw"><b>{{ textBody }}</b></p>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "DetailShowLong",
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
    imageHeightStyle() {
      const widthNumber = 200 / 1700 * window.innerWidth;
      const heightNumber = widthNumber*276/167;
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
