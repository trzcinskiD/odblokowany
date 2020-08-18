const settings = {
  name: "Odblokowany",
  state: {
    frontity: {
      url: "https://odblokowany.com",
      devUrl: "https://localhost:3000",
      title: "Odblokowany",
      description: "Odblokowany - blog o decentralizacji i technologii blockchain",
      brandDescription: "",
      social: {
        facebook: "https://www.facebook.com/Danonerk",
        linkedIn: "https://www.linkedin.com/in/damian-trzcinski/",
        gitHub: "https://github.com/trzcinskiD",
        gitLab: "https://gitlab.com/trzcinskid",
        mail: "trzcinskid0@gmail.com",
      },
    },
  },
  packages: [
    {
      name: "frontity-odblokowany-theme",
      state: {
        theme: {
          menu: [
            ["O mnie", "/about/"],
            ["Narzędzia", "/moje-narzedzia/"],
          ],
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://unblockedapi.xyz/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
  ],
};

export default settings;
