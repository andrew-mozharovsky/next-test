const contentfulManagement = require("contentful-management");

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: "CFPAT-grEoVFgfgv-RId8uGHP4dG5BI_To1g0rRVWpu9_PpgM",
  });

  return contentfulClient
    .getSpace("w9qvrlap6k01")
    .then((space) => space.getEnvironment("master"));
};
