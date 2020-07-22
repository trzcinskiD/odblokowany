import Theme from "./components";
import image from "@frontity/html2react/processors/image";

const odblokowanyTheme = {
  name: "odblokowany-theme",
  roots: {
    theme: Theme,
  },
  state: {
    theme: {
      isSearchOpen: false,
      mode: "light",
    },
  },
  actions: {
    theme: {
      afterCSR: ({ actions }) => {
        console.log("ustalam mode");
        if (window.localStorage.getItem("mode") === "dark") actions.theme.setDarkMode();
      },
      setLightMode: ({ state }) => {
        console.log("chcę jaśniej");
        state.theme.mode = "light";
        window.localStorage.setItem("mode", "light");
      },
      setDarkMode: ({ state }) => {
        console.log("chcę ciemniej");
        state.theme.mode = "dark";
        window.localStorage.setItem("mode", "dark");
      },
      openSearch: ({ state }) => {
        state.theme.isSearchOpen = true;
      },
      closeSearch: ({ state }) => {
        state.theme.isSearchOpen = false;
      },
    },
  },
  libraries: {
    html2react: {
      // Ta funkcja sprawia, że wszystkie <img> używają komponentu <Image />
      // z @frontity/components, który zawiera lazy loading support
      processors: [image],
    },
  },
};

export default odblokowanyTheme;
