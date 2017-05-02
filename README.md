# xsvmdc

Node-based utility that receives comma- or tab-separated data data over
standard input (`STDIN`) and formats it into a Markdown table sent to standard
output (`STDOUT`).

If a tab is found on the first line then data is assumed to be tab-separated
otherwise comma-separated.
