<template>
  <v-container class="longBody" :style="changeStyle" fluid>
    <v-card class="cardBackground" :style="changeCardStyle"
            style="margin-top: 50px;margin-left: 50px;margin-right: 50px;background-color: transparent;">
      <v-card-title>
        <v-row style="margin-top: 50px">
          <v-col cols="12" align="center">
            <h1 style="color: whitesmoke">PLAY TO RERN</h1>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6" align="center">
            <DetailsShow subTitle="Income for parlor owners"
                         textBody="Start store operation by selecting a building or ; location and inviting a stand"
                         imageSrc="1.png"></DetailsShow>
          </v-col>
          <v-col cols="6" align="center">
            <DetailsShow subTitle="Income for Machine owners"
                         textBody="By owning an NFT pachislot machine, the more ; users play, the more revenue share they will have."
                         imageSrc="2.png"></DetailsShow>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" align="center">
            <DetailsShow subTitle="Infinite virtual reality world"
                         textBody="Pachislot-filled Metaverse for users who want to ; be enthusiastic about pachislot"
                         imageSrc="3.png"></DetailsShow>
          </v-col>
          <v-col cols="6" align="center">
            <DetailsShow subTitle="Social"
                         textBody="You may also compete with other users for ; exchanging strategy information and ranking."
                         imageSrc="4.png"></DetailsShow>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" align="center">
            <DetailsShow subTitle="Grow up" textBody="The more you do, the more you can rank up and ; grow"
                         imageSrc="5.png"></DetailsShow>
          </v-col>
          <v-col cols="6" align="center">
            <DetailsShow subTitle="Strategy, not luck"
                         textBody="To make money with pachislot, not only luck but ; strategy is more important. It has a chance for ; everyone."
                         imageSrc="6.png"></DetailsShow>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <h1 style="margin-left: 50px;margin-top:100px;color: whitesmoke">FEATURED ARCADE MACHINES</h1>
    <v-row style="margin-top:30px;margin-left: 50px;margin-right: 50px">
      <v-col cols="3" style="padding-left: 0px;">
        <DetailShowLong
            subTitle="Puzzler"
            textBody="1 / 20000"
            imageSrc="mac1.png"></DetailShowLong>
      </v-col>
      <v-col cols="3" >
        <DetailShowLong
            subTitle="Sushi Land"
            textBody="1 / 20000"
            imageSrc="mac2.png"></DetailShowLong>
      </v-col>
      <v-col cols="3" >
        <DetailShowLong
            subTitle="ALL STAR"
            textBody="1 / 20000"
            imageSrc="mac3.png"></DetailShowLong>
      </v-col>
      <v-col cols="3" style="padding-right: 0px">
        <DetailShowLong
            subTitle="Puzzler"
            textBody="1 / 20000"
            imageSrc="mac4.png"></DetailShowLong>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" align="center">
        <v-btn color="black" style="width: 500px;height: 100px;font-size: 20px;margin-top: 50px;background-color: rgb(255,211,14)">
          SEE ALL THE MACHINES
        </v-btn>
      </v-col>
    </v-row>
    <h1 style="margin-left: 50px;margin-top:100px;color: whitesmoke">GAME CENTER & PARTS</h1>
    <v-row style="margin-top:30px;margin-left: 50px;margin-right: 50px">
      <v-col cols="3" style="padding-left: 0px;">
        <DetailShowLongSP
            subTitle="Dummy game center"
            textBody="1 / 20000"
            imageSrc="build1.png"></DetailShowLongSP>
      </v-col>
      <v-col cols="3" >
        <DetailShowLongSP
            subTitle="Dummy TRICK STAR"
            textBody="1 / 20000"
            imageSrc="build2.png"></DetailShowLongSP>
      </v-col>
      <v-col cols="3" >
        <DetailShowLongSP
            subTitle="Dummy building"
            textBody="1 / 20000"
            imageSrc="build3.png"></DetailShowLongSP>
      </v-col>
      <v-col cols="3" style="padding-right: 0px">
        <DetailShowLongSP
            subTitle="Dummy parts"
            textBody="1 / 20000"
            imageSrc="build4.png"></DetailShowLongSP>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" align="center">
        <v-btn color="black" style="width: 500px;height: 100px;font-size: 20px;margin-top: 50px;background-color: rgb(255,211,14)">
          SEE ALL THE PARTS
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DetailsShow from './LongBodyUse/DetailShow';
import DetailShowLong from './LongBodyUse/DetailShowLong';
import DetailShowLongSP from './LongBodyUse/DetailShowLongSP';


export default {
  name: "LongBody",
  components: {
    DetailsShow,
    DetailShowLong,
    DetailShowLongSP
  },
  data() {
    return {
      changeStyle: 'height:' + window.innerHeight * 6 + 'px;',
      changeCardStyle: 'height:' + window.innerHeight * 2.5 + 'px;',
    }
  },
}
</script>

<style scoped>
.longBody {
  background: url('../assets/longBody/longBackgroud.png') no-repeat !important;
  background-size: 100% 100% !important;
}

.cardBackground {
  background: url('../assets/longBody/grayLong.png') no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
