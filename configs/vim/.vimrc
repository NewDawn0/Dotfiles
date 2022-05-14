syntax enable
syntax on

filetype plugin on
filetype indent on

if $COLORTERM == 'gnome-terminal'
    set t_Co=256
endif
if $COLORTERM == 'gnome-terminal'
    set t_Co=256
endif
if has("gui_running")
    set guioptions-=T
    set guioptions-=e
    set t_Co=256
    set guitablabel=%M\ %t
endif

set encoding=utf8
set ffs=unix,dos,mac

colorscheme catppuccin
set showmatch
set mat=2
set magic
set lazyredraw
set incsearch
set hlsearch
set smartcase
set ruler
set cmdheight=1
set hid
set history=500
set hidden

set backspace=indent,eol,start
set whichwrap+=<,>,h,l

set expandtab
set smarttab
set shiftwidth=4
set tabstop=4
set lbr
set tw=500
set ai "Auto indent
set si "Smart indent
set wrap "Wrap lines

set noerrorbells
set novisualbell
set t_vb=
set tm=500

set nobackup
set nowb
set noswapfile

if has("gui_macvim")
    autocmd GUIEnter * set vb t_vb=
endif

fun! CleanExtraSpaces()
    let save_cursor = getpos(".")
    let old_query = getreg('/')
    silent! %s/\s\+$//e
    call setpos('.', save_cursor)
    call setreg('/', old_query)
endfun

if has("autocmd")
    autocmd BufWritePre *.txt,*.js,*.py,*.wiki,*.sh,*.coffee :call CleanExtraSpaces()
endif
set background=dark
call plug#begin('~/.vim/plugged')
Plug 'vim-scripts/vim-plug'
Plug 'neoclide/coc.nvim', { 'branch': 'release'}
Plug 'ghifarit53/tokyonight-vim'
Plug 'sheerun/vim-polyglot'
Plug 'itchyny/lightline.vim'
Plug 'junegunn/fzf.vim'
Plug 'mattn/emmet-vim'
Plug 'alvan/vim-closetag'
Plug 'honza/vim-snippets'
Plug 'norcalli/nvim-colorizer.lua'
Plug 'vimwiki/vimwiki'
Plug 'mhinz/vim-startify'
Plug 'rrethy/vim-hexokinase', { 'do': 'make hexokinase' }
Plug 'tpope/vim-fugitive'
Plug 'honza/vim-snippets'
Plug 'jiangmiao/auto-pairs'
Plug 'neoclide/coc.nvim'
Plug 'valloric/youcompleteme'
Plug 'junegunn/fzf'
Plug 'weirongxu/coc-explorer'
Plug 'mattn/emmet-vim'
call plug#end()
