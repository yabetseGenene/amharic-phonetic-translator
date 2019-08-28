/**
 *
 *
 * @summary Translates Amharic pronunciations written in English letters to a set of
 * Amharic letter represenations.
 *
 * @description PhonemeTranslator uses simple phoneme extraction and substituiton to
 * translate Amharic word pronunciations written in Englih to the actual amharic text
 * represenation. It divides the text into sounds that distinguish word meanings
 * based on the seven vowel phonemes in Amharic. Futhermore, Amharic has a rich consonant system.
 * A distinguishing feature of consonants in Amharic is the presence of emphatic sounds which
 * are produced with the root of the tongue retracted. All sounds are represented either with
 * a set of english consonant letters or a combination of consonants and a vowel.

 * Depending on the way the Amharic word is used, the same English letter can be used to
 * represent different pronunciations. For example, the word 'Gebeya' is pronounced as [Ge-be-ya]
 * and when these phonemes are converted to Amharic, it's represented as [ገ - በ - ያ]. Similarly the
 * word Gete is written as [Ge - te] when it's represented as a set of phonemes. However, in this
 * context, the phoneme 'Ge' is pronounced as ጌ not ገ. For this reason, PhonemeTranslator proivdes
 * an array of possible translations based on how a phoneme might be used. This means, the word
 * 'Gebeya' is translated as [ 'ጌቤያ', 'ጌበያ', 'ገቤያ', 'ገበያ' ].
 *
 *
 * @link   https://github.com/yabetseGenene/amharic-phonetic-translator
 * @file   This files defines the PhonemeTranslator class.
 * @author Yabetse Genene
 */

/**
* Creates a new PhonemeTranslator.
* @class
*/
class PhonemeTranslator {
  constructor(){

    /**
     * Holds a list of vowels.
     * @access public
     * @type   {Array.<String>}
     * @memberof PhonemeTranslator
     */
    this.vowels = ['a', 'e', 'i', 'o', 'u'];

    /**
     * Holds a list of phonemes that don't have a vowel in their representation.
     * @access public
     * @type   {Array.<String>}
     * @memberof PhonemeTranslator
     */
    this.specialPhonemes = ['ts', 'sh', 'gn', 'ch'];

    /**
     * A mapping from English letter represenation of phonemes to a letter representation in Amharic.
     * @access public
     * @type   {Object}
     * @memberof PhonemeTranslator
     */
    this.amharicPhoneticMap = {};

    this.amharicPhoneticMap.__proto__.set = (key, value) => {
        this.amharicPhoneticMap[key] = value;
    }
    this.amharicPhoneticMap.__proto__.get = (key) => {
        return this.amharicPhoneticMap[key]
    }
    this.setMapping();
  }


