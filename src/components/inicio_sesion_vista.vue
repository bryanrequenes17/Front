<template>
    <section>
        <v-container style="max-width:500px;">
        <br>
            <v-row>
                <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="correo" type="text" name="input-10-1" label="Correo"></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="clave" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'" name="input-10-1" label="Contraseña"
                        @click:append="show1 = !show1"></v-text-field>
                </v-col>
                <v-col md="12">
                    <v-btn x-large color="success" dark :to="{ name: 'Inicio' }">
                        Acceder
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>

export default {
    name: "inicio_sesion_vista",
    components: {

    },
    data: () => ({
        show1: false,
        clave: "",
        correo: "",

    }),
    methods: {},

};
</script>
