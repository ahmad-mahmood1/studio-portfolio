// structure.js
import {PlugIcon, GroqIcon} from '@sanity/icons'
import {filteredDocumentListItems, singletonDocumentListItem} from 'sanity-plugin-singleton-tools'
import {StructureBuilder, StructureResolverContext} from 'sanity/structure'

export const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .title('Content')
    .items([
      // Create a list item for each singleton document in your schema that links directly to a document view
      // Create a list item for a specific singleton
      singletonDocumentListItem({
        S,
        context,
        type: 'version',
        title: 'Revalidate Version',
        icon: GroqIcon,
      }),
      singletonDocumentListItem({
        S,
        context,
        type: 'about',
        title: 'About',
        icon: PlugIcon,
      }),
      S.divider(),
      // Filter singleton documents out of the default S.documentTypeListItems() to prevent them from being rendered as lists or as duplicates
      ...filteredDocumentListItems({S, context}),
    ])