  /**
   * Initializes and sets the mapping of phonemes from English letters to Amharic.
   *
   * @access     public
   */
  setMapping(){
      this.amharicPhoneticMap.set('h', 'ህ');
      this.amharicPhoneticMap.set('ha', 'ሃ');
      this.amharicPhoneticMap.set('he', ['ሄ', 'ሀ']);
      this.amharicPhoneticMap.set('hi', 'ሂ');
      this.amharicPhoneticMap.set('ho', 'ሆ');
      this.amharicPhoneticMap.set('hu', 'ሁ');

      this.amharicPhoneticMap.set('l', 'ል');
      this.amharicPhoneticMap.set('la', 'ላ');
      this.amharicPhoneticMap.set('le', ['ሌ', 'ለ']);
      this.amharicPhoneticMap.set('li', 'ሊ');
      this.amharicPhoneticMap.set('lo', 'ሎ');
      this.amharicPhoneticMap.set('lu', 'ሉ');

      this.amharicPhoneticMap.set('m', 'ም');
      this.amharicPhoneticMap.set('ma', 'ማ');
      this.amharicPhoneticMap.set('me', ['ሜ', 'መ']);
      this.amharicPhoneticMap.set('mi', 'ሚ');
      this.amharicPhoneticMap.set('mo', 'ሞ');
      this.amharicPhoneticMap.set('mu', 'ሙ');

      this.amharicPhoneticMap.set('s', 'ስ');
      this.amharicPhoneticMap.set('sa', 'ሳ');
      this.amharicPhoneticMap.set('se', ['ሴ', 'ሰ']);
      this.amharicPhoneticMap.set('si', 'ሲ');
      this.amharicPhoneticMap.set('so', 'ሶ');
      this.amharicPhoneticMap.set('su', 'ሱ');

      this.amharicPhoneticMap.set('r', 'ር');
      this.amharicPhoneticMap.set('ra', 'ራ');
      this.amharicPhoneticMap.set('re', ['ሬ', 'ረ']);
      this.amharicPhoneticMap.set('ri', 'ሪ');
      this.amharicPhoneticMap.set('ro', 'ሮ');
      this.amharicPhoneticMap.set('ru', 'ሩ');

      this.amharicPhoneticMap.set('sh', 'ሽ');
      this.amharicPhoneticMap.set('sha', 'ሻ');
      this.amharicPhoneticMap.set('she', ['ሼ', 'ሸ']);
      this.amharicPhoneticMap.set('shi', 'ሺ');
      this.amharicPhoneticMap.set('sho', 'ሾ');
      this.amharicPhoneticMap.set('shu', 'ሹ');

      this.amharicPhoneticMap.set('q', 'ቅ');
      this.amharicPhoneticMap.set('qa', 'ቃ');
      this.amharicPhoneticMap.set('qe', ['ቄ', 'ቀ']);
      this.amharicPhoneticMap.set('qi', 'ቂ');
      this.amharicPhoneticMap.set('qo', 'ቆ');
      this.amharicPhoneticMap.set('qu', 'ቁ');

      this.amharicPhoneticMap.set('b', 'ብ');
      this.amharicPhoneticMap.set('ba', 'ባ');
      this.amharicPhoneticMap.set('be', ['ቤ', 'በ']);
      this.amharicPhoneticMap.set('bi', 'ቢ');
      this.amharicPhoneticMap.set('bo', 'ቦ');
      this.amharicPhoneticMap.set('bu', 'ቡ');

      this.amharicPhoneticMap.set('t', ['ት', 'ጥ']);
      this.amharicPhoneticMap.set('ta', ['ታ', 'ጣ']);
      this.amharicPhoneticMap.set('te', ['ቴ', 'ተ', 'ጤ', 'ጠ']);
      this.amharicPhoneticMap.set('ti', ['ቲ', 'ጢ']);
      this.amharicPhoneticMap.set('to', ['ቶ', 'ጦ']);
      this.amharicPhoneticMap.set('tu', ['ቱ', 'ጡ']);

      this.amharicPhoneticMap.set('ch', ['ች', 'ጭ']);
      this.amharicPhoneticMap.set('cha', ['ቻ', 'ጫ']);
      this.amharicPhoneticMap.set('che', ['ቼ', 'ቸ', 'ጬ', 'ጨ']);
      this.amharicPhoneticMap.set('chi', ['ቺ', 'ጪ']);
      this.amharicPhoneticMap.set('cho', ['ቾ', 'ጮ']);
      this.amharicPhoneticMap.set('chu', ['ቹ', 'ጩ']);

      this.amharicPhoneticMap.set('c', ['ች', 'ክ']);
      this.amharicPhoneticMap.set('ca', ['ቻ', 'ካ']);
      this.amharicPhoneticMap.set('ce', ['ቼ', 'ቸ', 'ኬ', 'ከ']);
      this.amharicPhoneticMap.set('ci', ['ቺ', 'ኪ']);
      this.amharicPhoneticMap.set('co', ['ቾ', 'ኮ']);
      this.amharicPhoneticMap.set('cu', ['ቹ', 'ኩ']);

      this.amharicPhoneticMap.set('n', 'ን');
      this.amharicPhoneticMap.set('na', 'ና');
      this.amharicPhoneticMap.set('ne', ['ኔ', 'ነ']);
      this.amharicPhoneticMap.set('ni', 'ኒ');
      this.amharicPhoneticMap.set('no', 'ኖ');
      this.amharicPhoneticMap.set('nu', 'ኑ');

      this.amharicPhoneticMap.set('gn', 'ኝ');
      this.amharicPhoneticMap.set('gna', 'ኛ');
      this.amharicPhoneticMap.set('gne', ['ኜ', 'ኘ']);
      this.amharicPhoneticMap.set('gni', 'ኚ');
      this.amharicPhoneticMap.set('gno', 'ኞ');
      this.amharicPhoneticMap.set('gnu', 'ኙ');

      this.amharicPhoneticMap.set('a', 'ኣ');
      this.amharicPhoneticMap.set('e', ['ኤ']);
      this.amharicPhoneticMap.set('i', 'ኢ');
      this.amharicPhoneticMap.set('o', 'ኦ');
      this.amharicPhoneticMap.set('u', 'ኡ');

      this.amharicPhoneticMap.set('k', 'ክ');
      this.amharicPhoneticMap.set('ka', 'ካ');
      this.amharicPhoneticMap.set('ke', ['ኬ', 'ከ']);
      this.amharicPhoneticMap.set('ki', 'ኪ');
      this.amharicPhoneticMap.set('ko', 'ኮ');
      this.amharicPhoneticMap.set('ku', 'ኩ');

      this.amharicPhoneticMap.set('w', 'ው');
      this.amharicPhoneticMap.set('wa', 'ዋ');
      this.amharicPhoneticMap.set('we', ['ዌ', 'ወ']);
      this.amharicPhoneticMap.set('wi', 'ዊ');
      this.amharicPhoneticMap.set('wo', 'ዎ');
      this.amharicPhoneticMap.set('wu', 'ዉ');

      this.amharicPhoneticMap.set('w', 'ው');
      this.amharicPhoneticMap.set('wa', 'ዋ');
      this.amharicPhoneticMap.set('we', ['ዌ', 'ወ']);
      this.amharicPhoneticMap.set('wi', 'ዊ');
      this.amharicPhoneticMap.set('wo', 'ዎ');
      this.amharicPhoneticMap.set('wu', 'ዉ');

      this.amharicPhoneticMap.set('z', 'ዝ');
      this.amharicPhoneticMap.set('za', 'ዛ');
      this.amharicPhoneticMap.set('ze', ['ዜ', 'ዘ']);
      this.amharicPhoneticMap.set('zi', 'ዚ');
      this.amharicPhoneticMap.set('zo', 'ዞ');
      this.amharicPhoneticMap.set('zu', 'ዙ');

      this.amharicPhoneticMap.set('x', 'ዝ');
      this.amharicPhoneticMap.set('xa', 'ዛ');
      this.amharicPhoneticMap.set('xe', ['ዜ', 'ዘ']);
      this.amharicPhoneticMap.set('xi', 'ዚ');
      this.amharicPhoneticMap.set('xo', 'ዞ');
      this.amharicPhoneticMap.set('xu', 'ዙ');

      this.amharicPhoneticMap.set('y', 'ይ');
      this.amharicPhoneticMap.set('ya', 'ያ');
      this.amharicPhoneticMap.set('ye', ['ዬ', 'የ']);
      this.amharicPhoneticMap.set('yi', 'ዪ');
      this.amharicPhoneticMap.set('yo', 'ዮ');
      this.amharicPhoneticMap.set('yu', 'ዩ');

      this.amharicPhoneticMap.set('d', 'ድ');
      this.amharicPhoneticMap.set('da', 'ዳ');
      this.amharicPhoneticMap.set('de', ['ዴ', 'ደ']);
      this.amharicPhoneticMap.set('di', 'ዲ');
      this.amharicPhoneticMap.set('do', 'ዶ');
      this.amharicPhoneticMap.set('du', 'ዱ');

      this.amharicPhoneticMap.set('j', 'ጅ');
      this.amharicPhoneticMap.set('ja', 'ጃ');
      this.amharicPhoneticMap.set('je', ['ጄ', 'ጀ']);
      this.amharicPhoneticMap.set('ji', 'ጂ');
      this.amharicPhoneticMap.set('jo', 'ጆ');
      this.amharicPhoneticMap.set('ju', 'ጁ');

      this.amharicPhoneticMap.set('g', 'ግ');
      this.amharicPhoneticMap.set('ga', 'ጋ');
      this.amharicPhoneticMap.set('ge', ['ጌ', 'ገ']);
      this.amharicPhoneticMap.set('gi', 'ጊ');
      this.amharicPhoneticMap.set('go', 'ጎ');
      this.amharicPhoneticMap.set('gu', 'ጉ');

      this.amharicPhoneticMap.set('ts', 'ጽ');
      this.amharicPhoneticMap.set('tsa', 'ጻ');
      this.amharicPhoneticMap.set('tse', ['ጼ', 'ጸ']);
      this.amharicPhoneticMap.set('tsi', 'ጺ');
      this.amharicPhoneticMap.set('tso', 'ጾ');
      this.amharicPhoneticMap.set('tsu', 'ጹ');

      this.amharicPhoneticMap.set('f', 'ፍ');
      this.amharicPhoneticMap.set('fa', 'ፋ');
      this.amharicPhoneticMap.set('fe', ['ፌ', 'ፈ']);
      this.amharicPhoneticMap.set('fi', 'ፊ');
      this.amharicPhoneticMap.set('fo', 'ፎ');
      this.amharicPhoneticMap.set('fu', 'ፉ');

      this.amharicPhoneticMap.set('p', 'ፕ');
      this.amharicPhoneticMap.set('pa', 'ፓ');
      this.amharicPhoneticMap.set('pe', ['ፔ', 'ፐ']);
      this.amharicPhoneticMap.set('pi', 'ፒ');
      this.amharicPhoneticMap.set('po', 'ፖ');
      this.amharicPhoneticMap.set('pu', 'ፑ');

      this.amharicPhoneticMap.set('v', 'ቭ');
      this.amharicPhoneticMap.set('va', 'ቫ');
      this.amharicPhoneticMap.set('ve', ['ቬ', 'ቨ']);
      this.amharicPhoneticMap.set('vi', 'ቪ');
      this.amharicPhoneticMap.set('vo', 'ቮ');
      this.amharicPhoneticMap.set('vu', 'ቩ');
  }

