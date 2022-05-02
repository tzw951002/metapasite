<template>
  <v-card class="cardBackground" :style="changeCardStyle" style="background-color: transparent;">
    <v-card-title>
      <v-row justify="start" align="start" style="margin-top: 50px">
        <v-col cols="12" align="center">
          <v-img :src="testSrc" contain height="350px"></v-img>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text style="margin-top: 50px;margin-left: 60px">
      <v-row>
        <v-col cols="12" align="start">
          <h1 style="color: whitesmoke;">{{ subTitle }}</h1>
          <br>
          <h2 style="color: whitesmoke">{{ textBody }}</h2>
        </v-col>
      </v-row>
    </v-card-text>
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
      changeCardStyle: 'height:' + window.innerHeight*0.7 + 'px;',
      testSrc: require(`@/assets/longBody/${this.imageSrc}`)
    }
  },
}
</script>

<style scoped>
.cardBackground {
  background: url('../../assets/longBody/graybackgroud.png') no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
