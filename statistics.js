function calculateStatistics(text) {
  const words = text.split(/\s+/);
  const characters = text.length;
  const sentences = text.split(/\.|\?|!/).filter(sentence => sentence.trim() !== '');
  return {
    wordCount: words.length,
    characterCount: characters,
    sentenceCount: sentences.length,
  };
}

module.exports = calculateStatistics;
