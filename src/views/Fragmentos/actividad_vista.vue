<template>
  <section>
    <div>
      <center>
      <h1 >Actividades</h1>
    </center>
    </div>
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
    <v-row>
      <v-col v-for="item, i in actividades" :key="i">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px"
            src="https://www.tekcrispy.com/wp-content/uploads/2022/05/encuesta-sobrediagnostico-melanoma-portada-scaled.jpg">
            <v-chip  class="ma-2" label>
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
            <v-btn color="orange" text :to="{ name: item.nombre, params: { id: item.id, intento: item.intento } }">
              Ver actividad
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <br>
    <v-card>
      <v-card-title>
        Actividades
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="actividades" :search="search"></v-data-table>
    </v-card>
  </section>
</template>

<script>
import api from "../../Recursos/api";
export default {
  name: "actividad_vista",
  components: {
  },
  data: () => ({
    search: '',
    headers: [
      {
        text: 'Nombre',
        align: 'start',
        sortable: false,
        value: 'nombre',
      },
      { text: 'Descripción', value: 'descripcion' },
      { text: 'Intentos', value: 'intento' },
      { text: 'Estado', value: 'estado' },
      { text: 'Actividad', value: 'actividad' },
    ],
    desserts: [],
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
