import { defineConfig } from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

const config = defineConfig({
  projectId,
  dataset,
  title: 'My Personal Website',
  apiVersion,
  basePath:'/admin',
  plugins: [deskTool(),vercelDeployTool()],
  schema: {types: schemas}

})

export default config