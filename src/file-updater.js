import getPath from './get-path.js';
import fs from 'fs';
import readlineSync from 'readline-sync';
import reader from './file-reader.js';

const updater = (fPath, pattern) => {
    const filePath = getPath(fPath);
    // const newData = readlineSync.question('New region').toLowerCase().trim();
    // const id = reader('data/regions.csv').split('\n').length;
    // console.log(id);
    fs.appendFileSync(filePath, pattern, 'utf-8');
    return true;
}

export default updater;