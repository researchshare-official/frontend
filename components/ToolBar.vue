<template>
  <v-toolbar elevation="4" height="100px">
    <img
      src="../assets/Erudia_Logo.png"
      alt="logo"
      style="width: 80px; height: 80px"
    />
    <v-row style="margin-left: 2rem">
      <v-text-field
        hide-details
        single-line
        outlined
        label="search for an article"
        class="searchbar"
        style="color: #2951b8; margin-left: 20px"
      ></v-text-field>
    </v-row>
    <v-btn text class="buttondivs" style="margin-left: 60rem"> Review </v-btn>
    <v-btn text class="buttondivs"> Publish </v-btn>
    <v-btn text class="buttondivs"> Logout </v-btn>
    <img
      src="../assets/un_pelo.png"
      alt="logo"
      style="width: 60px; height: 60px"
    />
  </v-toolbar>
</template>

<script>
export default {
  name: 'ToolBar',
}
</script>

<style scoped>
.buttondivs {
  margin-left: 25px;
  color: blue;
  flood-color: red;
}

.searchbar {
  width: 10px;
  margin-left: 15px;
}
</style>
