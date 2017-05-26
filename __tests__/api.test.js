import api from '../src/utils/api';

test('expect to receive stop info from api', () => {
  expect.assertions(2);
  return api.fetchStopsByName('sipoontie').then(data => {
    expect(data[0].name).toBe('Sipoontie');
    expect(data[0].code).toBe('V8642');
  });
});

test('expect to receive stop departures from api', () => {
  expect.assertions(1);
  return api.fetchStopDepartures('HSL:4860242').then(data => {
    expect(data[0].headsign).not.toBe(null);
  });
});
