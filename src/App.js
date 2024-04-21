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
import StickyMenu from './Components/StickyMenu/StickyMenu';

function App() {
  return (
    <>
      <StickyMenu />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/users' element={<Users />} />
        <Route path='/user' element={<User />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/post' element={<Post />} />
        <Route path='/albums' element={<Albums />} />
        <Route path='/album' element={<Album />} />
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
