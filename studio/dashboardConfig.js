export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606c2728d2fccc2527ab0f2e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6qcfw4mo',
                  apiId: '2923264a-0e93-4fa9-ad1f-844b4f8b5436'
                },
                {
                  buildHookId: '606c27286e6c081d634bf25e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bo9xuxc5',
                  apiId: 'b30f8a17-6462-4a2b-8f7d-b3f11b530a7f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisfior/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bo9xuxc5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
