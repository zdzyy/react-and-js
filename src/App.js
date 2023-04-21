import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador ", colaborador);
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Lista de equipos
  const equipos = [
    {
      titulo:"Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    { 
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    { 
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    { 
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    { 
      titulo:"Ux y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    { 
      titulo:"Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    { 
      titulo:"Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
]

  return (
    <div>
      <Header />
      {/* mostrarFormulario ? <Formulario /> : <></> */}
      {
      mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador={registrarColaborador}
      />}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
        />)
      }

    </div>
  );
}

export default App;
