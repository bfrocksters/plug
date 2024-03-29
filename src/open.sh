#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
CMD="clear && $*"

ITERM_EXISTS=`osascript <<EOF
set doesExist to false
try
    do shell script "osascript -e 'exists application \"iTerm\"'"
    set doesExist to true
end try
return doesExist
EOF`
function open_iterm () {
  osascript > /dev/null <<EOF
  tell application "iTerm"
    activate
    try
      tell the first terminal
        launch session "Default Session"
        tell the last session
          write text "bash -c \"$CMD\""
        end tell
      end tell
    on error
      tell (make new terminal)
        launch session "Default Session"
        tell the last session
          write text "bash -c \"$CMD\""
        end tell
      end tell
    end try
  end tell
EOF
}
function open_iterm2point9 () {
  osascript > /dev/null <<EOF
  tell application "iTerm"
  	if version ≥ 2.9 then
      activate
  		tell current window
  			create tab with default profile
  			tell first session of current tab
  				write text "bash -c \"$CMD\""
  			end tell
  		end tell
  	end if
  end tell
EOF
}
function open_terminal () {
  osascript > /dev/null <<EOF
  tell application "Terminal" to activate
  delay 0.4
  tell application "System Events" to keystroke "t" using command down
  tell application "Terminal"
    do script "bash -c \"$CMD\"" in window 1
  end tell
EOF
}
if [ "$ITERM_EXISTS" == "true" ]; then
  open_iterm2point9 "$@" || open_iterm "$@" || open_terminal "$@"
else
  open_terminal "$@"
fi
