<template>
  <div id="PdfViewer" style="margin:0px;padding:0px;overflow:hidden">
    <div v-if="pdfViewerComponentIsLoad">
      <iframe id="miframe" :src="bookFilePath" width="100%" :height="'100%'" type="application/pdf" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px">
    </iframe>

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
      i:0,

    };
  },
  watch:{
      pdfViewerComponentIsLoad:function(state) {
        if(state){
          // RECARGO LOS ELEMENTOS DEL SELECT
         
            // this.src =  pdf.createLoadingTask(this.bookFilePath);
            // this.src.promise.then(pdf => {
            //     this.numPages = pdf.numPages;
            // });
  //         let a = document.createElement("a");
  // a.href = this.bookFilePath;
  // a.download = "file.pdf";
  // document.body.appendChild(a);
  // console.log(".......... "+this.bookFilePath);
  // a.click();

  // var iFrame=document.getElementById("miframe").src = 'http://www.fao.org/3/i3388s/i3388s.pdf'
            
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
      pdfViewerComponentIsLoad: 'pdfViewerComponentIsLoad',
      heightScreen: 'heightScreen',
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