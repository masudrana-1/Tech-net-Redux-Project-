import { onAuthStateChanged } from 'firebase/auth';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { useAppDispatch } from './redux/hook';
import { auth } from './lib/firebase.config';
import { setLoading, setUser } from './redux/features/user/userSlice';
import { useEffect } from 'react';

function App() {

  //! Redux for setUser
  const dispatch = useAppDispatch();
  
  //! firebase and redux for setUser and setLoading
  useEffect(()=>{

    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user)=>{
      if(user){
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      }else{
        dispatch(setLoading(false));
      }
    })
  },[dispatch]) 


  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
