import * as fs from 'fs/promises';
import type { HeisigCharacter } from '../types/Character';
// import type

type HanziWebsiteCharacter = {
  character: string;
  keyword: string;
  number: number | null;
  pinyin: string[];
  alias: string[];
  decomposition: string[];
  decomposition_names: string[];
  meanings: string[];
};

function mapToHeisigCharacter(this:HanziWebsiteCharacter[], raw: HanziWebsiteCharacter): HeisigCharacter {
   if (raw.number) {
      return {
         type: 'character',
         id: raw.number,
         character: raw.character,
         keyword: raw.keyword,
         aliases: raw.alias,
         primitives: raw.decomposition.map((primitiveCharacter, index) => {
            return {
               character: primitiveCharacter,
               name: raw.decomposition_names[index]
            }
         })
      }
   }

   return {
      type: 'primitive',
      character: raw.character,
      keyword: raw.keyword,
      aliases: raw.alias,
      primitives: raw.decomposition.map((primitiveCharacter, index) => {
         return {
            character: primitiveCharacter,
            name: raw.decomposition_names[index]
         }
      })
   }
}


async function run() {
   // grab a copy from https://github.com/jcklie/hanzi-website/blob/master/data/heisig.json
   const raw: HanziWebsiteCharacter[] = JSON.parse(
      (await fs.readFile('./scripts/heisig.json')).toString()
   );

   const transformedCharacter = raw.map(mapToHeisigCharacter, raw);


   await fs.writeFile(
      './public/collections/simplified-hanzi.json',
      JSON.stringify(transformedCharacter, null, 2),
      'utf-8'
   );

   await fs.writeFile(
      './public/collections/simplified-hanzi.min.json',
      JSON.stringify(transformedCharacter),
      'utf-8'
   );
}
run();