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
import PostCreate from './Pages/PostCreate/PostCreate';
import PostEdit from './Pages/PostEdit/PostEdit';
import PostDelete from './Pages/PostDelete/PostDelete';
import UserCreate from './Pages/UserCreate/UserCreate';
import UserDelete from './Pages/UserDelete/UserDelete';
import AlbumDelete from './Pages/AlbumDelete/AlbumDelete';
import AlbumCreate from './Pages/AlbumCreate/AlbumCreate';
import CommentCreate from './Pages/CommentCreate/CommentCreate';
import UserEdit from './Pages/UserEdit/UserEdit';
import Categories from './Pages/Categories/Categories';
import Category from './Pages/Category/Category';
import CategoryCreate from './Pages/CategoryCreate/CategoryCreate';
import CategoryEdit from './Pages/CategoryEdit/CategoryEdit';

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
        <Route path='/posts/create' element={<PostCreate />} />
        <Route path='/posts/edit/:id' element={<PostEdit />} />
        <Route path='posts/delete/:id' element={<PostDelete />} />
        <Route path='users/create' element={<UserCreate />} />

        <Route path='users/delete/:id' element={<UserDelete />} />
        <Route path='albums/delete/:id' element={<AlbumDelete />} />

        <Route path='/users/edit/:id' element={<UserEdit />} />
        {/* <Route path='/albums/edit/:id' element={<AlbumEdit />} /> */}

        <Route path='/albums/create' element={<AlbumCreate />} />
        <Route path='/comment/create/:id' element={<CommentCreate />} />

        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:id' element={<Category />} />

        <Route path='/categories/create' element={<CategoryCreate />} />
        <Route path='/categories/edit/:id' element={<CategoryEdit />} />

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
