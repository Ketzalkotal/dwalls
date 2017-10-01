TOPLEVEL=$(git rev-parse --show-toplevel)

alias act='. venv/bin/activate'
alias runserver='python $TOPLEVEL/dwalls_channels/manage.py runserver'
alias npwatch='cd $TOPLEVEL/dwalls_channels/dwalls && npm run watch'
alias toplevel='cd $TOPLEVEL'

