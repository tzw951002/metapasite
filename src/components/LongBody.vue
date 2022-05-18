<template>
  <v-container class="longBody" :style="changeStyle" fluid>
    <v-card class="cardBackground" :style="changeCardStyle"
            style="margin-top: 2%;margin-left: 2%;margin-right: 2%;background-color: transparent;">
      <v-card-title>
        <v-row style="margin-top: 1%">
          <v-col cols="12" align="center">
            <p style="color: whitesmoke;font-size: 3.5vw"><b>PLAY TO EARN</b></p>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6" align="center">
            <DetailsShow subTitle="EARNING OF ARCADE OWNER"
                         textBody="The arcade owner could earn the points by attracting more players to join and play."
                         imageSrc="1.png"></DetailsShow>
          </v-col>
          <v-col cols="6" align="center">
            <DetailsShow subTitle="EARNING OF GAME MACHINE OWNER"
                         textBody="The game machine owner could earn points by renting out machines to the Arcade owners."
                         imageSrc="2.png"></DetailsShow>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" align="center">
            <DetailsShow subTitle="STRATEGY AND SKILL"
                         textBody="Players could earn higher points not only out of luck but also due to good judging and analysis of  the machine trends, improvement of game skill."
                         imageSrc="3.png"></DetailsShow>
          </v-col>
          <v-col cols="6" align="center">
            <DetailsShow subTitle="PLAYER RANK UP SYSTEM"
                         textBody="The player rank increases according to the winning percentage and numbers of play. As a result, the player can play to a wider area and  obtain higher points."
                         imageSrc="4.png"></DetailsShow>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" align="center">
            <DetailsShow subTitle="INFINITE VIRTUAL REALITY WORLD"
                         textBody="Players could aim higher on Infinite Virtual Reality World"
                         imageSrc="5.png"></DetailsShow>
          </v-col>
          <v-col cols="6" align="center">
            <DetailsShow subTitle="INCREASE WINNING PERCENTAGE ; BY EXCHANGING INFORMATION ; THROUGH SOCIAL"
                         textBody="Players could earn higher points by exchanging information through social in virtual world. By increasing the number of friends who share the space, you can earn high points by exchanging information within social activities."
                         imageSrc="6.png"></DetailsShow>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <p style="margin-left: 2%;margin-top: 3%;color: whitesmoke;font-size: 2.5vw"><b>Featured Game Machine (NFT)</b></p>
    <v-row style="margin-top:1.5%;margin-left: 2%;margin-right: 2%">
      <v-col cols="3" style="padding-left: 0px;">
        <DetailShowLong
            subTitle="Puzzle"
            textBody="1 / 20000"
            imageSrc="macgold.png"></DetailShowLong>
      </v-col>
      <v-col cols="3">
        <DetailShowLong
            subTitle="Sushi Land"
            textBody="1 / 20000"
            imageSrc="macgold.png"></DetailShowLong>
      </v-col>
      <v-col cols="3">
        <DetailShowLong
            subTitle="ALL STAR"
            textBody="1 / 20000"
            imageSrc="macgold.png"></DetailShowLong>
      </v-col>
      <v-col cols="3" style="padding-right: 0px">
        <DetailShowLong
            subTitle="Puzzle"
            textBody="1 / 20000"
            imageSrc="macgold.png"></DetailShowLong>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" align="center">
        <v-btn color="black"
               style="width: 30%;height: 150%;font-size: 1.5vw;margin-top: 2%;background-color: rgb(255,211,14)">
          <span><b>Buy Now</b></span>
        </v-btn>
      </v-col>
    </v-row>
    <p style="margin-left: 2%;margin-top: 8%;color: whitesmoke;font-size: 2.5vw"><b>Arcade (NFT)</b></p>
    <v-row style="margin-top:1.5%;margin-left: 2%;margin-right: 2%">
      <v-col cols="3">
        <DetailShowLongSP
            subTitle="Dummy game center"
            textBody="1 / 20000"
            imageSrc="build1.png"></DetailShowLongSP>
      </v-col>
      <v-col cols="3">
        <DetailShowLongSP
            subTitle="Dummy TRICK STAR"
            textBody="1 / 20000"
            imageSrc="build2.png"></DetailShowLongSP>
      </v-col>
      <v-col cols="3">
        <DetailShowLongSP
            subTitle="Dummy building"
            textBody="1 / 20000"
            imageSrc="build3.png"></DetailShowLongSP>
      </v-col>
      <v-col cols="3">
        <DetailShowLongSP
            subTitle="Dummy parts"
            textBody="1 / 20000"
            imageSrc="build4.png"></DetailShowLongSP>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" align="center">
        <v-btn color="black"
               style="width: 30%;height: 150%;font-size: 1.5vw;margin-top: 2%;background-color: rgb(255,211,14)">
          <span><b>Buy Now</b></span>
        </v-btn>
      </v-col>
    </v-row>
    <p style="margin-left: 2%;margin-top: 8%;color: whitesmoke;font-size: 2.5vw"><b>CHART FLOW</b></p>
    <v-row style="margin-top:1.5%;margin-left: 2%;margin-right: 2%">
      <v-col cols="12" style="padding-right: 0px;padding-left: 0px">
        <Panel title="Amusement Owner" imageSrc="ArcadeOwner.png"></Panel>
        <Panel title="Machine Owner" style="margin-top: 2%" imageSrc="MachineOwner.png"></Panel>
        <Panel title="Player" style="margin-top: 2%" imageSrc="Players.png"></Panel>
      </v-col>
    </v-row>
    <v-row style="margin-top:1.5%;" >
      <v-col cols="2"></v-col>
      <v-col cols="4" align="center">
        <div :style="imageHeightStyle1" style="margin-top: 10%">
          <img :src="tokenImg1" style="width: 100%;height: 100%">
        </div>
      </v-col>
      <v-col cols="4" align="center">
        <div :style="imageHeightStyle2">
          <img :src="tokenImg2" style="width: 100%;height: 100%">
        </div>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <v-row style="margin-top: 0px;padding-top: 0px">
      <v-col cols="2"></v-col>
      <v-col cols="4" style="align-items: center;padding-top: 0px">
        <DetailShowToken subTitle="MAU（Metapacity Amusument utility token)"
                         textBody="Tokens that allow you to purchase points to be used for games in Metapacity."
                         imageSrc="cornA.png"
                         paddingValue="15%"
        ></DetailShowToken>
      </v-col>
      <v-col cols="4" style="align-items: center;padding-top: 0px">
        <DetailShowToken subTitle="MAG(Metapacity Amusument Governance token)"
                         textBody="Tokens that allow you to purchase points to be used for Operations and Arcade and/or Game Machine Maintenance."
                         imageSrc="cornB.png"
                         paddingValue="15%"
        ></DetailShowToken>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <Foot style="margin-top: 2%"></Foot>
    <v-row style="margin-top: 2%">
      <v-col cols="4"></v-col>
      <v-col cols="2" align="center" style="margin-right: 0px">
        <p style="font-size: 1.8vw;color: whitesmoke"><b>-about</b></p>
      </v-col>
      <v-col cols="2" align="start" style="margin-left: 0px">
        <p style="font-size: 1.8vw;color: whitesmoke"><b>-whitepaper</b></p>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
    <v-row style="margin-top: 2%">
      <v-col cols="12" align="center">
        <p style="font-size: 2vw;color: whitesmoke"><b>copyright ©︎2022 METAPACITY , inc</b></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DetailsShow from './LongBodyUse/DetailShow';
