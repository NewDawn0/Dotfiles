# Fig pre block. Keep at the top of this file.
. "$HOME/.fig/shell/zshrc.pre.zsh"
################ Fig autcomplete  #################
################ Credits  #########################
# ================
# Ⓒ NewDawn0 (Tom)
# ================

################ General ##########################
#Disable mails
MAILCHECK=0

################ WM ###############################
#Yabai
alias restartYabai="launchctl kickstart -k \"gui/${UID}/homebrew.mxcl.yabai\""
alias yabaiOff="brew services stop yabai"
alias yabaiOn="brew services start yabai"

################ Exports ##########################
export TERM=xterm-256color                 # 256 color
HISTCONTROL=ignoredups:erasedups           # no duplicate entries
export PATH="$HOME/.deno/bin:$PATH"
export EDITOR=vim
export ALPHAVANTAGE_API_KEY=<your alphavantage api key>
export CLICOLOR=1
source ~/.zprofile
export python='python3'
#export PATH="/usr/local/opt/python/libexec/bin:$PATH"
export LIBTOOL=`which glibtool`
export LIBTOOLIZE=`which glibtoolize`

################ ZSH ##############################
source ~/.local/share/zsh/plugins/zsh-shift-select/zsh-shift-select.plugin.zsh
fpath+=$HOME/.zsh/pure
source $HOME/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
fpath+=$HOME/.zsh/pure
#autoload -U promptinit; promptinit

# Pure
#prompt pure
fpath+=$HOME/.zsh/pure

# Starship
eval "$(starship init zsh)"

# p10k
#source ~/powerlevel10k/powerlevel10k.zsh-theme
#ZSH_THEME="powerlevel10k/powerlevel10k"

HISTSIZE=10000
SAVEHIST=10000
HISTFILE=~/.cache/zsh/history
autoload -U colors && colors
autoload -U compinit
zstyle ':completion:*' menu select
zmodload zsh/complist
compinit
_comp_options+=(globdots)

################ Aliases  ##########################
# Brew
alias brewup='brew update && brew upgrade'
alias brewin='brew install'
alias brewrm='brew remove'
alias brewrein='brew reinstall'
alias brewse='brew search'

# General
alias touch='create $1'
alias choose='ls | choose'
alias reload='clear; source ~/.zshrc'
alias ls='exa'
alias lsa='ls -a --color=auto'
alias lsall='ls -lah --color=auto'
alias lsl='exa --long'
alias lt='exa -aT --color=always --group-directories-first'
alias grep='grep --color=auto'
alias home='cd /Users/tom'
alias uninstall="mdfind -name \"$1\" | xargs -I {} sudo mv {} ~/.Trash/"
alias whoami='echo "you tell me"; who'
alias playwav='mpv *.wav'
alias playogg='mpv *.ogg'
alias playmp3='mpv *.mp3'
alias playavi='vlc *.avi'
alias playmov='vlc *.mov'
alias playmp4='vlc *.mp4'
alias playascii='mplayer -vo caca -ontop -noborder -geometry 256x144+1095+600 -loop   0 -idle -fixed-vo -msglevel all=-1 2>/dev/null'
alias ytdl-mp3="youtube-dl --extract-audio --audio-format mp3 "
alias ytdl="youtube-dl"
alias clearFile='cat /dev/null > $1'
alias rr='curl -s -L https://raw.githubusercontent.com/keroserene/rickrollrc/master/  roll.sh | bash'
alias clearhist='rm -r ~/.zsh_history'
alias qfinder="osascript -e 'tell application \"finder\" to quit'"
alias search='ls -la | grep'
alias zshrce='vim ~/.zshrc'
alias zshconfe='vim /Users/tom/zsh/zshconf.txt'
alias superstonk='superstonk -interval 1 -symbol'
alias drive='ssh pi@192.168.1.124'
alias def='dict'
alias img='timg $*'

################ Functions ########################
up () {
  local d=""
  local limit="$1"

  # Default to limit of 1
  if [ -z "$limit" ] || [ "$limit" -le 0 ]; then
    limit=1
  fi

  for ((i=1;i<=limit;i++)); do
    d="../$d"
  done
  # perform cd. Show error if cd fails
  if ! cd "$d"; then
    echo "Couldn't go up $limit dirs.";
  fi
}
ex () {
  if [ -f "$1" ] ; then
    case $1 in
      *.tar.bz2)   tar xjf $1   ;;
      *.tar.gz)    tar xzf $1   ;;
      *.bz2)       bunzip2 $1   ;;
      *.rar)       unrar x $1   ;;
      *.gz)        gunzip $1    ;;
      *.tar)       tar xf $1    ;;
      *.tbz2)      tar xjf $1   ;;
      *.tgz)       tar xzf $1   ;;
      *.zip)       unzip $1     ;;
      *.Z)         uncompress $1;;
      *.7z)        7z x $1      ;;
      *.deb)       ar x $1      ;;
      *.tar.xz)    tar xf $1    ;;
      *.tar.zst)   unzstd $1    ;;
      *)           echo "'$1' cannot be extracted via ex()" ;;
    esac
  else
    echo "'$1' is not a valid file"
  fi
}
getIps () {
    GREEN='\033[01;32m'
    BLUE='\033[01;34m'
    PURPLE='\033[01;35m'
    CYAN='\033[01;36m'
    NONE='\033[0m'
    seq 255 | xargs -I {} arp 192.168.1.{} | grep -v "no entry" | awk -v c=$CYAN -v g=$GREEN -v b=$BLUE -v p=$PURPLE -v n=$NONE \
    '{printf g$2n "\t" c$4n "    \t"b$6n "  "b$7n "\t"p$1n"\n"} '
}
getIpInfo () {
  CYAN='\033[01;36m'
  NONE='\033[0m'
  hostname=$(hostname)
  ip=$(ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}')
  publicIp=$(wget -qO - http://ipecho.net/plain; echo)
  macAddr=$(ifconfig en0 | awk '/ether/{print $2}')
  echo -e "$CYAN Hostname$NONE    $hostname"
  echo -e "$CYAN Local Ip$NONE    $ip"
  echo -e "$CYAN Public Ip$NONE   $publicIp"
  echo -e "$CYAN Mac Address$NONE $macAddr"
}
listalias ()
{
    ALIASES=`alias | cut -d '=' -f 1`
    echo "$COMMANDS"$'\n'"$ALIASES" | sort -u
}


################ Startup ##########################
clear
#bash /Users/tom/zsh/zshstartup.sh
#/Users/tom/zsh/weather baden
pac
#unix
#gh-cal NewDawn0
################ Fig autcomplete  #################

# Fig post block. Keep at the bottom of this file.
. "$HOME/.fig/shell/zshrc.post.zsh"

