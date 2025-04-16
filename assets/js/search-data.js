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
        },{id: "nav-important-dates",
          title: "Important Dates",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/dates/";
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
        },{id: "nav-registration",
          title: "Registration",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/registration/";
          },
        },{id: "nav-program",
          title: "Program",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/program/";
          },
        },{id: "nav-proceedings",
          title: "Proceedings",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/proceedings/";
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
