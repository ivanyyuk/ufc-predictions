export const addFadeAndToggleProperty = (eventsArray) => {
  eventsArray.forEach(event => {
    event.faded = false;
    event.showFights = false;
  });

  return eventsArray;
};
