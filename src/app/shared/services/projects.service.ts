import { Injectable } from '@angular/core';
import { Project } from '../../project.model'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: '1',
      title: 'Proyecto Renta',
      images: [
        '../../../assets/projects/rent/rent1.png',
        '../../../assets/projects/rent/rent2.png',
        '../../../assets/projects/rent/rent3.png',
        '../../../assets/projects/rent/rent4.png',
        '../../../assets/projects/rent/rent5.png',
        '../../../assets/projects/rent/rent6.png',
      ],
      shortDesc: `Proyecto que se basa en formularios pertenecientes al área de contabilidad, para realizar el cálculo de cuentas 
                  de negocios y luego ser utilizadas en sus respectivas declaraciones de renta.`,
      techs: 'Angular - Bootstrap - NodeJS - Express',
      urlApp: 'https://rent-front33.herokuapp.com/',
      urlApi: 'https://rent-backend33.herokuapp.com/api-renta/renta',
      description: `Esta aplicación se crea para facilitar el cálculo de cuentas de contabilidad de negocios y empresas. 
                    Cuenta con 2 formularios principales, los cuales funcionan como una sola entidad. Estos formularios entregan sus
                    resultados de forma automática, por lo que solo se requiere el ingreso de datos de parte del usuario. </br></br>También cuenta
                    con una sección para que los usuarios puedan crear un registro de sus clientes y de información relevante relacionada
                    a ellos. Tanto los formularios como los clientes tienen un CRUD completo implementado, por lo que se pueden crear,
                    ver, editar y eliminar.</br></br>
                    
                    Esta aplicación aun se encuentra en desarrollo, por lo que algunas funcionalidades, interacciones, diseños y visualizaciones
                    no estan implementadas de forma óptima.`
    },
    {
      id: '2',
      title: 'Proyecto Quiz',
      images: [
        '../../../assets/projects/quiz/quiz1.jpg',
        '../../../assets/projects/quiz/quiz2.png',
        '../../../assets/projects/quiz/quiz3.png',
        '../../../assets/projects/quiz/quiz4.png'
      ],
      shortDesc: `Proyecto que se basa en un juego de trivias en las cuales diferentes usuarios pueden participar. 
                  Luego estos podran registrar su puntaje junto a su nombre, para ser comparado con otros usuarios participantes.`,
      techs: 'Angular - Bootstrap - NodeJS - Express',
      urlApp: 'https://quiz33-front.herokuapp.com/',
      urlApi: 'https://quiz33-backend.herokuapp.com/app/scores',
      description: `Esta aplicación se basa en un juego de trivias. Antes de comenzar, el jugador debe elegir entre cuatro categorías.
      Luego de eso, cada pregunta se generará al azar a medida que progresa el juego. Por cada pregunta, se le ofrecerán al jugador cuatro alternativas, de las cuales solo una de ellas es la correcta. 
      El jugador tendrá un tiempo límite de 10 segundos para responder cada pregunta. </br></br> 
      Cada juego genera 10 preguntas antes de finalizar y el jugador conseguirá 1 punto por cada pregunta 
      que responda correctamente. Al finalizar el juego, se le da la opción al jugador de ingresar su nombre para 
      registrar su puntaje en la pantalla de ranking. </br></br>
      Esta aplicación cuenta con un diseño responsive, por lo que puede ser utilizada tanto en computadores como en dispositivos móviles.`
    },
    {
      id: '3',
      title: 'Proyecto Pokedex',
      images: [
        '../../../assets/projects/poke/poke1.png',
        '../../../assets/projects/poke/poke2.png',
        '../../../assets/projects/poke/poke3.png',
        '../../../assets/projects/poke/poke4.png',
        '../../../assets/projects/poke/poke5.png',
      ],
      shortDesc: `Proyecto que simula la funcionalidad del dispositivo conocido como "pokedex" de la serie Pokemon. 
      Ésta permite ver un listado de todos los pokemon registrados, buscar alguno en específico y ver información sobre la 
      naturaleza de cada uno de éstos.`,
      techs: 'Angular - Bootstrap',
      urlApp: 'https://pokedex-project-33.herokuapp.com/',
      urlApi: 'https://pokeapi.co/',
      description: `Esta aplicación fué inspirada en el dispositivo conocido como "pokedex" de la serie de videojuegos Pokemon. </br></br>
      Entre sus funcionalidades, incluye un listado de todos los pokemon pertenecientes a cada generación, la cual puede ser 
      modificada por el usuario por medio de un selector. Un buscador, el cual irá entregando resultados al usuario
      de forma reactiva a medida que ingrese caracteres en el. Además, cuenta con un paginador de Angular Material, el cual le permite
      al usuario elegir el número de entradas que desee que se muestren en pantalla y cambiar paginas dentro del total de entradas. 
      Por último, el usuario también puede hacer click en cada entrada para ver información detallada de cada pokemon. </br></br>

      Esta aplicación cuenta con un diseño responsive, por lo que puede ser utilizada tanto en equipos de escritorio
      como en dispositivos móviles.`
    },
    
  ]

  constructor() { }
}
