<template>
  <div id="app">
    <h2>Lista de Estudiantes Vue.js</h2>
    <div class="contenedor">
    <form action="">
      <label for="">Nombre</label><br>
      <input v-model="estudiante.nombre" type="text"><br>
      <label for="">Apellido</label><br>
      <input v-model="estudiante.apellido" type="text"><br>
      <button @click.prevent="agregarEstudianteNuevo">Agregar</button>
    </form>
    
    <table class="tabla">
      <tr>
        <th>Nombre:</th>
        <th>Apellido:</th>
      </tr>
      <tr v-bind:key="estudiante.nombre" v-for="estudiante in estudiantes">
        <td>{{estudiante.nombre}}</td>
        <td>{{estudiante.apellido}}</td>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  name: "App",
  data() {
    return {
      estudiante: [{
        nombre: null,
        apellido: null
      }]
    }
  },
  computed: 
    mapState(['estudiantes']),
  
  methods: {
    ...mapMutations(["agregarEstudiante"]),
    agregarEstudianteNuevo(){
      this.agregarEstudiante(this.estudiante)
    }
  }
  };

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: black;
  margin-top: 3em;
}
label{
  margin: 0.5em;
  font-weight: bold;
}
form{
    margin: 2em;
  width: 40%;
}

button{
  padding: 0.4em;
  background-color:green;
  color: white;
  font-weight: bold;
  margin-top: 1.5em;
}
input{
  width: 70%;
}
.tabla{
  width: 50%;
  margin:2em;
}
th{
  border-bottom: solid 1px;
}
</style>
