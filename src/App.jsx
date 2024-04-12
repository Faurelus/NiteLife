import "./App.css";
import FormValidation from "../authentication/formValidation";
import { Formik } from "formik";

const App = () => {
  return (
    <header>
      <h1>Welcome to Nite Life</h1>
      <FormValidation />
    </header>
  );
};

export default App;
