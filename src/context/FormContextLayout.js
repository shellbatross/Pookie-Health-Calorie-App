import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext} from './FormContext';
import { useState } from 'react';

const FormContextLayout = () => {
const [getForm,setGetForm] = useState("");
  return (
    <FormContext.Provider value = {{getForm,setGetForm}}>
      <Outlet/>
    </FormContext.Provider>
  );
};

export default FormContextLayout;