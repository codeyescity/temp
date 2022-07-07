module.exports = function (eleventyConfig)
{
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/admin");
    eleventyConfig.addPassthroughCopy("./src/products-images");
    return {dir:{input: "src", output: "public"}}
};