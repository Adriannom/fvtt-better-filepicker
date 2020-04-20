function toggleThumbnails(e) {
  let lis = e.parentElement.parentElement.querySelectorAll('.file-directory li');
  lis.forEach((li) => {
    li.classList.toggle('thumbsUp');
    li.querySelector('img').src = li.getAttribute('data-path');
  });
}

Hooks.on("init", () => {
  const oldFilePickerOptions = FilePicker.defaultOptions;
  Object.defineProperty(FilePicker, "defaultOptions", {
    get: () => {
      return mergeObject(oldFilePickerOptions, {
        template: "modules/better-filepicker/filepicker.html",
        classes: ["filepicker"],
        width: 500,
        tabs: [{navSelector: ".tabs"}]
      });
    }
  });
  console.log(FilePicker.defaultOptions.template);
});
