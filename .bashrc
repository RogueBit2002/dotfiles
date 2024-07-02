#PROMPT_COMMAND='PS1_CMD1=$(echo -e "$(bun ~/.dotfiles/rev-trunc-wd.js 16 ...)"); PS1_CMD2=$(git branch --show-current 2> /dev/null | sed '"'"'s/^/ - (/; s/$/)/'"'"')'; 
#PS1='┬─[\u@\h  ${PS1_CMD1}]${PS1_CMD2}\n╰─$ '


. ~/.dotfiles/ps1.sh

#echo -e "$(cat ~/.dotfiles/shell-greeting)"