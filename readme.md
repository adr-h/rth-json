# Remembering The ... Heisig method JSONs

## What
- `public/collections/simplified-hanzi.min.json`
  - JSON list of Heisig keywords for Simplified Hanzi
- `public/scripts/getHeisigHanzi.js`
  - a script that exposes a dead simple `getHeisigSimplifiedHanzi` function on the `window`
  - script has the entire JSON list bundled in it, for convenience

## Why
- Needed a quick way to lookup Heisig keywords for my own personal Anki deck

## What next?
- Might add a list for Kanzi + Trad Hanzi eventually. Probably not anytime soon.
- Build a separate JSON list that will include stories (i.e: _not_ to be ripped directly from Heisig's book, but self-produced and/or via LLM)

## Acknowledgement
- Original JSON was sourced from https://github.com/jcklie/hanzi-website and transformed using `conversion-scripts/convert.ts` to transform the fields into a shape that would fit my use case
