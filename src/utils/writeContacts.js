import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    fs.writeFile(PATH_DB, updatedContacts, 'utf-8');
  } catch (err) {
    console.error(err.message);
  }
};
