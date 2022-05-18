<template>
  <v-expansion-panels>
    <v-expansion-panel class="panelBackground" style="background-color: transparent;">
      <v-expansion-panel-header>
        <v-row>
          <v-col cols="3" align="start" style="margin-left: 5%">
            <p style="color: whitesmoke;font-size: 2vw"><b>{{title}}</b></p>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row style="margin-bottom: 1%">
          <v-col cols="12" align="center">
            <div style="background-color: white" :style="imageHeightStyle">
              <img :src="testSrc" style="width: 100%;height: 100%">
            </div>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "Panel",
  props: {
    title: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      testSrc: require(`@/assets/chat/${this.imageSrc}`)
    }
  },
  computed:{
    imageHeightStyle() {
      const widthNumber = 800 / 1080 * window.innerWidth;
      const heightNumber = widthNumber*1318/2216;
      return "height:" + heightNumber + "px; width: " + widthNumber + "px;";
    }
  }
}
</script>

<style scoped>
.panelBackground {
  background: url('../../assets/longBody/panelback.png') no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
