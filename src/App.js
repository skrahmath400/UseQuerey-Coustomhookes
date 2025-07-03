import logo from './logo.svg';
import './App.css';
import Bootstrap_from from './components/Formsbootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import { BrowserRouter as  Router,Route,Routes,Link, BrowserRouter } from 'react-router-dom';
import FormWithFromik from './components/onotherexample';
import CheckboxExample from './components/checkbox';
import Examples from './components/try';
import Counter, { AnotherCounter, Display } from './components/Coustomhooke';
import Colorchange from './components/Coustomhoole2example';
import Implementation from './components/Cities';
import CampusImplementaion from './components/Citiescoutom';
import Handlingusestate from './components/usestatteexample';

 const queryClient =new QueryClient({
    
    
  })
function App() {
 
  return (

  <>
  <div className="container mt-4">
    <h2 className="mb-4 text-primary border " style={{borderColor:'pink'}}>Formik Routing Example</h2>
  <QueryClientProvider client={queryClient}> 
    <Router >
    <nav className="nav nav-pills mb-4">
     <Link to='/singleexample'>Formikbasic
   
  </Link>  
   <Link to='/formsbootstrap'>Formsinbootstrap</Link>
   <Link to='/checkboxexample'>Checkbox</Link>
   <Link to='/example'>example</Link>
   <Link to='/Campus'>Campus</Link>

      </nav>
    <Routes>

  <Route path='/' element={<><Counter/><AnotherCounter/><Display/> <Colorchange/> <Implementation/> <Handlingusestate/> </>}/>
  <Route path='singleexample'element={<FormWithFromik/>}/>
  <Route path='/formsbootstrap' element={  <Bootstrap_from/>}></Route>
  <Route path='/checkboxexample' element={<CheckboxExample/>  }></Route>
    <Route path='/example' element={  <Examples/>  }></Route>
    <Route path='/Campus' element={< CampusImplementaion/>}></Route>
    
  </Routes>
 
 

  </Router>
  </QueryClientProvider>
 
   </div>
  </>
  );
}

export default App;
