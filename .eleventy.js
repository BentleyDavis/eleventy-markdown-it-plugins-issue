const markdownItEmoji = require("markdown-it-emoji");
const markdownItObsidianImages = require('markdown-it-obsidian-images');
const wikilinks = require('markdown-it-wikilinks');

module.exports = function (eleventyConfig) {

    eleventyConfig.amendLibrary("md", mdLib => mdLib
        .use(wikilinks)
        .use(markdownItEmoji)
        .use(markdownItObsidianImages)
    );

    return {
        templateFormats: ['md'],
    }
}
