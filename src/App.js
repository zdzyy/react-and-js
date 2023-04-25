import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo:"Front End",
    foto:"http://github.com/zdzyy.png",
    nombre:"Diego",
    puesto:"Streamer"
  },
  {
    equipo:"Programacion",
    foto:"https://imagenes.20minutos.es/files/gallery_desktop_default_content/uploads/imagenes/2021/08/31/shrek-3.jpeg",
    nombre:"Shrek",
    puesto:"Ogro"
  },
  {
    equipo:"Ux y Diseño",
    foto:"https://pbs.twimg.com/profile_images/1364070437639094272/guUYd44L_400x400.png",
    nombre:"Sonic",
    puesto:"Atleta"
  },
  {
    equipo:"Programacion",
    foto:"https://github.com/christianpva.png",
    nombre:"Christian",
    puesto:"Instructor"
  },
  {
    equipo:"Innovacion y Gestion",
    foto:"https://github.com/JoseDarioGonzalezCha.png",
    nombre:"Jose Dario",
    puesto:"Instructor"
  },
  {
    equipo:"Devops",
    foto:"https://static01.nyt.com/images/2022/05/05/arts/05bad-bunny-ESP-00/merlin_206353689_6648fbf7-be54-4a23-b2e0-1ec2065ef7e4-superJumbo.jpg?quality=75&auto=webp",
    nombre:"Benito",
    puesto:"Singer"
  }
  ])

  const [equipos, actualizarEquipos] = useState(
    [
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
  
  )

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

  //Eliminar colaborador

  const eliminarColaborador = () => {
    console.log("Eliminar colaborador");
  }

  //Actualizar color de equipo

  const actualizarColor = (color, titulo) => {
    console.log("Actualizar: ", color, titulo);
    const equiposActualizado = equipos.map((equipo) => {
      if(equipo.titulo === titulo) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizado)
  }

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
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor} 
        />)
      }

      <Footer/>

    </div>
  );
}

export default App;
