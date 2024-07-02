cback="\e[48;5;"
cfront="\e[38;5;"

creset="\e[0m"

cblue="38m"
ctan="223m"
cred="203m"

csection1=$cblue
csection2=$ctan


symbol_branch=$(echo -e "\uF418")
symbol_triangle=$(echo -e "\uE0B0");
symbol_hcircle_right=$(echo -e "\uE0B4");
symbol_hcircle_left=$(echo -e "\uE0B6");


create_prompt() {
    location=$(bun ~/.dotfiles/rev-trunc-wd.js)

    section1=$(echo -e "$cfront$cblue")

    colortext="$cfront$blue"

    branch=$(echo $(git branch --show-current 2> /dev/null))

    section_user="\e[38;5;38m$symbol_hcircle_left\e[0m\e[48;5;38m@\u "
    section_location="\e[38;5;38m\e[48;5;223m$symbol_triangle\e[0m\e[48;5;223m $location "
    section_git="\e[48;5;203m\e[38;5;223m$symbol_triangle "
    if [ ! -z "$branch" ] 
    then
        echo "Found a branch!"
        echo "$branch"
        section_git="$section_git$branch "
    fi
    section_git="$section_git\e[0m\e[38;5;203m$symbol_hcircle_right\e[0m"
    #echo $branch
    user="@\u"
    PS1="${section_user}${section_location}${section_git} $"
}

create_prompt2() {
    location=$(bun ~/.dotfiles/rev-trunc-wd.js)
    

    PS1="\[\e[38;5;23m\]${symbol_hcircle_left}\[\e[0m\e[48;5;23m\]"
    PS1="${PS1}@\u "
    PS1="${PS1}\[\e[38;5;23m\e[48;5;94m\]${symbol_triangle}\[\e[38;5;15m\] "
    
    PS1="${PS1}${location} "
    PS1="${PS1}\[\e[38;5;94m\e[48;5;24m\]${symbol_triangle}\[\e[38;5;15m\]"
    PS1="${PS1}\[\e[0m\e[38;5;24m\]${symbol_hcircle_right}\[\e[0m\]"
}

PROMPT_COMMAND=create_prompt2
#PROMPT_COMMAND=create_prompt