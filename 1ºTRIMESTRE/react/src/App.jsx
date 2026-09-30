import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Interprete from './components/UT02/Práctica2.03/Interprete.jsx'
import Pelicula from './components/UT02/Práctica2.03/Pelicula.jsx'

function App() {

  return (
    <>
      <section id='center'>
        <h2>Claudia quiere que ponga aqui otra cosa</h2>
        <Interprete 
          imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpD6WUNOhKv2oxcrRvvxshwisDCcDhJSof1onTu7sn8a9fzVOAnmD__co&s=10'
          nombre='Pedrito Rico'
          descripcion='Fue un destacado cantante, bailarín y actor español nacido en Elda en 1932.'
        />
        <Interprete 
          imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBQQHVUrMAy6MNPTomLNeeSlpKH-8EMKiuRXBff8-rb9SAvEs4nOnbBBQ&s=10'
          nombre='Antoni Benaiges'
          descripcion='Antoni Benaiges fue un maestro republicano español conocido por aplicar el método pedagógico Freinet en una escuela rural de Bañuelos de Bureba (Burgos), donde impulsó la creatividad de sus alumnos a través de la imprenta escolar.'
        />
        <Pelicula 
          titulo='Sin ropa mejor'
          descripcion='No lo se, tu sabras'
          imagen='https://i.pinimg.com/474x/39/6f/39/396f39cb806d3622955bdc22a5e38be4.jpg?nii=t'
        />
      </section>
    </>
  );
};


export default App