import updater from '../file-updater.js';
import getId from '../getter/get-id.js';
import readlinkSync from 'readline-sync';
import reader from '../file-reader.js';

const newHotel = readlineSync.question('New hotel').toLowerCase().trim();
const id = getId('data/hotels.csv');
const regionToAdd = readlineSync.question('Region: ').toLowerCase().trim();
const regions = reader('data/regions.csv');
const filtered = regions.filter((string) => {
  const [, name] = string.split(';');
  return name === regionToAdd ? true : false;
});
console.log(filtered);