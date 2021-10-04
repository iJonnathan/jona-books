<template>
  <div class="admin ">
    <div class="container" style="width: 100%; max-width:initial; margin:0">
      <div class="row ">
        <div class="col s12">
          <UploadBooks/>
          <!-- <UploadBooks/> -->
          
          </div>
          <!-- <ul class="tabs">
            <li class="tab col s4"><a  href="#admin_books">Libros</a></li>
            <li class="tab col s4"><a class="active" href="#admin_categories">Categorías</a></li>
            <li class="tab col s4"><a  href="#admin_users">Usuarios</a></li>
          </ul>
        </div>
        <div id="admin_books" class="col s12">
          <UploadBooks/>
        </div>
        <div id="admin_categories" class="col s12">
          <Bookshelft/>
          
        </div>
        <div id="admin_users" class="col s12">
          <PdfViewer/>
          
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import UploadBooks from '@/components/UploadBooks.vue'

export default {
  name: 'Admin',
  components: {
    UploadBooks,
  }

}
</script>
<style lang="scss" >
</style>
