import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
import React, { useState } from "react";
import SectionList from "./SectionList";

const Controls = () => {
  const [lenguaje, setLenguaje] = useState("");
  const [pais, setPais] = useState("");
  const [salario, setSalario] = useState("");
  return (
    <div>
      <h2>Categorias</h2>
      <SectionList
        title="lenguaje"
        url=""
        handleChange={(e) => {
          setLenguaje(e.target.value);
        }}
      />
      {lenguaje && (
        <SectionList
        title="pais"
        url=""
        handleChange={(e) => {
          setPais(e.target.value);
        }}
      />
      )}
      {pais && (
         <SectionList
         title="salario"
         url=""
         handleChange={(e) => {
           setSalario(e.target.value);
         }}
       />
      )}
     
      <pre>
        <code>
          {lenguaje}-{pais}-{salario}
        </code>
      </pre>
    </div>
  );
};

export default Controls;
