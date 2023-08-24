<template>
    <div class="text-center">
      <v-row class="pa-4"> </v-row>
  
      <br />
      <v-sheet
        :rounded="rounded"
        max-width="1220px"
        class="mx-auto mt-8"
        elevation="12"
        height="400"
        width="1120px"
        max-height="600"
      >
        <br />
        <div font-style="normal" font-family="Montserrat">Forgot Password</div>
        <v-sheet width="600" class="mx-auto mt-14" max-width="1110px">
          <v-form @submit.prevent>
            <v-text-field
              v-model="Email"
              :rules="rules"
              label= "New Password"
            ></v-text-field>
            <v-text-field
              v-model="Email"
              :rules="rules"
              label="Confirm Password"
            ></v-text-field>
            <v-btn type="submit" color="blue" block class="mt-4" href="/reset">Reset</v-btn>
          </v-form>
        </v-sheet>
      </v-sheet>
  
      <div class="py-3"></div>
    </div>
  </template>
    
    <script>
  export default {
    data: () => ({
      firstName: "",
      rules: [
        (value) => {
          if (value) return true;
          
          return "You must enter a password.";
        },
      ],
    }),
  };
  </script>
  <style scoped>
  #app{
    font-size: 40px;
  }
  </style>