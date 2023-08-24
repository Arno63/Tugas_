<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="10" sm="9">
        <v-card class="elevation-9 mt-15">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row cols="10" sm="5">
                <v-card-text class="mt-10">
                  <v-img class="mx-auto mb-10" max-width="228" src="../assets/Group 96.svg"></v-img>
                  
                  <v-row align="center" justify="center">
                    <v-col cols="12" sm="5">
                      <div class="text-subtitle-1 text-medium-emphasis">
                        Account
                      </div>

                      <v-text-field
                        density="compact"
                        placeholder="Email address"
                        prepend-inner-icon="mdi-email-outline"
                        variant="outlined"
                        v-model="email"
                        :rules="emailRules"
                        required
                      ></v-text-field>

                      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                        Password
                        
                      </div>

                      <v-text-field
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        density="compact"
                        placeholder="Enter your password"
                        prepend-icon="mdi-lock"
                        variant="outlined"
                        @click:append="handleclick"
                        v-model="password"
                        :rules="passwordRules"
                        required
                      >
                      </v-text-field>
                      

                      <v-row>
                        <v-col cols="12" sm="7">
                          <v-checkbox
                            label="Remember Me"
                            class="mt-n1"
                            color="blue"
                          ></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="5">
                          <a
                            class="text-caption text-decoration-none text-blue"
                            href="/forgotpassword"
                            rel="noopener noreferrer"
                          >
                            Forgot password?</a
                          >
                        </v-col>
                      </v-row>
                      <v-btn href="/dashboard" color="blue" dark block title>Login In</v-btn>
                      <br />
                      <v-card-text class="text-center">
                        <a
                          class="text-blue text-decoration-none"
                          href="/signup"
                          rel="noopener noreferrer">
                          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                        </a>
                      </v-card-text>
                      <div style="text-align: center; padding: 50px 0"></div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" sm="6" class="blue rounded-br-x1">
                  <div style="text-align: center; padding: 108px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Already Signed Up?</h3>
                      <h6 class="text-center">
                        Signin in to your account to continue login
                      </h6>
                    </v-card-text>
                    <div class="text-center"></div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

// Components

export default defineComponent({
  data: () => ({
    mounted() {
      axios.post('https://api-dpr.the-netwerk.com/login');
    },
    step: 1,
    showPassword: false,
    password: false,
    passwordRules: [
      v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',   
    ],
    email: '',
    emailRules: [
      v => v != '' || 'email is required'
    ]
  }),
  propos: {
    source: String,
  },
  methods: {
  handleclick() {
    this.showPassword = !this.showPassword
  },
  handlesubmit() {
    console.log(this.user)
    this.user = {
      email: '',
      password: ''
    }
  }
}
}


);
</script>
<style scoped>
.v-appication .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-appication .rounded-bl-xl {
  border-bottom-right-radius: 300px !important ;
}
</style>