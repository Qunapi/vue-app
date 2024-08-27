const pagesKey = "pages";

localStorage.setItem(
  pagesKey,
  JSON.stringify([
    {
      link: { linkText: "Home", linkUrl: "index.html" },
      pageTitle: "Home Page",
      content: "This is the home content",
      published: true,
    },
    {
      link: { linkText: "About", linkUrl: "about.html" },
      pageTitle: "About Page",
      content: "This is the about content",
      published: true,
    },
    {
      link: { linkText: "Contact", linkUrl: "contact.html" },
      pageTitle: "Contact Page",
      content: "This is the contact content",
      published: false,
    },
  ])
);

let pageJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pageJson);

export default {
  getAllPages() {
    return pagesStore;
  },

  getSinglePage(index) {
    return pagesStore[index];
  },

  editPage(index, page) {
    pagesStore[index] = page;

    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));

  },
};
