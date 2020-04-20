# fvtt-better-filepicker
Module for Foundry Virtual Table Top. Toggle image thumbnails in the file picker. Also improves file picker visibility on small screens.

## Installation
### Method 1
- Start up Foundry and click "Install Module" in the "Add-On Modules" tab.
- Paste the link: `https://raw.githubusercontent.com/Adriannom/fvtt-better-filepicker/master/module.json`
- Click "Install" and it should appear in your modules list.
- Launch a world, then go to the settings tab and enable the module in module settings.

### Method 2
- Download the [.zip file](https://github.com/Adriannom/fvtt-better-filepicker/archive/master.zip) in this repository.
- Extract the contents of the zip in `~/foundrydata/Data/modules/`, or wherever your modules directory is.
- Restart Foundry.
- Launch a world, then go to the settings tab and enable the module in module settings.

## Usage
When choosing an image in the file picker there will be a new button, "Toggle Thumbnails". Click it to load all the images in the current directory as thumbnails.

![Better Filepicker Preview](https://raw.githubusercontent.com/Adriannom/fvtt-better-filepicker/master/better-filepicker-preview.png)

Note that it will load the full size image and display it really small, so lots of 10mb files would take time and bandwidth to display. To save bandwidth, the images won't actually load until you click the Toggle Thumbnails button.