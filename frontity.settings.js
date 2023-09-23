const settings = {
  name: "sawtee-frontity",
  state: {
    frontity: {
      // url: "https://sawtee.org/backend",
      title: "SAWTEE",
      description: "South Asia Watch on Trade, Economics and Environment",
      year: "1994",
      logo: "/assets/logo-sawtee.webp",
    },
  },
  packages: [
    {
      name: "frontity-chakra-theme",
      state: {
        theme: {
          menu: [
            // ["Home", "/"],
            // ["About Us", "/about/"],
            // ["Our Work", "/our-work/"],
            // ["Publications", "/publications/"],
            // ["Events", "/featured-events/"],
          ],
          socialLinks: [
            ["facebook", "https://www.facebook.com/sawteenp/"],
            ["twitter", "https://www.twitter.com/SAWTEENP/"],
            ["linkedin", "https://www.linkedin.com/sawteenp/"],
            ["youtube", "https://www.youtube.com/@sawteenp/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://sawtee.org/backend",
          // homepage: "home",
          // postsPage: "blog",
          params: {
            orderBy: "id",
            order: "desc",
            per_page: 10,
          },
          postTypes: [
            {
              type: "featured-events",
              endpoint: "featured-events",
              archive: "/featured-events",
            },
            {
              type: "publications",
              endpoint: "publications",
              archive: "/publications",
            },
            {
              type: "newsletters",
              endpoint: "newsletters",
              archive: "/newsletters",
            },
            {
              type: "research",
              endpoint: "research",
              archive: "/research",
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
