module.exports = {
    title: 'dxall-blog',
    description: 'dxall-blog',
    themeConfig: {
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        algolia: {
            appId: 'your_app_id',
            apiKey: 'your_api_key',
            indexName: 'index_name'
        }
    }
}