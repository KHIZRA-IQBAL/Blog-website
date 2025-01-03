import { type SchemaTypeDefinition } from 'sanity'
import landingPage from './landingPage'
import hero from './landingPagesections/hero'
import specialpicsection from '@/sanity/schemaTypes/landingPagesections/specialpicsection'
import card from './landingPagesections/card'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage,hero,specialpicsection,card],
}
