const settings = {
  name: "Odblokowany",
  state: {
    frontity: {
      url: "https://odblokowany.com",
      devUrl: "https://localhost:3000",
      title: "Odblokowany",
      description:
        "Odblokowany - blog o decentralizacji i technologii blockchain",
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
          menu: [["O mnie", "/about/"]]
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://unblockedapi.xyz/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
