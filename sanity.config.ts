import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['homePage']);

const config = defineConfig({
  projectId,
  dataset,
  title: 'My Personal Website',
  apiVersion,
  basePath: '/admin',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Configuration pour la page d'accueil singleton
            S.listItem()
              .title('Page d\'Accueil')
              .id('homePage')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            // Ajouter des éléments pour les autres types de documents
            S.documentTypeListItem('project').title('Projets'),
            S.documentTypeListItem('page').title('Pages'),
            // ... ajoutez ici d'autres types de documents si nécessaire
          ])
    }),
    vercelDeployTool(),
  ],
  schema: { types: schemas },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});

export default config;
