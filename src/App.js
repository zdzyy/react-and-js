import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo:"Front End",
    foto:"http://github.com/zdzyy.png",
    nombre:"Diego",
    puesto:"Streamer",
    fav: true
  },
  {
    id: uuid(),
    equipo:"Programacion",
    foto:"https://imagenes.20minutos.es/files/gallery_desktop_default_content/uploads/imagenes/2021/08/31/shrek-3.jpeg",
    nombre:"Shrek",
    puesto:"Ogro",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Ux y Diseño",
    foto:"https://pbs.twimg.com/profile_images/1364070437639094272/guUYd44L_400x400.png",
    nombre:"Sonic",
    puesto:"Atleta",
    fav: true
  },
  {
    id: uuid(),
    equipo:"Programacion",
    foto:"https://github.com/christianpva.png",
    nombre:"Christian",
    puesto:"Instructor",
    fav: false
  },
  {
    id: uuid(),
    quipo:"Innovacion y Gestion",
    foto:"https://github.com/JoseDarioGonzalezCha.png",
    nombre:"Jose Dario",
    puesto:"Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Devops",
    foto:"https://static01.nyt.com/images/2022/05/05/arts/05bad-bunny-ESP-00/merlin_206353689_6648fbf7-be54-4a23-b2e0-1ec2065ef7e4-superJumbo.jpg?quality=75&auto=webp",
    nombre:"Benito",
    puesto:"Singer",
    fav: true
  }
  ])

  const [equipos, actualizarEquipos] = useState(
    [
      {
        id: uuid(),
        titulo:"Programacion",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuid(),
        titulo:"Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuid(),
        titulo:"Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuid(),
        titulo:"Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuid(),
        titulo:"Ux y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuid(),
        titulo:"Movil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuid(),
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

  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador",id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipo

  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const equiposActualizado = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizado)
  }

  //crear equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  //like

  const like =(id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* mostrarFormulario ? <Formulario /> : <></> */}
      {
      mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />)
      }

      <Footer/>

    </div>
  );
}

export default App;
