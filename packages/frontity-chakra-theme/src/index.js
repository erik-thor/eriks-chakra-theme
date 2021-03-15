import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import processors from "./components/styles/processors";
// import { theme } from "@chakra-ui/react";

const chakraTheme = {
  name: "frontity-chakra-theme",
  roots: {
    // In Frontity, any package can add React components to the site.
    // We use roots for that, scoped to the "theme" namespace.
    theme: Theme
  },
  state: {
    // State is where the packages store their default settings and other
    // relevant state. It is scoped to the "theme" namespace.
    theme: {
      /**
       * The logo can be a text or an image url
       * logo : "Frontity"
       * logo: "https://uploads-ssl.webflow.com/5be00771820599586e6bd032/5be0223588110a6dbcac2d05_image.svg",
       */
      logo: "Erik Thor",
      showBackgroundPattern: false,
      showSocialLinks: true,
      /**
       * socialLinks: [
            ["pinterest", "https://www.pinterest.com/frontity/"],
            ["facebook", "https://www.instagram.com/frontity/"],
            ["twitter", "https://www.twitter.com/frontity/"]
          ],
       */
          socialLinks: [
            ["pinterest", "https://www.pinterest.com/erikthor"],
            ["facebook", "https://www.facebook.com/MBTIFlowTypes"],
            ["instagram", "https://www.instagram.com/eriksflowtypes"],
            ["youtube", "https://www.youtube.com/erikthor"],
            ["twitter", "https://www.twitter.com/ErikThor_/"]
          ],
      menu: [
        ["About", "/portfolio/erik-thor-web-architect/"],
        ["Experience", "/portfolio/more/"],
        ["Portfolio", "/portfolio/hello-world/"]
      ],
      featured: {
        showOnArchive: true,
        showOnPost: true
      },

      colors: {
        primary: {
          50: "#000f1d",
          100: "#b8dcfa",
          200: "#8ec4f1",
          300: "#63ace8",
          400: "#3994e0",
          500: "#1f7bc6",
          600: "#135f9b",
          700: "#084470",
          800: "#002946",
          900: "#084470"
        },
        accent: {
          50: "#121212",
          100: "#003c46",
          200: "#085970",
          300: "#13719b",
          400: "#b8dcfa",
          500: "#3994e0",
          600: "#63b1e8",
          700: "#8ecbf1",
          800: "#ffffff",
          900: "#e0f9ff"
        }
      },
      isSearchModalOpen: false,
      isMobileMenuOpen: false,
      autoPreFetch: "all",
    }
  },
  // Actions are functions that modify the state or deal with other parts of
  // Frontity like libraries.
  actions: {
    theme: {
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      openSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = true;
      },
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false;
      }
    }
  },
  libraries: {
    html2react: {
      // Add a processor to html2react so it processes the <img> tags
      // inside the content HTML. You can add your own processors too.
      processors: [image, ...processors]
    }
  }
};

export default chakraTheme;
