import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { fetch_user_success } from './redux/actions/userActions';
import { useEffect } from 'react';
import PageContainer from './components/PageContainer';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      const localData = JSON.parse(sessionStorage.getItem('data'));
      if(localData) {
          dispatch(fetch_user_success(localData.user));
      }
  }, []);
  return (
    <div>
        <Navbar />
        <PageContainer />
        <Footer />
    </div>
  );
}

export default App;
