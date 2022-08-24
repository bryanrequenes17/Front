<template>
    <section>
        <center>
            <div>
                <h1>Laboratorios</h1>
            </div>
            <v-chip class="ma-2" color="indigo" text-color="white">
                <v-avatar left>
                    <v-icon>mdi-format-list-bulleted-square</v-icon>
                </v-avatar>
                Añadir Nuevo Grupo
            </v-chip>
            <v-chip class="ma-2" color="info" text-color="white" :to="{ name:'Grupo'}">
                <v-avatar left>
                    <v-icon>mdi-clipboard-text</v-icon>
                </v-avatar>
                Ver Todos los Grupos
            </v-chip>
        </center>

        <br>

        <center>

            <v-chip class="ma-2" color="success" text-color="white">
                <v-avatar left>
                    <v-icon>mdi-plus</v-icon>
                </v-avatar>
                Añadir Estudiantes
            </v-chip>
            <v-chip class="ma-2 " color="success" text-color="white">
                <v-avatar left>
                    <v-icon>mdi-plus</v-icon>
                </v-avatar>
                Añadir Docente
            </v-chip>
            <v-chip class="ma-2" color="warning" text-color="white" :to="{ name:'Grupo'}">
                <v-avatar left>
                    <v-icon> mdi-pencil</v-icon>
                </v-avatar>
                Editar Grupo
            </v-chip>
        </center>

        <br>

        <v-container class="pa-4 text-center">
            <v-row class="fill-height" align="center" justify="center">
                <template v-for="(item, i) in items">
                    <v-col :key="i" cols="12" md="4">
                        <v-hover v-slot="{ hover }">
                            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                                <v-img :src="item.img" height="225px">
                                    <v-card-title class="text-h6 black--text">
                                        <v-row class="fill-height flex-column" justify="space-between">
                                            <p class="mt-4 subheading text-left">
                                                {{ item.nombre }}
                                            </p>

                                            <div>
                                                <p class="ma-0 text-body-1 font-weight-bold font-italic text-left">
                                                    {{ item.text }}
                                                </p>
                                                <p class="text-caption font-weight-medium font-italic text-left">
                                                    {{ item.subtext }}
                                                </p>
                                            </div>

                                            <div class="align-self-center">
                                                <v-btn color="dark" text
                                                    :to="{ name:'Actividad'}">
                                                    Ir al Laboratorio
                                                </v-btn>
                                            </div>
                                        </v-row>
                                    </v-card-title>
                                </v-img>
                            </v-card>
                        </v-hover>
                    </v-col>
                </template>
            </v-row>
        </v-container>

    </section>
</template>

<script>
import api from "../../Recursos/api";
export default {
    name: "laboratorio_vista",
    components: {
    },
    data: () => ({
        items: [
            {
                nombre: 'Prediagnostico Melanoma',
                text: `Descripción`,
                subtext: 'En este laboratorio hace uso de la IA para dar un prediagnostico del cancer de piel de tipo Melanoma. ',
                img: "https://www.tekcrispy.com/wp-content/uploads/2022/05/encuesta-sobrediagnostico-melanoma-portada-scaled.jpg",
            }, 
            
        ],
        search: '',
        actividades: [],
    }),
    mounted() {
        this.listar_actividad();
    },
    methods: {
        async listar_actividad() {
            try {
                var response = await this.axios.post(api.listar_actividad, {});
                if (response.data.tipo == "success") {
                    this.actividades = response.data.data.actividades;
                    //console.log(this.actividades);
                }
            } catch (error) {
                this.$toast.open({
                    message: error.statusText,
                    type: "error",
                    duration: 5000,
                    position: "top-right",
                    pauseOnHover: true,
                });
            }

        },
    }
};
</script>
