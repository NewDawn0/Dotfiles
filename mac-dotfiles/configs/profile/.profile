# Fig pre block. Keep at the top of this file.
. "$HOME/.fig/shell/profile.pre.bash"
# Exports

# Rust
PATH=$PATH:/$HOME.cargo/bin
. "$HOME/.cargo/env"

# Fig post block. Keep at the bottom of this file.
. "$HOME/.fig/shell/profile.post.bash"

# kill
killall MailCacheDelete
killall DeepL
killall DeeplUninstall
killall OneDrive\ File\ Provider
killall OneDrive

