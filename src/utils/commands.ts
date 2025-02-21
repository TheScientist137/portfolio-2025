type link = {
 name: string,
 description: string
 url: string
}

type contact = {
 way: string,
 data: string
}

export type command = {
 description: string,
 links?: Array<link>
 contact?: Array<contact>
}

export const commands: Record<string, command> = {
 help: { description: 'Available commands: about, projects, contact, help, clear' },
 about: { description: 'Desarrollador web full stack y técnico en electrónica con experiencia endiseño, implementación y mantenimiento de sistemas tecnológicos.Especializado en desarrollo de aplicaciones web, programación demicrocontroladores, soluciones IoT y Linux combinando habilidades desoftware y hardware. Enfocado en la resolución de problemas, lainnovación y el aprendizaje continuo para aportar valor en proyectosmultidisciplinarios.' },
 projects: {
  description: 'Here are some of my projects:',
  links: [
   { name: 'TelescopEcommerce', description: 'Simple astronomy e-commerce', url: 'https://github.com/TheScientist137?tab=repositories' },
   { name: 'Portfolio 2025', description: 'Simple console based portfolio', url: 'https://github.com/TheScientist137?tab=repositories' }
  ]
 },
 contact: {
  description: 'You can contact me on:',
  contact: [
   { way: 'Tel:', data: '+34 628833702' },
   { way: 'Email:', data: 'TheScientist137@outlook.es' }
  ]
 }
};

