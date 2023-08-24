<template>
  <div class="text-center">
    <v-row class="pa-4"> </v-row>
    <v-sheet
      :class="model"
      max-width="1220px"
      class="mx-auto mt-8"
      elevation="12"
      height="600"
      width="1220px"
      top="112px"
      left="95px"
    >
      
      <v-toolbar>
        <v-menu transition="slide-x-transition" > </v-menu>
        <v-img
          position="absolute;"
          max-width="228"
          src="../assets/Group 96.svg"
        >
        </v-img>
        <v-menu
        transition="scale-transition"
        origin="center center"
        class="d-flex flex-row-reverse ml-6 bg-surface-variant ml-12"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
          >
           <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            @click="() => {}"
          >
            <v-list-item-title>DPR</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="() => {}"
            href="/datalaporan"
          >
            <v-list-item-title>Laporan</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="() => {}"
            href="/"
          >
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
        
        
      </v-toolbar>
      <v-container>
        <div>
        <p class="text-justify font-weight-black text-h5 ml-6">
          Selamat Datang!
        </p>
        <div class="text-justify text-subtitle-1 font-italic ml-6">
          Silahkan isi Daily Progress Report anda.
        </div>
        <br />
        <div class="float-left text-subtitle-1 ml-6">Tanggal</div>
        <p class="float-left text-subtitle-1 ml-6">:</p>
      </div>
      <v-layout row wrap>
        <v-flex xs12 sm9 md4>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="390px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
      <br />
      <div>
        <div class="float-left text-subtitle-1 ml-6">Jam Input</div>

        <p class="float-left text-subtitle-1 ml-6">:</p>

        <v-col cols="2" sm="6" class="">
          <v-textarea
            auto-grow
            variant="outlined"
            rows="1"
            row-height="25"
          ></v-textarea>
        </v-col>
      </div>
      <div class="float-left text-subtitle-1 ml-6">List Tugas</div>
      <p class="float-left text-subtitle-1 ml-6">:</p>
      <v-col cols="3" sm="7">
        <v-textarea
          auto-grow
          variant="outlined"
          rows="1"
          row-height="25"
        ></v-textarea>
      </v-col>
      
        <div class="float-left text-subtitle-1 ml-6">Laporan </div>
      <p class="float-left text-subtitle-1 ml-6">:</p>
        <v-col cols="4" sm="9">
        <v-textarea
          auto-grow
          variant="outlined"
          rows="1"
          row-height="25"
        ></v-textarea>
      </v-col>
      </v-container>
      <template>
  <div class="d-flex justify-space-around">
    <v-btn
      color="grey"
      variant="plain"
      href="/datalaporan"
      
    >
      Submit
    </v-btn>

    <v-btn
      color="error"
      variant="plain"
    >
      Cancel
    </v-btn>
  </div>
</template>
    
      
      
      
      
    </v-sheet>
  </div>
</template>


<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
  }),
};
</script>

<style>
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #1f3c88;
  margin-top: 0px;
}
</style>