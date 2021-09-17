<template>
  <div class="uploadBooks center-align">  
    <div class="container" style="width: 100%; max-width:initial; margin:0">
      <div class="row">
        
        <!-- upload -->
        <div class="col s6">
        <!-- form -->
          <div class="container" style="width:80%">
            <div class="row">
              <div class="input-field col s12 m12">
                  <input autocomplete="off"  id="name" v-model="selectedBookUpload.name" type="text">
                  <label class="active" for="name"> Nombre del libro</label>
              </div>
              <div class="input-field col s12 m12">
                  <input autocomplete="off" id="author" v-model="selectedBookUpload.author" type="text" :disabled="!selectedBookUpload.file">
                  <label class="active" for="author"> Autor</label>
              </div>
              <div class="input-field col s12 m12">
                  <input autocomplete="off" id="category"  v-model="selectedBookUpload.category" type="text" :disabled="!selectedBookUpload.file">
                  <label class="active" for="cactegory"> Categoría</label>
              </div>

              <!-- delete button -->
              <div class="col s1 left-align" style="padding:7px">
                <a class="waves-effect waves-light btn-small" v-on:click="removeUploadBook()" :disabled="!selectedBookUpload.file"><i class="material-icons">delete</i></a>
              </div>
              <!-- button upload books -->
              <div class="col s11 right-align" style="padding:7px">
                <a class="waves-effect waves-light btn-small" v-on:click="submitBooks()" :disabled="!allInfoToUploadAreComplete()">Subir Libros</a>
              </div>
              <!-- input import books -->
              <div class="col s12 divImportbooks">
                <div v-if="listBooksToUpload.length == 0">
                  <div class="file-field input-field">
                      <input type="file" multiple name="books" @change="importBooks" accept=".pdf">
                      <div class="file-path-wrapper center-align" style="padding-top:15px;">
                        <label style="font-size:15px;" >Importar Libros</label>
                      </div>
                  </div>
                </div>
                <!-- list -->
                <div id="listt" v-if="listBooksToUpload.length > 0">
                  <div class="row">
                    <div class="col s12 m12 l12" :class="{'bookSelected': book.name==selectedBookUpload.name }"   :key="index" v-for="(book, index) in listBooksToUpload" @click="chooseBookUpload(book)">
                      <div class="col s1 m1 l1 " style="padding-top:30px">
                        <i v-if="isCompleteToUploadBook(book)" class="material-icons"  :style="'color:green'">check_circle_outline</i>
                        <i v-if="!isCompleteToUploadBook(book)" class="material-icons"  :style="'color:#F30202'">highlight_off</i>
                      </div>
                      <div class="col s2 m2 l2 ">
                        <div class="file-field input-field left-align" >
                            <input type="file" name="covers" @change="importCover" accept="image/*">
                            <div class="file-path-wrapper divImportcover" :id="'div'+book.name">
                              <!-- <img v-if="!book.cover" style="margin-left: -5px"  src="../assets/NoCover.png"  width="45" height="58" > -->
                              <!-- <img v-if="!book.cover" style="margin-left: -5px"  src="../assets/NoCover.png" width="45" height="58" > -->
                              <img v-if="book.coverpath==''" style="margin-left: -9px;margin-bottom:-6px"  src="../assets/NoCover.png"   width="49" height="65" >
                              <img v-if="book.coverpath!=''" style="margin-left: -9px;margin-bottom:-6px"  :src="book.coverpath"  :id="'cover'+book.name"   width="49" height="65" >
                            </div>
                        </div>
                      </div>
                      <div class="col s9 m9 l9" style="padding-top:2%">
                        <div><span class="title"><label style="font-size:14px; word-break: break-all;" ><b>{{book.name}}</b></label></span></div>
                        <div><span class="title"><label style="font-size:14px; word-break: break-all;" >{{book.author}}</label></span></div>
                        <div><span class="title"><label style="font-size:14px; word-break: break-all;" >{{book.category}}</label></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- listbooks -->
        <div class="col s6 " >
          <div class="container" style="width:80%">
            <div class="row">

              <div class="input-field col s5">
                <select id="selectCategories" v-model="selectedCategory">
                  <option value="" selected>All</option>
                  <option :key="category" v-for="category in listCategories" :value="category">{{category}}</option>
                </select>
                <label>Categorías</label>
              </div>
              <div class="input-field col s7">
                <select id="selectAuthors" v-model="selectedAuthor">
                  <option value="" selected>All</option>
                  <option :key="author" v-for="author in listAuthors" :value="author">{{author}}</option>
                </select>
                <label>Autores</label>
              </div>
              <div class="input-field col s12" >
                <input placeholder="Buscar ..." id="search" type="text" v-model="search">
              </div>
              <div class="input-field col s11 divListBooks" style="height:auto;overflow-x: hidden;overflow-y: scroll;max-height:600px">
                <div style="margin:0;padding:1%; border-bottom: 1px dotted gray;"  class="col s12 m12 l12" :class="{'bookSelected': book.id==selectedBook.id }"   :key="book.id" v-for="book in filterBooks" @click="chooseBook(book)">
                  <!-- <li class=" collection-item avatar "  :class="{'bookSelectedd': book.name==selectedBook.name }" :key="book.name" v-for="book in filterBooks" @click="chooseBook(book)" > -->
                    <!-- <img :src="book.coverpath" alt="" class="circle"> -->
                    <div class="col s1 m1 l1 " >
                      <Book :coverpath="book.coverpath" :widthBook="'42'" :heightBook="'67'" />
                    </div>
                    <div class="col s11 m11 l11" >
                      <div><span class="title"><label style="font-size:14px; word-break: break-all;" ><b>{{book.name}}</b></label></span></div>
                      <div><span class="title"><label style="font-size:14px; word-break: break-all;" >{{book.author}}</label></span></div>
                      <div><span class="title"><label style="font-size:14px; word-break: break-all;" >{{book.category}}</label></span></div>
                    </div>
                </div>
              </div>
              <div class="col s1" >
                <div style="padding-top:30% blue">
                  <a class="waves-effect waves-light btn-small  modal-trigger" href="#modalRemove"  :disabled="selectedBook.name==''"><i class="material-icons">delete</i></a>
                </div>
                <!-- MODAL TO REMOVE BOOK -->
                <!-- <div  class="modal" style="width:50%; height:50%"> -->
                <div id="modalRemove" class="modal " style=" height:340px;width:50%">
                  <div class="modal-content grey lighten-2">
                    <h4>¿Estás seguro de eliminar este libro?</h4>
                    <hr><br>
                    <div class="container" style="width: 100%; max-width:initial; margin:0">
                      <div class="row">
                        <div class="col s3 m3 l3 blue" style="padding-left:15%" >
                          <Book :coverpath="selectedBook.coverpath" :widthBook="'82'" :heightBook="'134'" />
                        </div>
                        <div class="col s9 m9 l9" >
                          <h6><b>{{selectedBook.name}}</b></h6>
                          <h6>{{selectedBook.author}}</h6>
                          <h6>{{selectedBook.category}}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <a class="waves-effect waves-green btn-flat" v-on:click="removeBook()">Pues si</a>
                  </div>
                </div>        
                <!-- <div style="padding-top:10%">
                  <a id="btnEdit" class="waves-effect waves-light btn-small" v-on:click="editBook()" :disabled="selectedBook.name==''"><i class="material-icons">edit</i></a>
                </div> -->
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import axios from 'axios'

