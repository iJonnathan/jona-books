<template>
  <div class="bookshelft center-align" style="background-color:#e4e4e4;" >
    <!-- <div class="container background">
style="width: 100%; max-width:initial; margin:0;height:100%"
    </div> -->
      <div class="container center-align " style="padding:1%">
        <div class="row">
          <div class="col s4 m4 l3 xl3  item "   :key="book.id" v-for="book in listBooks">
            <Book  :coverpath="book.coverpath" :widthBook="'90'" :heightBook="'130'" />
            
          </div>
          
          
        </div>
      </div>
  </div>
</template>

<script>
import Book from '@/components/Book.vue';
import { mapState } from "vuex";

export default {
  name: 'Bookshelft',
  components: {
    Book
  },
  computed:{
    ...mapState({
      listBooks: 'listBooks',
      listCategories: 'listCategories',
      listAuthors: 'listAuthors',
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.item{
  background-image: url("../assets/baseBook.png");
  background-repeat: no-repeat;

  background-position: center;
  background-size:200px;
  height:220px;
  /* display: flex;justify-content: center; align-items: center; */
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  text-align:center;
  /* border-style: dotted; */
  padding-top:100px;
}


</style>
