import { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import RegisterForm from '../component/registerForm/RegisterForm';
import { AuthContext } from '../contexts/authcontext';
import AuthLayout from '../layout/AuthLayout';
import ContentPage from '../pages/ContentPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import AddBlogPage from '../pages/AddBlogPage';
import MyBlogForm from '../component/ProfileItems/MyBlogForm';
import MyInfoForm from '../component/ProfileItems/MyInfoForm';
import EditPage from '../pages/EditPage';
import UserProfileById from '../component/user/UserProfileById';
import ProfilePageById from '../component/user/ProfilePageById';

function Router() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      {user ? (
        <>
          <Route path='/' element={<AuthLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/content/:id' element={<ContentPage />} />
            <Route path='/profile/:id' element={<ProfilePageById />}>
              <Route path='/profile/:id/info' element={<ProfilePageById />} />
              <Route path='/profile/:id/blogs' element={<UserProfileById />} />
            </Route>

            <Route path='/profile' element={<ProfilePage />}>
              <Route path='/profile/info' element={<MyInfoForm />} />
              <Route path='/profile/myblog' element={<MyBlogForm />} />
            </Route>

            <Route path='*' element={<Navigate to='/' />} />
          </Route>
          <Route path='/create' element={<AddBlogPage />} />
          <Route path='/edit/:id' element={<EditPage />} />
        </>
      ) : (
        <>
          <Route path='/' element={<AuthLayout />}>
            <Route path='/content/:id' element={<ContentPage />} />
            <Route path='/profile/:id' element={<ProfilePage />}>
              <Route path='/profile/:id/blogs' element={<UserProfileById />} />
              {/* <Route path='/profile/:id/blogs' element={<ContentPage />} /> */}
            </Route>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterForm />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
