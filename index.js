/*
ISC License

Copyright (c) 2017, Atif Aziz

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
*/

const stdin = process.stdin, stdout = process.stdout;

stdin.setEncoding('utf8');

let lines = [];

require('readline')
    .createInterface(stdin, stdout)
    .on('line', line => lines.push(line))
    .on('close', () => {
        if (lines.length > 0) {
            const tab = '\t'
            const delimiter = lines[0].toString().indexOf(tab) >= 0 ? tab : ',';
            const xsv = lines.join('\n');
            const csvToMarkdown = require('csv-to-markdown-table');
            stdout.write(csvToMarkdown(xsv, delimiter, true));
        }
    });
