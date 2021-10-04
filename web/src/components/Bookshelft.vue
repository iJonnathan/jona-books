<template>
  <div :key="$route.fullPath" class="bookshelft center-align" style="background-color:#e4e4e4;" >

    <div class="navbar-fixed">
      <nav class="header-bookshlft">
        <div class="nav-wrapper">
          <ul class="left">
            <li><a><i class="hamburger material-icons hide-on-med-and-up">menu</i></a></li>
          </ul>
          <form action="" method="post">
              <div class="input-field">
                  <input autocomplete="off" v-model="search" style="background-color:#f4f4f4" id="search" type="search" name="search"   placeholder="Buscar ...">
                  <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                  <i class="material-icons" v-on:click="search=''">close</i>
              </div>
          </form>
          <ul id="nav-mobile" class="right hide-on-med-and-down" style="padding:6px 30px 0 0 ">
            <li>
              <select id="selectFilter" class="selectFilter" v-model="selectedFilter">
                <option value="all" selected>All</option>
                <option value="authors">Autores</option>
                <option value="categories">Categorias</option>
              </select>
            </li>
          </ul>
      </div>
      </nav>
    </div>
    <div class="container center-align container-bookshelft">
      <div class="row" >
        <div v-on:click="openBook(book)" :style="cssVars" class="col s4 m3 l3 xl3  item "   :key="book.id" v-for="book in filterListBooks">
          <Book :coverpath="book.coverpath" :widthBook="widthBook" :heightBook="heightBook"  />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Book from '@/components/Book.vue';
import { mapState } from "vuex";
import PdfViewer from "@/components/PdfViewer.vue";

export default {
  name: 'Bookshelft',
  components: {
    Book, PdfViewer
  },
  data () {
    return {
      search:'',
      selectedFilter:'1',
    }
  },
  beforeCreate(){
    this.$store.commit('getBooksInfo');
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
    
  },
  mounted(){
    // Calculate width and height of screen container
    window.addEventListener("resize", () => {
      this.$store.commit('setWidthScreen',document.querySelector('.app').offsetWidth);
    });
  },
  computed:{
    ...mapState({
      listBooks: 'listBooks',
      listCategories: 'listCategories',
      listAuthors: 'listAuthors',
      widthScreen: 'widthScreen',
      widthBook: 'widthBook',
      heightBook: 'heightBook',

      filterListBooks(){
        var collator = new Intl.Collator('es');
        var filtered = this.listBooks.filter((book) => {
          
        if(book.name.toLowerCase().match(this.search.toLowerCase()) 
          || book.category.toLowerCase().match(this.search.toLowerCase())
          || book.author.toLowerCase().match(this.search.toLowerCase())){
            return book;
        }
        }).sort(function(a,b){return collator.compare(a.name, b.name)})
        return filtered;
      },

      cssVars() {
        var peso = 0;
        if(this.widthScreen > 1000) peso = 100;
        else if(this.widthScreen > 600 && this.widthScreen <= 1000) peso = 70;
        else if(this.widthScreen > 400 && this.widthScreen <= 600) peso = 50;
        else if(this.widthScreen > 200 && this.widthScreen <= 400) peso = 40;
        return {

          '--width': String(parseInt(this.widthBook)+peso) + 'px',
          '--height': String(parseInt(this.heightBook)+peso) + 'px'
        }
      }
    }),
  },
  methods:{
    openBook(book){
      // this.$store.commit('setCurrentComponent',PdfViewer);
      this.$router.push({name:'PdfViewer', params:{idBook:book.id}});
      // this.$router.push("/book/" + book.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.header-bookshlft{
  background-color: #e4e4e4;
  box-shadow: none!important;
  border-bottom: 0.5px outset;
  height:65px;
  text-align: center;
  color:#3a3a3a;
  margin-left:-10px
}

nav .right{
    position: absolute;
    top: 0px;
    right: 0px;
}
.nav-wrapper form{
    margin: auto;
    width: 40%;
}
.nav-wrapper .input-field{
    padding-top: 7px;
}
.nav-wrapper form #search{
    height: 50px;
}

  /* ITEM */
.container-bookshelft{
  // background: linear-gradient(45deg,#b3b4b4 40%,#d1d9fc 100%);  
  background-image: url("../assets/background-bookshelft.png");

  min-height: calc(100vh - 85px) !important;
    padding:0% 2% 0% 2%;
    

}

.full {
  width: 100%;
  height: auto;
}
.item{
  background-image: url("../assets/baseBook.png");
  background-repeat: no-repeat;

  background-position: center;
  background-size:var(--width);;
  height:var(--height);
  display: flex;justify-content: center; align-items: center;
  background-color: linear-gradient(#4c4c50, #f3f4f5af);   

  // display: flex;
  // flex-wrap: wrap;
  // align-content: center;
  // justify-content: center;
  // text-align:center;
  // padding-bottom:5%;
  // border-bottom: 0.5px outset;
  // background-color: aquamarine;
  // -webkit-box-shadow: 0px 10px 10px -10px #777;

}

// @media screen and (max-width: 1310px) {
//   .item{
//     height:120px;
//   }
// }
.item:hover{
  cursor:pointer
}
@media screen and (max-width: 600px) {
  .container-bookshelft{
    width: 100%; max-width:initial; margin:0;
  }

}



</style>
