# streamlink chrome extension for windows
## Installation
### Install ActivePerl
[ActivePerl](http://www.activestate.com/activeperl/downloads)

### Add streamlink to your %PATH%

Advanced system settings-Environment variables-Path-Edit-New
add python's path, for me it is %userprofile%\\AppData\\Local\\Programs\\Python36\\Python\\Scripts

### Install Url Scheme to the system

double-click `install-url-scheme.reg`
this will install a url scheme to your system called 'streamlink'

### Install scripts

copy `streamlinkrun.bat` to `%USERPROFILE%`
copy `streamlinkrun.pl` to `%USERPROFILE%`

### Enable Chrome developer mode
Setting - Extensions - developer mode

### Install Chrome Extension
Copy the directory `streamlink-chrome-extension` to where you like and in Chrome click `load unzipped extension`, select the `streamlink-chrome-extension` directory.

## Uninstall
delete the `streamlink-chrome-extension` directory on your computer.
delete the extension in Chrome and disable developer mode.
delete `streamlinkrun.pl` and `streamlinkrun.bat` under `%USERPROFILE%`
double-click `uninstall-url-scheme.reg` to remove url scheme reg entry.