import { mapState } from "vuex";
import Book from '@/components/Book.vue'

const $ = require("jquery");
// Lo declaramos globalmente
window.$ = $;
export default {
  
  name: 'UploadBooks',
  components: {
    Search, Book
  },
  data () {
    return {
      listBooksToUpload: [],
      selectedBookUpload: {
          name:'', author:'', category: '', file: null, cover: null, coverpath:''
      },
      search:'',
      selectedBook: {
        id:'', name:'', author:'', category: '', file: null, cover: null, coverpath:''
      },
      selectedCategory: '',
      selectedAuthor:''
      
    }
  },
  watch:{
      uploadComponetIsLoad:function(state) {
        if(state){
          // RECARGO LOS ELEMENTOS DEL SELECT
          var elems = document.querySelectorAll('select');
          M.FormSelect.init(elems);
          // 
          this.loadAutocompleteCategoriesAndAuthors();
          //
          this.selectedBookUpload = {
              name:'', author:'', category: '', file: null, cover: null, coverpath:''
          };
          this.selectedBook = {
            id:'', name:'', author:'', category: '', file: null, cover: null, coverpath:''
          }
          
        }
      },
  },
  beforeCreate(){
    this.$store.commit('getBooksInfo');
  },
  mounted(){

          // INICIO EL MODAL PARA ELEIMINAR LIBRO
          M.Modal.init(document.querySelectorAll('#modalRemove'));
  },

  computed:{
    ...mapState({
      listBooks: 'listBooks',
      listCategories: 'listCategories',
      listAuthors: 'listAuthors',
      uploadComponetIsLoad:'uploadComponetIsLoad'
    }),

    filterBooks: function(){
      var collator = new Intl.Collator('es');
      var filtered = this.listBooks.filter((book) => {
        if( (this.selectedCategory == '' && this.selectedAuthor == '') ||
            (this.selectedCategory == '' && this.selectedAuthor != '' && book.author == this.selectedAuthor) ||
            (this.selectedCategory != '' && this.selectedAuthor == '' && book.category == this.selectedCategory) ||
            (this.selectedCategory != '' && this.selectedAuthor != '' && book.category == this.selectedCategory && book.author == this.selectedAuthor)){
              if(book.name.toLowerCase().match(this.search.toLowerCase()) 
              || book.category.toLowerCase().match(this.search.toLowerCase())
              || book.author.toLowerCase().match(this.search.toLowerCase())){
                   return book;
              }
        }
      }).sort(function(a,b){return collator.compare(a.name, b.name)})
      return filtered;
    },
  },

      
  methods: {
    loadAutocompleteCategoriesAndAuthors(){
      var thisComponent = this
      var categoriesAutocomplete = {}
      var authorsAutocomplete = {}
      // AGREGO LAS CATEGORIAS A LOS RESPECTIVOS COMPONENTES
      this.listCategories.forEach(category => {
        categoriesAutocomplete[category] = null
      });
      M.Autocomplete.init(document.getElementById("category"), {
        data: categoriesAutocomplete, 
        onAutocomplete: function(res) {
          thisComponent.selectedBookUpload.category = res
        },  
      });
      // AGREGO LOS AUTORES A LOS RESPECTIVOS COMPONENTES
      this.listAuthors.forEach(author => {
        authorsAutocomplete[author] = null
      });
      M.Autocomplete.init(document.getElementById("author"), {
        data: authorsAutocomplete, 
        onAutocomplete: function(res) {
          thisComponent.selectedBookUpload.author = res
        },  
      });
      
    },
    allInfoToUploadAreComplete(){
        var allComplete = true
        if(this.listBooksToUpload.length == 0) {
           allComplete = false;
        }
        this.listBooksToUpload.forEach(book => {
          if(!this.isCompleteToUploadBook(book)) {
            allComplete= false
          }
        });
        return allComplete
        
    },
    isCompleteToUploadBook(book){
      if(book.name!='' && book.cover && book.file && book.author!='' && book.category!='' && book.coverpath!=''){
        return true
      }else {
        return false
      }
    },
    importBooks (event) {
      for (var [key, value] of Object.entries(event.target.files)) {
        this.listBooksToUpload.push({
          name: value.name, category:'', author:'', file: value, cover:null, coverpath:''
        })
      }
      this.selectedBookUpload = this.listBooksToUpload[0];
      document.getElementById("name").focus();
    },
    importCover(event) {
      for (var [key, value] of Object.entries(event.target.files)) {
          this.selectedBookUpload.cover = value
          this.selectedBookUpload.covername = value.name
      }
      this.selectedBookUpload.coverpath = URL.createObjectURL(event.target.files[0]);
    },
    chooseBookUpload(book){
      const index = this.listBooksToUpload.indexOf(book);
      this.selectedBookUpload = this.listBooksToUpload[index]
    },
    removeUploadBook(){
      const index = this.listBooksToUpload.indexOf(this.selectedBookUpload);
      this.listBooksToUpload.splice(index,1);
      if(this.listBooksToUpload.length>0) {
        this.selectedBookUpload = this.listBooksToUpload[0]
      }
      else {
        this.selectedBookUpload ={
          name:'', author:'', category: '', file: null, cover: null, coverpath:''
        }
      }
    },
    submitBooks(){
      if(this.allInfoToUploadAreComplete()){
        let formData = new FormData();
        for( var i = 0; i < this.listBooksToUpload.length; i++ ){
          formData.append('name[' + i + ']', this.listBooksToUpload[i].name);
          formData.append('author[' + i + ']', this.listBooksToUpload[i].author);
          formData.append('category[' + i + ']', this.listBooksToUpload[i].category);
          formData.append('books[' + i + ']', this.listBooksToUpload[i].file);
          formData.append('covers[' + i + ']', this.listBooksToUpload[i].cover);
        }
        axios.post( 'http://localhost:3000/books',
          formData,{
            headers: { 'Content-Type': 'multipart/form-data' } 
          })
        .then(response => {
          console.log(response.data)
          this.$store.commit('getBooksInfo');
          this.listBooksToUpload = []
          
        }).catch(errors => console.log(errors));
      }
      else{
        alert("existe información incompleta")
      }
    },
    chooseBook(book){

      this.selectedBook = book
    },
    removeBook(){
      axios.delete( 'http://localhost:3000/book',{params: { id: this.selectedBook.id }}).then(response => {
        //book.coverpath = window.URL.createObjectURL(new Blob([res.data]));
        console.log(response.data)
        var elem = document.getElementById("modalRemove");
        var instance = M.Modal.getInstance(elem);
        instance.close();
        this.$store.commit('getBooksInfo');


      }).catch(errors => console.log(errors));
    },
    editBook(){
     //this.initComponet()
     this.listBooks.push(this.listBooks[0])
     
    }
  }
}
</script>
<style lang="scss" >


.divImportbooks{
  border: 1px dashed rgb(106, 123, 128) ;
  border-radius: 20px;
  min-height: 90px; 
  
  max-height: auto;
  background-color:transparent; 
  height: auto;   
  margin: 0% 15% 0% 15%;
}
.divListBooks{
  border: 1px dashed rgb(106, 123, 128) ;
  border-radius: 20px;
  min-height: 90px; 
  
}
.divImportcover{
  border: 1px dashed rgb(106, 123, 128) ;
  border-radius: 5px; 
  width: 53px;
  margin: 0;
  padding:0;
}
.bookSelected{
  background-color: #765e8036;
}
.bookSelectedd{
  background-color: #765e8036;
}
.contentMiddle{
  display: flex;justify-content: center;align-items: center;
}


</style>
