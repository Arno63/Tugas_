<template>
    <v-sheet
        max-width="1220px"
        class="mx-auto mt-8"
        elevation="12"
        height="600"
        width="1220px"
        top="112px"
        left="95px"
      >
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-data-table :headers="header" :items="item">
              <!-- <template v-slot:[`item.actions`]="{ item }"></template> -->
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </template>
  
<script>
  export default{
    data:()=>({
      header: [
        {text:'Tanggal Sistem',value:'tanggal_sistem'},
        {text:'Tanggal Input',value:'tanggal_input'},
        {text:'Jam Input',value:'jam_input'},
        {text:'Laporan',value:'laporan'},
        // {text:'',value:'akse'},
      ],
      item:[
        
      ]
    }),
  }
</script>