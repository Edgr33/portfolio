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
      shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est eros, placerat ac ullamcorper luctus, fringilla id mi. Donec tristique mi non lorem laoreet, vel hendrerit velit tristique. Integer vitae ligula neque.',
      techs: 'Angular - Bootstrap - NodeJS - Express',
      urlApp: 'https://rent-front33.herokuapp.com/',
      urlApi: 'https://rent-backend33.herokuapp.com/api-renta/renta',
      description: 'Proin aliquam sodales lorem ut consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer et nisi at lorem pellentesque iaculis. Nullam nisl neque, pharetra dictum urna eget, cursus auctor leo. Proin in massa nec leo lobortis tincidunt. Maecenas non facilisis tortor.'
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
      shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est eros, placerat ac ullamcorper luctus, fringilla id mi. Donec tristique mi non lorem laoreet, vel hendrerit velit tristique. Integer vitae ligula neque.',
      techs: 'Angular - Bootstrap - NodeJS - Express',
      urlApp: 'https://quiz33-front.herokuapp.com/',
      urlApi: 'https://quiz33-backend.herokuapp.com/app/scores',
      description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer condimentum ac est nec sagittis. Cras vestibulum mi tincidunt odio tincidunt dapibus. Duis dapibus lectus ut sapien mollis placerat. Integer fringilla dolor at convallis bibendum. '
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
      shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est eros, placerat ac ullamcorper luctus, fringilla id mi. Donec tristique mi non lorem laoreet, vel hendrerit velit tristique. Integer vitae ligula neque.',
      techs: 'Angular - Bootstrap',
      urlApp: 'https://pokedex-project-33.herokuapp.com/',
      urlApi: 'https://pokeapi.co/api/v2/pokemon',
      description: 'Fusce ac magna mollis, dictum justo at, accumsan purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nisl metus, lacinia vel aliquam ut, faucibus nec nunc. Integer imperdiet mi vel consequat tempus. Praesent tincidunt, nisi sit amet bibendum imperdiet, ante quam finibus mauris, in cursus nisi ipsum ut ipsum.'
    },
    
  ]

  constructor() { }
}
