<template>
  <v-container style="background-color: transparent;margin-top: 80px">
    <v-row justify="start" align="start">
      <v-col cols="12" align="center">
        <v-img :src="testSrc" contain height="400px"></v-img>
      </v-col>
    </v-row>
    <v-row style="margin-top: 50px">
      <v-col cols="12" align="start" style="padding-left:180px;">
        <h1 style="color: whitesmoke;">{{ subTitle }}</h1>
        <br>
        <h2 style="color: whitesmoke" v-for="(item,index) in textBody.split(';')" :key="index">{{ item }}</h2>
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
    }
  },
  data() {
    return {
      testSrc: require(`@/assets/longBody/${this.imageSrc}`)
    }
  }
}
</script>

<style scoped>

</style>
