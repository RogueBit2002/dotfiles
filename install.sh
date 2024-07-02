#!/usr/bin/env sh

dir=$(realpath -m $(pwd)/$(dirname "$0"))

create_symlink ()
{
    mkdir -p $(dirname ~/.config/$1)
    ln -sf $dir/$1 ~/.config/$1
}

echo Creating symlinks...

create_symlink hypr/hyprland.conf
create_symlink hypr/hyprpaper.conf
create_symlink kitty/kitty.conf
create_symlink ags/config.js


echo Injecting .bashrc

bashrc_line="[ -f ~/.dotfiles/.bashrc ] && . ~/.dotfiles/.bashrc"

grep -qxF "$bashrc_line" ~/.bashrc || echo "$bashrc_line" >> ~/.bashrc