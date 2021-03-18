// Colour definitions
var clover500 = '#59a815';
var charcoal800 = '#333a4e';
var iceberg500 = '#00a6a7';
var lava500 = '#f54844';
var smoke500 = '#9e9e9e';
var smoke900 = '#212121';
var glacier500 = '#1894ac';
var volcano500 = '#df1616';

var fontFamily = 'Avenir, Helvetica, Arial, sans-serif';

Redoc.init('/specification.yaml', {
    scrollYOffset: 60,
    theme: {
        colors: {
            success: {
                main: clover500,
            },
            error: {
                main: lava500,
            },
            http: {
                get: clover500,
                post: glacier500,
                delete: volcano500,
                put: smoke500,
            },
        },
        codeBlock: {
            backgroundColor: smoke900,
        },
        typography: {
            fontFamily: fontFamily,
            headings: {
                fontFamily: fontFamily,
            },
            links: {
                color: iceberg500,
            }
        },
        rightPanel: {
            backgroundColor: charcoal800,
        },
    }
}, document.getElementById('redoc-container'));
