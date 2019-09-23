const mdx = require('@next/mdx');
const sass = require('@zeit/next-sass');
const sourceMaps = require('@zeit/next-source-maps');
const withPlugins = require('next-compose-plugins');
// const withPlugins = require('next-compose-plugins');

const plugins = [
    [sass],
    [
        mdx({
            extension: /\.mdx?$/,
            options: {
                mdPlugins: [],
                hastPlugins: [],
            },
        })
    ],
    [sourceMaps()]
]

const nextConfiguration = {
    target: 'serverless',
    dist: 'public'
}

module.exports = withPlugins(plugins, nextConfiguration);
