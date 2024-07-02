#!/usr/bin/env sh

cd $(dirname "$0")
killall waybar
#waybar -s ./style.css & disown
waybar & disown