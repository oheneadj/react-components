import logo from './logo.svg';
import './App.css';
import { Navbar } from "./components/Navbar";
import {Paragraph} from "./components/Paragraph";
import {Input} from "./components/Input";
import { Myself } from "./components/MySelf";
import {Counter} from "./components/Counter";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Paragraph/>
     <Input/>
     <Myself name = "Ohene Adjei" age = {20} gender = "Male" />
     <Myself name = "Lois Effah" age = {18} gender = "Female" />
     <Myself name = "Kezia Effah" age = {2} gender = "Female" />
     <Myself name = "Nan Kwado" age = {20} gender = "Male" />
     <Myself name = "Esi Amponsah" age = {10} gender = "Female" />
     <Counter/>
    </div>
  );
}

export default App;
