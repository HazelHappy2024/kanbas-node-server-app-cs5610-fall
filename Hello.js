//console.log('Hello World!');
//console.log('Helllo World From Node.js');
export default function Hello(app){
    app.get('/hello', (req, res) => { 
        res.send("Hello World! Life is Good!");
    });
    app.get('/', (req, res) => {
        res.send("Welcome to Full Stack Development!");
     });

}
