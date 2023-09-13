
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddBookmarks = blog => {
    const neBookmarks = [...bookmarks, blog]
    setBookmarks(neBookmarks)
  }

  const handleMarkRead = (time, id) => {
    const newTime = (readingTime + time)
    setReadingTime(newTime)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-3 md:gap-5 lg:gap-10 md:max-w-5xl lg:max-w-6xl mx-4 md:mx-14 lg:mx-36 md:my-8 lg:my-12'>
          <Blogs handleAddBookmarks={handleAddBookmarks} handleMarkRead={handleMarkRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App;
