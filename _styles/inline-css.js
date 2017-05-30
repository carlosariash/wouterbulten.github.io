var critical = require('critical');

critical.generate({
    base: '../',
    src: '_site/index.html',
    dest: '_includes/critical-css.css',
    minify: true,
    width: 1300,
    height: 900
});