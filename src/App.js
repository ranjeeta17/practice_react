
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummry from './components/OrderSummry';
import NoMatch from './components/NoMatch';
import Products from './components/Products'
import Features from './components/Features'
import New from './components/New'
import Users from './components/Users'
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Message from './componentProps/Message'
import Count from './componentProps/Count'
import PracHOOK from './components/PracHOOK';
import Greet from './componentProps/Greet';
import Welcome from './componentProps/Welcome';
import UsEffect from './componentUSEeffect/UsEffect';
import ClickCounter from './componentUSEeffect/ClickCounter';
import Counter from './componentUSEeffect/Counter';
import Text from './HigerOrder/Text';
import Fetichingdata from './componentUSEeffect/Fetichingdata';
import Youtubeform from './FormHandling/Youtubeform';
import {Storie1} from './tasks/Storie1';
import A from './ContextAPI/A';
import { ContextProvider } from './ContextAPI/UserContext';
import B from './ContextAPI/B';
import { useEffect, useState } from 'react';
import Forms from './tasks/Forms';
import Showdata from './tasks/Showdata';
import GreyScale from './tasks/GreyScale';

import  logo from './logo.svg'


function App() {

  const [array, setArray] = useState([]);
  const addDataToArr = (obj) => {
  setArray(prevArray => [...prevArray, obj]);
  }

//  const obj={
//     name:"anii",
//     clas:"bscsf",
//     sec:"a",
//     flag:false
//   }

  return (
    <div >
     {/* <Navbar/>
     <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='ordersummry' element={<OrderSummry/>}/>
      <Route path='*' element={<NoMatch/>}/>
      <Route path='products' element={<Products/>}>
        <Route index element={<Features/>}/>
        <Route path='features' element={<Features/>}/>
        <Route path='new' element={<New/>}/>
      </Route>

      <Route path='users' element={<Users/>}>
        <Route path=':userId' element={<UserDetails/>}/>
        <Route path='admin' element={<Admin/>}/>
      </Route>

     </Routes>

     <Home bool={obj}/> */}

     {/* <Message/>
     <Count/> */}

     {/* <PracHOOK count={7} /> */}

     {/* <Greet />  */}

     {/* <Welcome/> */}

     {/* <ClickCounter/>
     <Counter/>
     <Text name="aniket"/> */}

     {/* <UsEffect/> */}

     {/* <Fetichingdata/> */}

     {/* <Youtubeform/> */}

     {/* <Stories/> */}

     {/* <Storie1/> */}
    
    {/* <ContextProvider value="deepaaaa">
      <A/>
    </ContextProvider> */}

   {/* <>
      <Routes>
        <Route index path='/' element={<Forms arr={addDataToArr}/>} />
        <Route path='showpage' element={<Showdata arr={array}/>} />
      </Routes>
   </>
      */}

    <GreyScale src={logo} alt='this is alternative' height={100} width={100}/>

    </div>
  );
}

export default App;
