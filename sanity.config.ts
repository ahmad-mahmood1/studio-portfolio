import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes'
import {singletonTools} from 'sanity-plugin-singleton-tools'
import {structure} from './sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || '',

  plugins: [structureTool({structure}), visionTool(), singletonTools()],
  schema: {
    types: schemaTypes,
  },
})
