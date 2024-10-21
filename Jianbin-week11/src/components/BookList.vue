<template>
    <div>
      <h1>Books with ISBN > 1868</h1>
      <ul>
        <li v-for="book in books" :key="book.id">
          {{ book.name }} - ISBN: {{ book.isbn }}
          <button @click="editBook(book)">Edit</button>
          <button @click="deleteBook(book.id)">Delete</button>
        </li>
      </ul>
      <div v-if="editingBook">
        <h2>Edit Book</h2>
        <form @submit.prevent="updateBook">
          <div>
            <label for="editIsbn">ISBN:</label>
            <input type="text" v-model="editingBook.isbn" id="editIsbn" required />
          </div>
          <div>
            <label for="editName">Name:</label>
            <input type="text" v-model="editingBook.name" id="editName" required />
          </div>
          <button type="submit">Update Book</button>
          <button @click="cancelEdit">Cancel</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import db from '../firebase/init.js'
  import { collection, query, where, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
  
  export default {
    setup() {
      const books = ref([])
      const editingBook = ref(null)
  
      const fetchBooks = async () => {
        try {
          const q = query(collection(db, 'books'), where('isbn', '>', 1868))
          const querySnapshot = await getDocs(q)
          const booksArray = []
          querySnapshot.forEach((doc) => {
            booksArray.push({ id: doc.id, ...doc.data() })
          })
          books.value = booksArray
        } catch (error) {
          console.error('Error fetching books: ', error)
        }
      }
  
      const editBook = (book) => {
        editingBook.value = { ...book }
      }
  
      const updateBook = async () => {
        try {
          const bookRef = doc(db, 'books', editingBook.value.id)
          await updateDoc(bookRef, {
            isbn: Number(editingBook.value.isbn),
            name: editingBook.value.name
          })
          fetchBooks()
          editingBook.value = null
        } catch (error) {
          console.error('Error updating book: ', error)
        }
      }
  
      const deleteBook = async (id) => {
        try {
          await deleteDoc(doc(db, 'books', id))
          fetchBooks()
        } catch (error) {
          console.error('Error deleting book: ', error)
        }
      }
  
      const cancelEdit = () => {
        editingBook.value = null
      }
  
      onMounted(() => {
        fetchBooks()
      })
  
      return {
        books,
        editingBook,
        editBook,
        updateBook,
        deleteBook,
        cancelEdit
      }
    }
  }
  </script>
  