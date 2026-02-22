module.exports = function (eleventyConfig) {
  // Current year filter for templates
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Pass through static assets untouched
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/demos/**/*.html");
  eleventyConfig.addPassthroughCopy("src/demos/**/*.js");
  eleventyConfig.addPassthroughCopy("src/demos/**/*.css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
