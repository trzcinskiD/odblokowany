const settings = {
  name: "Odblokowany",
  state: {
    frontity: {
      url: "https://odblokowany.pl",
      devUrl: "http://localhost:8000",
      title: "Odblokowany",
      description: "Odblokowany - informacje o decentralizacji",
      social: {
        facebook: "https://www.facebook.com/Danonerk",
        linkedIn: "https://www.linkedin.com/in/damian-trzcinski/",
        gitHub: "https://github.com/trzcinskiD",
        gitLab: "https://gitlab.com/trzcinskid"
      }
    }
  },
  packages: [
    {
      name: "odblokowany-theme",
      state: {
        theme: {
          menu: [
            ["logo", "/"],
            ["O mnie", "/about/"]
          ]
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "http://localhost:8000/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
