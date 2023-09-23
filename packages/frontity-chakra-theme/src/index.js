import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import processors from "./components/styles/processors";
import {
  GetAllCategoriesHandler,
  PublicationsHandler,
  MenuHandler,
  EventsHandler,
  PublicationSubcategoryHandler,
  GetPostsByCategory,
} from "./components/handlers";
// import { theme } from "@chakra-ui/react";

const chakraTheme = {
  name: "frontity-chakra-theme",
  roots: {
    // In Frontity, any package can add React components to the site.
    // We use roots for that, scoped to the "theme" namespace.
    theme: Theme,
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
      logo: "https://sawtee.org/images/logo-sawtee.webp",
      showBackgroundPattern: true,
      showSocialLinks: true,
      /**
       * socialLinks: [
            ["pinterest", "https://www.pinterest.com/frontity/"],
            ["facebook", "https://www.instagram.com/frontity/"],
            ["twitter", "https://www.twitter.com/frontity/"]
          ],
       */
      socialLinks: [],
      menu: [],
      featured: {
        showOnArchive: false,
        showOnPost: true,
      },

      colors: {
        darkgray: {
          base: "#6D6D6D",
          light: "#DCD7CA",
          lighter: "#F5EFE0",
        },
        primary: {
          50: "#e1f8ff",
          100: "#bee4f1",
          200: "#9ad1e5",
          300: "#74bed9",
          400: "#50acce",
          500: "#3892b4",
          600: "#29728d",
          700: "#1a5165",
          800: "#09313f",
          900: "#001219",
        },
        accent: {
          50: "#e3f7fb",
          100: "#cbdfe3",
          200: "#afc8ce",
          300: "#92b2ba",
          400: "#759ca5",
          500: "#5b838b",
          600: "#45666d",
          700: "#30494f",
          800: "#192d31",
          900: "#001115",
        },
        light: {
          50: "#f0f4f3",
          100: "#d9dcdb",
          200: "#bec6c3",
          300: "#a3b0ac",
          400: "#879a94",
          500: "#6d807a",
          600: "#55645f",
          700: "#3e4744",
          800: "#252b29",
          900: "#0b0f0d",
        },
        headerBg: "#e8f3ff",
        footerBg: "#006181",
        linkColor: "rgba(8 ,126, 164, 1)",
      },
      isSearchModalOpen: false,
      isMobileMenuOpen: false,
      autoPreFetch: "all",
    },
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
      },
      beforeSSR: async ({ actions }) => {
        await actions.source.fetch("/menu/primary/");
        await actions.source.fetch("/menu/footer/");
        await actions.source.fetch("get-all-categories");
        // await actions.source.fetch("/subscription-page");
        // await actions.source.fetch("/publications/trade-insight/");
        // await actions.source.fetch("/publications/books/");
        // await actions.source.fetch("get-publications-categories-posts");
      },
    },
  },
  libraries: {
    html2react: {
      // Add a processor to html2react so it processes the <img> tags
      // inside the content HTML. You can add your own processors too.
      processors: [image, ...processors],
    },
    source: {
      handlers: [
        GetAllCategoriesHandler,
        MenuHandler,
        PublicationsHandler,
        EventsHandler,
        PublicationSubcategoryHandler,
        GetPostsByCategory,
      ],
    },
  },
};

export default chakraTheme;
