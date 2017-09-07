const minimatch = require("minimatch");
const yaml = require("js-yaml");
const path = require("path");

/**
 * This Metalsmith plugin matches YAML metadata files by a glob pattern and
 * packs them into metadata. The result is a mapping where the key is the
 * file's basename.
 */
module.exports = (patterns) => {
  return (files, metalsmith, done) => {
    let metadata = metalsmith.metadata();
    let fileNames = Object.keys(files);

    // Match all the files for each key/pattern pair.
    for (let key in patterns) {
      let pattern = patterns[key];
      let matches = fileNames.filter(minimatch.filter(pattern));

      // Load all the data from the matches for this key.
      let allData = {};
      for (let match of matches) {
        let fileKey = path.basename(match, '.yaml');
        let file = files[match];
        let data = yaml.safeLoad(file.contents);
        allData[fileKey] = data;
      }

      // Add this to the global metadata.
      metadata[key] = allData;
    }

    done();
  };
};
