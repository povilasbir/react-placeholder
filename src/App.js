import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Users from './Pages/Users/Users';
import User from './Pages/User/User';
import Posts from './Pages/Posts/Posts';
import Post from './Pages/Post/Post';
import Main from './Pages/Main/Main';
import Albums from './Pages/Albums/Albums';
import Album from './Pages/Album/Album';
import './style.css'

function App() {
  return (
    <>
      <div id="sticky-menu">
        <a href="/" class="index-button">
          {'<'}
        </a>
      </div>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/users' element={<Users />} />
        <Route path='/user.html' element={<User />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/post.html' element={<Post />} />
        <Route path='/albums' element={<Albums />} />
        <Route path='/album.html' element={<Album />} />
        <Route path='*' element={
          <div>
            <h1>404: Page not found</h1>
            <Link to="/">Go back to home page</Link>
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;
