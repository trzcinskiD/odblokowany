const settings = {
  name: "Odblokowany",
  state: {
    frontity: {
      url: "https://odblokowany.pl",
      devUrl: "http://localhost:8000",
      title: "Odblokowany",
      description: "Odblokowany - informacje o decentralizacji"
    }
  },
  packages: [
    {
      name: "odblokowany-theme",
      state: {
        theme: {
          menu: [
            ["logo", "/"],
            ["Decentralizacja", "/decentralization"],
            ["Blockchain", "/blockchain"],
            ["Recenzje", "/reviews"],
            ["Inne", "/other"],
            ["O mnie", "/about"]
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
