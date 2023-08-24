<template>
    <v-row class="mb-1 mt-5">
        <v-btn color="primary" dark @click.prevent="tambahUser">
            Tambah Data
        </v-btn>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-form ref="form">
                    <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-alert prominent type="error" v-if="this.errorMessage != ''">
                                <v-row align="center">
                                    <v-col class="grow">{{ this.errorMessage }}</v-col>
                                </v-row>
                            </v-alert>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Nama Lengkap*" v-model="formData.name" :rules="inputRules">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Username*" v-model="formData.username" :rules="inputRules">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-if="formData.id == ''" label="Password*" type="password"
                                        v-model="formData.password" :rules="inputRules">
                                    </v-text-field>
                                    <v-text-field v-else label="Password*" type="password"
                                        v-model="formData.password">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Alamat*" v-model="formData.address" :rules="inputRules">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="No. Telp*" v-model="formData.phone" :rules="inputRules">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="dialog = false">
                            Batal
                        </v-btn>
                        <v-btn v-if="formData.id == ''" color="primary" @click.prevent="addUser">
                            Simpan
                        </v-btn>
                        <v-btn v-else color="primary" @click.prevent="updateUser(formData.id)">
                            Update
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            formTitle: 'Tambah User',
            errorMessage: '',
            formData: {
                id: '',
                name: '',
                username: '',
                password: '',
                address: '',
                phone: ''
            },
//untuk validasi
            inputRules: [
                v => v && v.length > 0 || 'Field harus diisi'
            ]
        }
    },
}
</script>

<style>

</style>