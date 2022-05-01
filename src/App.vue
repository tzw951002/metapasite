<template>
  <v-main style="width: 100%;background-color: rgb(15, 28, 51)" >
    <Header></Header>
    <Video></Video>
    <ShowMessage></ShowMessage>
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
};
</script>
