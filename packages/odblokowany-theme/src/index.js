import Theme from "./components";
import image from "@frontity/html2react/processors/image";

const odblokowanyTheme = {
  name: "odblokowany-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      isSearchOpen: false
    }
  },
  actions: {
    theme: {
      openSearch: ({ state }) => {
        state.theme.isSearchOpen = true;
      },
      closeSearch: ({ state }) => {
        state.theme.isSearchOpen = false;
      }
    }
  },
  libraries: {
    html2react: {
      // Ta funkcja sprawia, że wszystkie <img> używają komponentu <Image />
      // z @frontity/components, który zawiera lazy loading support
      processors: [image]
    }
  }
};

export default odblokowanyTheme;
