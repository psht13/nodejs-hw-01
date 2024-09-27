import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const buffer = await fs.readFile(PATH_DB, 'utf-8');
    return buffer;
  } catch (err) {
    console.error(err.message);
  }
};
