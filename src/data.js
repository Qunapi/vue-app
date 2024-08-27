const pagesKey = "pages";

localStorage.setItem(
  pagesKey,
  JSON.stringify([
    {
      link: { linkText: "Home", linkUrl: "index.html" },
      pageTitle: "Home Page",
      content: "This is the home content lOLOLO",
      published: true,
    },
    {
      link: { linkText: "About", linkUrl: "about.html" },
      pageTitle: "About Page",
      content: "This is the about content aaaaaaaaaaaaa",
      published: true,
    },
    {
      link: { linkText: "Contact", linkUrl: "contact.html" },
      pageTitle: "Contact Page",
      content: "This is the contact content asdf sad",
      published: false,
    },
  ])
);

let pageJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pageJson);

function save() {
  localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
}

export default {
  addPage(page) {
    pagesStore.push(page);

    save();
  },
  getAllPages() {
    return pagesStore;
  },

  getSinglePage(index) {
    return pagesStore[index];
  },

  editPage(index, page) {
    pagesStore[index] = page;

    save();
  },
  removePage(index) {
    pagesStore.splice(index, 1);

    save();
  },
};
