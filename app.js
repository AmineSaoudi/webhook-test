import express from 'express';
import { exec } from 'child_process';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hi")
});

app.post('/webhook', (req, res) => {
    // exec('bash /path/to/deploy.sh', (err, stdout, stderr) => {
    //     if (err) {
    //         console.error('Deploy failed:', stderr);
    //         return res.sendStatus(500);
    //     }
    //     console.log('Deploy output:', stdout);
    //     res.sendStatus(200);
    // });

    console.log("Push detected")
});



app.listen(3000, () => console.log('Listening for webhook on port 3000'));
