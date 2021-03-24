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
        <th>Nombre</th>
        <th>Apellido</th>
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
  
  color: #2c3e50;
  margin-top: 60px;

}
h2{
  padding: 2rem;
  text-align: center;
}
.contenedor {
  display: flex;
  justify-content: space-around;
}
form{
  text-align: start;
  width: 50%;
  margin: 0 2rem 0 2rem;
}
label{
  margin-bottom: 0;
}
button{
  margin-top: 1rem;
  background-color: rgb(21, 95, 3);
  color: white;
}
input{
  width: 80%;
}
.tabla{
  width: 50%;
  margin: 0 2rem 0 2rem;
  
}
th{
  border-bottom: solid 1px black;
}
</style>
