import { onAuthStateChanged } from 'firebase/auth';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { useAppDispatch } from './redux/hook';
import { auth } from './lib/firebase.config';
import { setUser } from './redux/features/user/userSlice';

function App() {

  //! Redux for setUser
  const dispatch = useAppDispatch();
  
  //! firebase and redux for setUser
  onAuthStateChanged(auth, (user)=>{
    if(user){
      dispatch(setUser(user.email));
    }
  }) 


  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
