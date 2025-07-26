type Character = {
   type: "character",
   id: number;
   character: string;
   keyword: string;
   aliases: string[];
   primitives: {
      character: string;
      name: string; // to disambiguate if we should be using the keyword or the alias in this instance
   }[];
};

// non-characters like "丷"
type PurePrimitive = {
   type: "primitive",
   character: string;
   keyword: string;
   aliases: string[];
   primitives: {
      character: string;
      name: string; // to disambiguate if we should be using the keyword or the alias in this instance
   }[];
}

export type HeisigCharacter = Character | PurePrimitive;