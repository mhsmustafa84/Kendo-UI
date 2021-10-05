import React from "react";
import { Calendar } from '@progress/kendo-react-dateinputs'
import '@progress/kendo-theme-default/dist/all.css';
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello KendoReact!</h1>
      <Calendar/>
    </div>
  );
}
