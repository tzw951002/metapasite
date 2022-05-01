<template>

  <v-container class="header"  fluid>
    <v-row>
      <v-col cols="2" class="ma-lg-0">
        <v-img src="../assets/header/logo.png" height="200px" width="500px" contain></v-img>
      </v-col>
    </v-row>
    <v-row style="margin-top: 400px">
      <v-col cols="12" align="center">
        <span class="titleFont">Play and earn online</span><br>
        <span class="titleFont">Make money playing your favourite Mobile games,</span><br>
        <span class="titleFont">Craft NFT Arcade Machines & Manage NFT Game Centers.</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header {
  background: url('../assets/header/background.png') no-repeat !important;
  background-size: 100% 100% !important;
  height: 800px;
}
.titleFont {
  font-size: 32px;
  font-weight: bold;
  color: whitesmoke;
}

</style>
