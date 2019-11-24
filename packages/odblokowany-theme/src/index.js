import Theme from "./components";
import image from "@frontity/html2react/processors/image";

const odblokowanyTheme = {
  name: "odblokowany-theme",
  roots: {
    theme: Theme
  },
  actions: {
    theme: {}
  },
  libraries: {
    html2react: {
      // Ta funkcja sprawia, że wszystkie <img> używają komponentu <Image />
      // z @frontity/components, który zaiweta lazy loading support
      processors: [image]
    }
  }
};

export default odblokowanyTheme;
