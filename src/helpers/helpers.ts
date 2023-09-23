export const getRandomValueBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

// Given a tag from YarnSpinner in the form "label:value",
// return the value.
export const getValueFromTag = (hashtags?: string[], tag?: string) => {
  if (!hashtags || !tag) return null;

  const labelWithValue = hashtags?.filter((str) => str.startsWith(tag))[0];
  const value = labelWithValue?.split(":")[1];

  return value;
};
