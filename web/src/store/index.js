import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Admin from '@/views/Admin.vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentComponet:Admin,

    listBooks: [],
    keysBooks: [],
    listCategories: [],
    listAuthors: [],
    uploadComponetIsLoad: false,
    bookFilePath: null,
    pdfViewerComponentIsLoad: false,
    widthScreen: 0,
    widthBook:'',
    heightBook:''

    
  },
  mutations: {
    setCurrentComponent(state, component){
      state.currentComponet = component
    },
    // REDIMENCIONAL EL TAMAÑO DE LOS LIBROS
    setWidthScreen(state,value){
      state.widthScreen = value;
      let x = parseFloat(value)/18.8
      let y = parseFloat(value)/12.8
      if(x < 70 || y < 90){
        state.widthBook = '70'
        state.heightBook = '90'
      }
      else if(x > 105 || y > 150){
        state.widthBook = '105'
        state.heightBook = '150'
      }
      else{
        state.widthBook= String(x);
        state.heightBook=  String(y);
      }
    },
    add(state, val){
      state.listAuthors.push(val)
    },
    getBookFile (state, id) {
      console.log("entrando")
      state.pdfViewerComponentIsLoad= false
      
      let options = {
        responseType: 'blob',
        params: { id: id },
        headers: {'Content-Type': 'application/pdf'}
      }
      //axios.get( 'http://localhost:3000/book',options)
      axios.get( window.serverUrl+'/book',options)
      .then(response => {
        console.log(response.data);
        state.bookFilePath = window.URL.createObjectURL(new Blob([response.data]));
        state.pdfViewerComponentIsLoad = true
  //       const link = document.createElement('a');
  // link.href = state.bookFilePath;
  // link.setAttribute('download', 'file.pdf');
  // document.body.appendChild(link);
  // link.click();
  
      //     const url = window.URL.createObjectURL(new Blob([response.data]));
      // const link = document.createElement('a');
      // link.href = url;
      // link.setAttribute('download', 'file.pdf'); //or any other extension
      // document.body.appendChild(link);
      // link.click();
          
      }).catch(errors => console.log(errors));
    },
    getBooksInfo(state){
      state.uploadComponetIsLoad = false;
      console.log(window.serverUrl+'/coverbook')
      //axios.get( 'http://localhost:3000/books')
      axios.get(  window.serverUrl+'/books')
      .then( async response => {
        //state.listBooks = response.data;

        // verifico si necesito agregar libros
        var responseKeys = Object.keys(response.data)
        responseKeys.forEach(key => {
          if(!state.keysBooks.includes(key)){
            state.listBooks.push(response.data[key])
            state.keysBooks.push(key)
          }
        });
        // verifico si necesito eliminar libros
        state.keysBooks.forEach(key => {
          if(!responseKeys.includes(key)){
            var index = state.keysBooks.indexOf(key)
            state.keysBooks.splice(index, 1);
            state.listBooks.splice(index, 1)
          }
        });

        await state.listBooks.forEach(book => {
          let optionsGetCover = {
            responseType: 'blob',
            params: { id: book.id },
            headers: {'Content-Type': 'image/png'}
          }
          // filtro las categorias y autores
          if (!state.listCategories.includes(book.category)) state.listCategories.push(book.category)
          if (!state.listAuthors.includes(book.author)) state.listAuthors.push(book.author)
          // get covers
          // axios.get( 'http://localhost:3000/coverbook',optionsGetCover)
          axios.get(  window.serverUrl+'/coverbook',optionsGetCover)
          .then(res => {
            book.coverpath = window.URL.createObjectURL(new Blob([res.data]));
          }).catch(errors => console.log(errors));
        });
        state.uploadComponetIsLoad = true
      }).catch(errors => console.log(errors));
    },
  },
  actions: {
  },
  modules: {
  }
})
