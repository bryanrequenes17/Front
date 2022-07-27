<template>
    <section>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="nombre" type="text" name="input-10-1" label="Nombre"></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="apellido" type="text" name="input-10-1" label="Apellido"></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="cedula" type="text" name="input-10-1" label="Cédula"></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="carrera" type="text" name="input-10-1" label="Carrera"></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="ciclo" type="text" name="input-10-1" label="Ciclo"></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="paralelo" type="text" name="input-10-1" label="Paralelo"></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="correo" type="text" name="input-10-1" label="Correo"></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="clave" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'" name="input-10-1" label="Contraseña"
                        @click:append="show1 = !show1"></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                    <v-btn x-large color="success" dark @click="registrar_usuario()">
                        Registrar
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import api from "../Recursos/api";
export default {
    name: "registro_vista",
    components: {

    },
    data: () => ({
        show1: false,
        nombre: "",
        apellido: "",
        cedula: "",
        carrera: "",
        ciclo: "",
        paralelo: "",
        correo: "",
        clave: "",

    }),
    methods: {
        async registrar_usuario() {
            try {
                var usuario = {
                    nombre: this.nombre,
                    apellido: this.apellido,
                    cedula: this.cedula,
                    carrera: this.carrera,
                    ciclo: this.ciclo,
                    paralelo: this.paralelo,
                    correo: this.correo,
                    clave: this.clave,
                }
                var response = await this.axios.post(api.registrar_usuario, usuario);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    },

};
</script>
