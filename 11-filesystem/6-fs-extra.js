import { copy, ensureFile, pathExists} from "fs-extra"

const VALID_PATH = '/Users/user/Desktop/CV_Shevel.pdf';
const INVALID_PATH = '/Users/user/Desktop/asdfasdf';

const file = '5-result.json';
const newFile = '6-result.json';


await copy(file, newFile);
console.log(await ensureFile(VALID_PATH));
console.log(await pathExists(INVALID_PATH));