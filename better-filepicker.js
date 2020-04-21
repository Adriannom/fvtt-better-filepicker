function toggleThumbnails(e, size) {
  console.log("Running");
  let lis = e.parentElement.parentElement.parentElement.querySelectorAll('.file-directory li.file');
  lis.forEach((li) => {
    li.classList.remove('small-thumbs', 'large-thumbs');
    if (size) {
      li.classList.add(size + '-thumbs');
    }
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
        tabs: [{navSelector: ".tabs"}],
        resizable: true
      });
    }
  });
  console.log(FilePicker.defaultOptions.template);
});
