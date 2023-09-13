
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleAddBookmarks = blog => {
    console.log('Boomkarks Adding soon!')
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex md:max-w-5xl lg:max-w-6xl mx-auto'>
          <Blogs handleAddBookmarks={handleAddBookmarks}></Blogs>
          <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
