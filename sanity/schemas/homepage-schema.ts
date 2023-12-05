const homepage = {
  name: 'homePage',
  title: 'Page d\'Accueil',
  type: 'document',
  fields: [
    {
      name: 'mainTitle',
      title: 'Titre Principal',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'projectsSectionTitle',
      title: 'Titre de la Section des Projets',
      type: 'string'
    },
    {
      name: 'projects',
      title: 'Projets',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }]
    }
  ]
}

export default homepage;
