export const _findUserTimeZone = () => {
  let timeZoneLocationString = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let timeZoneOffset = new Date().toString().match(/([-\+][0-9]+)\s/)[1];
  //TODO: documentation, example payload
  console.log('timeZoneLocationString ==>', timeZoneLocationString);
  console.log('timeZoneOffset ==>', timeZoneOffset);
  return { timeZoneLocationString, timeZoneOffset };
}
