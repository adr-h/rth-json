import { HeisigCharacter } from '../../types/Character';
import SimplifiedHanziList from '../collections/simplified-hanzi.json';

function getHeisigSimplifiedHanzi(character: string): HeisigCharacter | undefined {
   return SimplifiedHanziList.find(c => c.character === character)
}

window['getHeisigSimplifiedHanzi'] = getHeisigSimplifiedHanzi;
