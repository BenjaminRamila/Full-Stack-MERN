import React, {useState} from 'react';
import './App.css';
import FormWrapper from './Components/FormWrapper';
import Navbar from './Components/Navbar';
import Wrapper from './Components/Wrapper';

function App() {
  const [nameBar, setNameBar] = useState('');
  const onChange = (e) => {
    setNameBar(e.target.value);
  }
  return (
    <Wrapper>
        <Navbar displayName={nameBar}/>
        <FormWrapper handleOnChange={onChange}/>
        <div></div>
    </Wrapper>
   
);
}

export default App;
