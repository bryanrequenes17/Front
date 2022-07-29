<template>
    <section>
        <v-row>
            <v-col v-for="item, i in actividades" :key="i">
                <v-card class="mx-auto" max-width="400">
                    <v-img class="white--text align-end" height="200px"
                        src="https://www.tekcrispy.com/wp-content/uploads/2022/05/encuesta-sobrediagnostico-melanoma-portada-scaled.jpg">
                        <v-chip class="ma-2" label>
                            <v-card-title style="color: #000 !important;"> {{ item.nombre }}</v-card-title>
                        </v-chip>
                    </v-img>
                    <v-card-subtitle class="pb-0">
                        Descripción
                    </v-card-subtitle>
                    <v-card-text class="text--primary text-keft">
                        <div>{{ item.descripcion }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="orange" text :to="{ name: item.nombre ,params: {id: item.id , intento:item.intento }}">
                            Ver actividad
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import api from "../../Recursos/api";
export default {
    name: "inicio_vista",
    components: {
    },
    data: () => ({
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
                    var data = response.data.data.actividades;
                    data.forEach(e => {
                        if (e.estado) {
                            this.actividades.push(e)
                        }
                    });
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
