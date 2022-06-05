const files = import.meta.globEager("../pages/*.vue");
const pages = [];

Object.keys(files).forEach((file) => {
  let fileNameWithExt = /\w+.vue$/.exec(file);

  if (!fileNameWithExt) {
    return null;
  }

  const fileName = fileNameWithExt[0].split(".")[0].toLowerCase();
  let path = `/${fileName}`;
  let component = files[file].default;

  if (fileName.includes("homepage")) {
    path = "/";
  }

  if (fileName.includes("notfound")) {
    path = "/:pathMatch(.*)*";
  }

  if (fileName.includes("item")) {
    let name = fileName.split("item")[0];
    path = `/${name}/:id`;

    // append edit, create route
    pages.push({
      path: `/${name}/create`,
      component
    });

    pages.push({
      path: `/${name}/edit`,
      component
    });
  }

  pages.push({
    path,
    component,
  });
});

export default pages;
