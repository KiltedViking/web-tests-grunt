# Folder `downloads`

This folder contains libraries manually downloaded, either because they aren't available through npm or aren't available for download any more (or because I couldn't be bothered spending time to research how to fix ;-)).

## Libraries

* jQuery UI (version 1.12.1) - used in misc. examples (mainly in `javascript`?) [folder: `jquery.xslt.build.full.js-0.0.5`].
* jQuery.XSLT (version 0.0.5) - used by XML examples and examples in `web20` [folder: `jquery-ui-1.12.1`].

### How-to

Download libraries and place source files (`*.css` and `*.js`) in named folders above and Grunt should copy files to relevant folders in `dist`. (Only CSS and JavaScript files should be copied, i.e. complete set of source files should be OK to have in named folders above. ;-))