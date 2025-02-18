export type command = {
 description: string,
 links?: Array<string>
}
// Mover a archivo separado
// Objeto con las respuestas para cada comando
export const commands: Record<string, command> = {
 help: { description: 'Available commands: about, projects, contact, help, clear' },
 about: { description: 'Guillermo' },
 projects: { description: 'Here are some of my projects:', links: ['link1', 'link2'] },
 contact: { description: 'You can contact me on:', links: ['link1', 'link2'] }
};

