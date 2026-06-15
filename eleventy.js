module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Format a YYYY-MM-DD date string as German locale date (e.g. "14. Juni 2025")
  eleventyConfig.addFilter("datumDE", function(dateStr) {
    if (!dateStr) return "";
    const months = [
      "Januar", "Februar", "März", "April", "Mai", "Juni",
      "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];
    const d = new Date(dateStr + "T00:00:00");
    return `${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
