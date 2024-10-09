import logo from './logo.svg';

import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">

   hello Prop It Up
  
   <PersonCard firstName={ "Doe,jane" } age={ 45 } color={"black"}/>
   <PersonCard firstName={ "Smith,John" } age={ 88 } color={"Brown"}/>
   <PersonCard firstName={ "Fillmore,Millard" } age={ 50 } color={"Brown"}/>
   <PersonCard firstName={ "Smith,Maria" } age={ 62 } color={"Brown"}/>

    </div>
  );
}

export default App;