  /**
   * Parts a word into it's phonemes.
   *
   * @access public
   * @param {String}   string English letter represenation of an Amharic word.
   * @return {Array.<String>} An array of possible phonemes in a word.
   */
  extractPhonemes(string){
      let stringArray = string.trim().toLowerCase().split('');
      let phonemeArray = [];
      let phonemeSuccession = '';

      stringArray.forEach((element, index) => {
          if (this.vowels.includes(element) && phonemeSuccession === '') {
              phonemeArray.push(element);
          } else if (this.vowels.includes(element) && phonemeSuccession !== '') {
              phonemeSuccession = phonemeSuccession.concat(element);
              phonemeArray.push(phonemeSuccession);
              phonemeSuccession = '';
          } else if (!this.vowels.includes(element) && phonemeSuccession.length > 0) {
              let phoneme = phonemeSuccession.concat(element);

              if (this.specialPhonemes.includes(phoneme) &&
                  index !== (stringArray.length - 1) &&
                  this.vowels.includes(stringArray[index + 1])) {

                  phonemeSuccession = phonemeSuccession.concat(element);
                  return;

              } else if (this.specialPhonemes.includes(phoneme) &&
                  index === (stringArray.length - 1)) {

                  phonemeSuccession = phonemeSuccession.concat(element);
                  phonemeArray.push(phonemeSuccession);
                  phonemeSuccession = '';

              } else {
                  phonemeArray.push(phonemeSuccession);
                  phonemeSuccession = element;
              }

          } else if (!this.vowels.includes(element) && phonemeSuccession.length === 0) {
              phonemeSuccession = element;
          }


          if (index === (stringArray.length - 1) && phonemeSuccession.length !== 0) {
              phonemeArray.push(phonemeSuccession);
          }

      });

      return phonemeArray;
  }

  /**
   * combines a list of phoenems extracted from an English represenation of a word to a list
   * of possible translated words written in Amharic.
   *
   * @access public
   * @see  extractPhonemes
   * @param {String}   string English letter represenation of an Amharic word.
   * @return {Array.<String>} An array of possible Amharic translations of a word.
   */
  matchToAmharicPhonems(word){
      let phonemes = this.extractPhonemes(word);
      let translationArray = [];
      let translation = '';

      phonemes.forEach(phoneme => {
          let val = this.amharicPhoneticMap.get(phoneme);
          if (!Array.isArray(val)) {
              val = val.split('');
          }

          if (translationArray.length === 0) {
              val.forEach(element => {
                  translationArray.push(element);
              });
          } else {
              let temp = Array.from(translationArray);
              translationArray = [];
              temp.forEach(existing => {
                  val.forEach(variation => {
                      translationArray.push(existing.concat(variation));
                  });
              });
          }

          val = [];
      });

      return translationArray;
  }

}

/**
 * A module that returns Amharic translations of an Amharic word written in English
 * @module PhonemeTranslator
 */
module.exports = PhonemeTranslator;
