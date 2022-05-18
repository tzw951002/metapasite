<template>
  <v-main style="width: 100%;background-color: rgb(15, 28, 51)">
    <Header></Header>
    <Video></Video>
    <ShowMessage></ShowMessage>
    <v-row dense justify="center" align="center" style="margin-top: 2%;margin-bottom: 2%">
      <v-col cols="4"></v-col>
      <v-col cols="1" align="center" style="align-self: center">
        <div>
          <img src="./assets/video/bird.png" height="50%" width="50%">
        </div>
      </v-col>
      <v-col cols="1" align="center" style="align-self: center">
        <div>
          <img src="./assets/video/ET.png" height="50%" width="50%">
        </div>
      </v-col>
      <v-col cols="1" align="center" style="align-self: center">
        <div>
          <img src="./assets/video/fish.png" height="50%" width="50%">
        </div>
      </v-col>
      <v-col cols="1" align="center" style="align-self: center">
        <div>
          <img src="./assets/video/fly.png" height="50%" width="50%">
        </div>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
    <LongBody></LongBody>
  </v-main>
</template>

<script>
import Header from "@/components/Header";
import Video from "@/components/Video";
import ShowMessage from "@/components/ShowMessage";
import LongBody from "@/components/LongBody";


export default {
  name: 'App',
  components: {
    Header,
    Video,
    ShowMessage,
    LongBody
  },
  data: () => ({
    //
  }),
  computed: {},
  mounted() {
    window.onresize = function windowResize() {
      location.reload();
    };
    if (this.$device.isMobile || window.innerWidth < 820) {
      location.href = "http://m.metapacity.io/";
    } else {
      // window.location.href="http://testwebtzw.s3-website-us-east-1.amazonaws.com/";
    }

  },
};
</script>
<style>
.v-icon {
  color: rgb(110, 110, 110) !important;
  font-size: 4em !important;
}

.v-btn {
  text-transform: none !important;
}
.body{
  margin: 0 !important;
  padding: 0 !important;
}
::-webkit-scrollbar{
  width: 0 !important;
}

::-webkit-scrollbar{
  width: 0!important;height: 0;
}
html,body{
  overflow-x: hidden !important;
}


</style>