import DetailShowToken from './LongBodyUse/DetailShowToken';
import DetailShowLong from './LongBodyUse/DetailShowLong';
import DetailShowLongSP from './LongBodyUse/DetailShowLongSP';
import Panel from './LongBodyUse/Panel';
import Foot from './LongBodyUse/Foot';


export default {
  name: "LongBody",
  components: {
    DetailsShow,
    DetailShowLong,
    DetailShowLongSP,
    Panel,
    Foot,
    DetailShowToken
  },
  data() {
    return {
      changeStyle: 'height: auto;',
      tokenImg1: require('@/assets/longBody/cornA.png'),
      tokenImg2: require('@/assets/longBody/cornB.png'),
    }
  },
  computed: {
    changeCardStyle() {
      // const heightNumber = 2100 / 929 * window.innerHeight;
      const paddingValue = window.innerHeight * 0.1;
      return 'height:' + 'auto;padding-bottom: ' + paddingValue + 'px;';
    },
    imageHeightStyle1() {
      const widthNumber = 400 / 1700*window.innerWidth;
      const heightNumber = widthNumber*238/299;
      return "height:"+heightNumber +"px; width: "+widthNumber+"px;";
    },
    imageHeightStyle2() {
      const widthNumber = 280 / 1700*window.innerWidth;
      const heightNumber = widthNumber*269/188;
      return "height:"+heightNumber +"px; width: "+widthNumber+"px;";
    },
  }
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
