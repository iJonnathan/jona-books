<template>
  <div class="uploadBooks">          
    <div class="container" style="width:90%">
      <div class="row">
        
        <!-- upload -->
        <div class="col s7">
        <!-- form -->
          <div class="container ">
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
                <a class="waves-effect waves-light btn-small" v-on:click="removeBook()" :disabled="!selectedBookUpload.file"><i class="material-icons">delete</i></a>
              </div>
              <!-- button upload books -->
              <div class="col s11 right-align" style="padding:7px">
                <a class="waves-effect waves-light btn-small" v-on:click="submitBooks()" :disabled="!AllInfoAreComplete()">Upload books</a>
              </div>
              <!-- input import books -->
              <div class="col s12 divImportbooks">
                <div v-if="listBooksToUpload.length == 0">
                  <div class="file-field input-field">
                      <input type="file" multiple name="books" @change="importBooks" accept=".pdf">
                      <div class="file-path-wrapper center-align" style="padding-top:15px;">
                        <label style="font-size:15px;" >Import Book</label>
                      </div>
                  </div>
                </div>
                <!-- list -->
                <div id="listt" v-if="listBooksToUpload.length > 0">
                  <div class="row">
                    <div class="col s12 m12 l12" :class="{'bookUploadSelected': selectedBookUpload!=null && book.name==selectedBookUpload.name }"   :key="index" v-for="(book, index) in listBooksToUpload" @click="chooseBook(book)">
                      <div class="col s1 m1 l1 " style="padding-top:7%">
                        <i v-if="completeEdit(book)" class="material-icons"  :style="'color:green'">check_circle_outline</i>
                        <i v-if="!completeEdit(book)" class="material-icons"  :style="'color:#F30202'">highlight_off</i>
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
                      <div class="col s9 m9 l9" style="padding-top:3%">
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
        <div class="col s5">      
          <ul class="collection ">
            <li class="collection-item avatar ">
              <img src="images/yuna.jpg" alt="" class="circle">
              <span class="title">Title</span>
              <p>First Line <br>
                Second Line
              </p>
              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle">folder</i>
              <span class="title">Title</span>
              <p>First Line <br>
                Second Line
              </p>
              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import axios from 'axios'
// const $ = require("jquery");
// Lo declaramos globalmente
// window.$ = $;
export default {
  
  name: 'UploadBooks',
  components: {
    Search
  },
  data () {
    return {
      selectedBookUpload: {
          name:'', author:'', category: '', file: null, cover: null, coverpath:''
      },
      listBooksToUpload: [],
      books: [],
      progress: 0,
      category: '',
      
    }
  },
  computed:{
    categories(){
      var data = {
            "Filosofía": null,
            "Astronomía": null,
            "Programación": null,
          }
      return data
    },
    authors(){
      var data = {
            "Eckart Tolle": null,
            "Platon": null,
            "Socrates": null,
          }
      return data
    }
  },

      
  methods: {
    loadCategoriesAndAuthors(){
      var thisComponent = this;
      var inputAuthor = document.getElementById("author");
      var inputCategory = document.getElementById("category");
      M.Autocomplete.init(inputAuthor, {
        data: this.authors, 
        onAutocomplete: function(res) {
          thisComponent.selectedBookUpload.author = res
        },  
      });
      M.Autocomplete.init(inputCategory, {
        data: this.categories, 
        onAutocomplete: function(res) {
          thisComponent.selectedBookUpload.category = res
        },  
      });
    },
    initComponet(){
      
    },
    AllInfoAreComplete(){
        var allComplete = true
        if(this.listBooksToUpload.length == 0) {
           allComplete = false;
        }
        this.listBooksToUpload.forEach(book => {
          if(!this.completeEdit(book)) {
            allComplete= false
          }
        });
        return allComplete
        
    },
    completeEdit(book){
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
      this.loadCategoriesAndAuthors()
      document.getElementById("name").focus();


      
    },
    chooseBook(book){
      const index = this.listBooksToUpload.indexOf(book);
      this.selectedBookUpload = this.listBooksToUpload[index]
    },
    importCover (event) {
      for (var [key, value] of Object.entries(event.target.files)) {
          this.selectedBookUpload.cover = value
          this.selectedBookUpload.covername = value.name
      }
      this.selectedBookUpload.coverpath = URL.createObjectURL(event.target.files[0]);
    },
    removeBook(){
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
      if(this.AllInfoAreComplete()){
        let formData = new FormData();
        for( var i = 0; i < this.listBooksToUpload.length; i++ ){
          //let book = this.listBooksToUpload[i].file;
          //let cover = this.listBooksToUpload[i].cover;
          //formData.append('books[' + i + ']', book);
          formData.append('name[' + i + ']', this.listBooksToUpload[i].name);
          formData.append('author[' + i + ']', this.listBooksToUpload[i].author);
          formData.append('category[' + i + ']', this.listBooksToUpload[i].category);
        }
        for( var i = 0; i < this.listBooksToUpload.length; i++ ){
          let book = this.listBooksToUpload[i].file;
          let cover = this.listBooksToUpload[i].cover;
          formData.append('books[' + i + ']', book);
          formData.append('covers[' + i + ']', cover);
        }
        
        //formData.append('booksInfo', this.listBooksToUpload);
  
  
        axios.post( 'http://localhost:3000/books',
          formData,{
            headers: { 'Content-Type': 'multipart/form-data' } 
          })
        .then(response => {
          console.log(response.data)
          //this.listBooksToUpload = []
          
        }).catch(errors => console.log(errors));
      }
      else{
        alert("existe información incompleta")
      }
    },
    getBooks(){
      axios.get( 'http://localhost:3000/books')
      .then(response => {
        console.log(response.data)
        
      }).catch(errors => console.log(errors));
    },
    getBooksNames(){
      axios.get( 'http://localhost:3000/books_names')
      .then(response => {
        console.log(response.data)
        
      }).catch(errors => console.log(errors));
    },
    selectCategory(event){
      this.selectedBookUpload.category = event.target.value;
    }
  }
}
</script>
<style scoped>

.divImportbooks{
  border: 1px dashed rgb(106, 123, 128) ;
  border-radius: 20px;
  min-height: 90px; 
  
  max-height: auto;
  background-color:transparent; 
  height: auto;   
  margin: 0% 15% 0% 15%;
}
.divImportcover{
  border: 1px dashed rgb(106, 123, 128) ;
  border-radius: 5px; 
  width: 100%;
  margin: 0;
  padding:0;
}
.bookUploadSelected{
  background-color: #765e8036;
}
.contentMiddle{
  display: flex;justify-content: center;align-items: center;
}

</style>
