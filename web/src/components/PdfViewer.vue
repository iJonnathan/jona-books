<template>
  <div id="PdfViewer">
    <div v-if="pdfViewerComponentIsLoad">

      <p class="arrow">
        <!-- Anterior -->
        <span
          @click="changePdfPage(0)"
          class="currentPage"
          :class="{ grey: currentPage == 1 }"
          >Anterior&nbsp;&nbsp;</span
        >
        <span style="color: #8c8e92;">{{ currentPage }} / {{ pageCount }}</span>
        <!--  Página siguiente -->
        <span
          @click="changePdfPage(1)"
          class="currentPage"
          :class="{ grey: currentPage == pageCount }"
          >&nbsp;&nbsp;Página siguiente</span
        >&nbsp;&nbsp;&nbsp;&nbsp;<button @click="print()">Descargar abajo</button>

      </p>
      <pdf :id="i"
        ref="pdf"
        :src="bookFilePath"
        v-for="i in numPages"
        :key="i"
        :page="i"
        @num-pages="pageCount = $event"
        @page-loaded="currentPage = $event"
        @loaded="2">
      </pdf>

    </div>
    <div v-if="!pdfViewerComponentIsLoad">
      cargando ...
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
import { mapState } from "vuex";

export default {
  name: 'PdfViewer',
  components: {
    pdf
  },
  props: {
    idBook: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      currentPage: 0, // número de página del archivo pdf
      pageCount: 0, // Total de páginas del archivo pdf
      src: null,
      numPages:0,
      link:0,
      i:0
    };
  },
  watch:{
      pdfViewerComponentIsLoad:function(state) {
        if(state){
          // RECARGO LOS ELEMENTOS DEL SELECT
         
            this.src =  pdf.createLoadingTask(this.bookFilePath);
            this.src.promise.then(pdf => {
                this.numPages = pdf.numPages;
            });
          
        }
      },
      idBook:function(value){
        alert(value)
        if(value != ''){
          }
      }
  },
  mounted() {
    var thisComponetn = this;
      this.$store.commit('getBookFile',this.idBook);
  },
  computed:{
    ...mapState({
      bookFilePath: 'bookFilePath',
      pdfViewerComponentIsLoad: 'pdfViewerComponentIsLoad'
    })
  },
  methods: {
    // Cambie el número de página PDF, se pasa val para distinguir el valor de la página anterior, la página siguiente, 0 página anterior, 1 página siguiente
    changePdfPage(val) {
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--;
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
    // cuando se carga el pdf
    loadPdfHandler() {
      this.currentPage = 2; // Cargue la primera página al cargar
    },
    handleOpen() {
      this.pdfDialog = true;
    },
    // Cierra la caja de viñetas
    print() {
      document.getElementById("2").focus();
    }
  }
  
}
</script>


<style lang="css" scoped>
  .currentPage {
    cursor: pointer;
    color: #8c8e92;
}

.currentPage:hover {
    color: #2761ff;
}
.arrow{
    position: fixed;
    top: 0px;
    left :0px;
    z-index: 2;
    width: 100%;
    background-color: #191919;
    padding: 12px 0;
    margin: 0;
    text-align :center;
}

</style>