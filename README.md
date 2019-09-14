# Amharic Phonetic Translator

PhonemeTranslator uses simple phoneme extraction and substitution to translate Amharic word pronunciations written in English to the actual Amharic text representation. It divides the text into sounds that distinguish word meanings based on the seven vowel phonemes in Amharic. Furthermore, Amharic has a rich consonant system. A distinguishing feature of consonants in Amharic is the presence of emphatic sounds which are produced with the root of the tongue retracted. All sounds are represented either with a set of english consonant letters or a combination of consonants and a vowel.

 Depending on the way the Amharic word is used, the same English letter can be used to represent different pronunciations. For example, the word 'Gebeya' is pronounced as [Ge-be-ya] and when these phonemes are converted to Amharic, it's represented as [ገ - በ - ያ]. Similarly the word Gete is written as [Ge - te] when it's represented as a set of phonemes. However, in this context, the phoneme 'Ge' is pronounced as ጌ not ገ. For this reason, PhonemeTranslator provides an array of possible translations based on how a phoneme might be used. This means, the word 'Gebeya' is translated as [ 'ጌቤያ', 'ጌበያ', 'ገቤያ', 'ገበያ' ].


## Installation
```bash

npm install --save amharic-phonetic-translator

```

## Importing
```js
// Using Node.js `require()`
const PhonemeTranslator = require('amharic-phonetic-translator');

// Using ES6 imports
import PhonemeTranslator from 'amharic-phonetic-translator';
```

## using the translator
```js

let amharicTranslator = new PhonemeTranslator();
console.log(amharicTranslator.matchToAmharicPhonems('gebeya'));
```

## License
MIT ©  yabetse065
