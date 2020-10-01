const fs = require('fs');

const html = fs.readFileSync('dist/demo.html').toString();

const hackedHtml = html.replace('<script src="https://unpkg.com/vue"></script>', `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easymde@2.12.0/dist/easymde.min.css">
<script src="https://unpkg.com/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/easymde@2.12.0/src/js/easymde.min.js"></script>
`);

fs.writeFileSync('dist/demo.html', hackedHtml);
