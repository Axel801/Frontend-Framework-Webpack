const fs = require('fs');
// import fs from 'fs';

const createDir = (dirpath) => {
    console.log('Creating dir:', dirpath);
    fs.mkdirSync(process.cwd() + dirpath, { recursive: true }, (error) => {
        if (error) {
            console.error('An error occurred:', error);
        } else {
            console.log('Your directory is made');
        }
    });
}


const createFile = (filePath, fileContent) => {
    console.log('Creating file:', filePath);
    fs.writeFile(filePath, fileContent, (error) => {
        if (error) {
            console.error('An error occurred:', error);
        } else {
            console.log('Your file: '+filePath+' is made');
        }
    })
}
console.log('--------Start Scripts--------');

const paths = {
    default: '/',
    current:'./',
    src: {
        default: 'src',
        scss: 'src/scss',
        js: 'src/js',
        fonts: 'src/fonts',
        css: 'src/css',
        img: 'src/img',
        pug: 'src/pug',

    },
   
};


/*----------------CARPETAS-------------------*/

//Creamos directorio principal
createDir(paths.default+paths.src.default);

//Creamos directorio css
createDir(paths.default+paths.src.css);

//Creamos directorio fonts
createDir(paths.default+paths.src.fonts);

//Creamos directorio img
createDir(paths.default+paths.src.img);

//Creamos directorio js
createDir(paths.default+paths.src.js);

//Creamos directorio pug
createDir(paths.default+paths.src.pug);

//Creamos directorio scss
createDir(paths.default+paths.src.scss);



/*----------------FICHEROS-------------------*/


//Creamos js/scripts.js
createFile(paths.current+paths.src.js+'/scripts.js','');

//Creamos scss/styles.js
createFile(paths.current+paths.src.scss+'/styles.scss','');

//Creamos index.pug y agregamos el template
const pug_data = fs.readFileSync(paths.current+'init/index.pug-template.txt', 'utf8');
createFile(paths.current+paths.src.default+'/index.pug',pug_data);

//Creamos app.js y agregamos el template
const js_data = fs.readFileSync(paths.current+'init/app.js-template.txt', 'utf8');
createFile(paths.current+paths.src.default+'/app.js',js_data);



// const pathDir = '/test';
// const content = 'content of my file';
// createDir(pathDir);
// createFile(`.${pathDir}/text.txt`, content)


// exports.createDir = createDir;
// exports.createFile = createFile;

