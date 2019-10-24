export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5db110df41cbaa5492fd9119',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-t9a2okud',
                  apiId: 'c9bf437a-bb43-4d41-a565-355998e64de1'
                },
                {
                  buildHookId: '5db110dfd912aa4ae293461c',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-jmze5554',
                  apiId: '4eb287c6-f033-4bd6-b2eb-f177b63b5a9d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elykahn/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-jmze5554.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
