export const addFadeProperty = (eventsArray) => {
  eventsArray.forEach(event => event.faded = false);

  return eventsArray;
};
