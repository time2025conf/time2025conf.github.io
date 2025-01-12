// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-introduction",
    title: "Introduction",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-call-for-papers",
          title: "Call For Papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/c4p/";
          },
        },{id: "nav-proceedings",
          title: "Proceedings",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/proceedings/";
          },
        },{id: "nav-program",
          title: "Program",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/program/";
          },
        },{id: "nav-registration",
          title: "Registration",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/registration/";
          },
        },{id: "nav-organization",
          title: "Organization",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/organization/";
          },
        },{id: "nav-venue",
          title: "Venue",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/venue/";
          },
        },{id: "news-call-for-papers",
          title: 'Call for papers',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
