const { exec, spawn } = require('child_process');
const util = require('util');
const fs = require('fs');
const execCmd = util.promisify(exec);


const PIPE_NAME = '/tmp/foo-pipe';

if (!fs.existsSync(PIPE_NAME)) {
    console.log('Creating named pipe...');
    execCmd(`mkfifo ${PIPE_NAME}`)
        .then(run)
        .catch(console.log)
} else {
    run();
}

function run() {
    console.log('Starting producer program...');
    const producer = spawn('go', ['run', 'producer.go']);
    producer.stderr.on('data', (data) => {
        console.error(data.toString());
    });
    producer.on('exit', (code) => {
        console.log(`Producer exited with code ${code}`);
    });

    console.log('Starting consumer program...');
    const consumer = fs.createReadStream(PIPE_NAME);
    consumer.on('data', (data) => {
    console.log('++ ' + data.toString());
    });
}



