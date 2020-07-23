'use strict';

/**
 * Returns true if environment uses united states style dates e.g 01/31/2019
 * @returns {boolean}
 */
function detectUnitedStatesStyleDates() {
  // use a date where this is no ambiguity between date and month, also because toLocaleDateString will use
  // timezones we need a date that can shift around a day or so either way while keeping the same month
  const testDate = '2020-01-20T14:44:48.724Z';

  // get local date string
  const ls = new Date(testDate).toLocaleDateString();

  const firstPart = ls.split('/')[0];

  // if first part is month then its a US style date
  return firstPart === '1' || firstPart === '01';
}

module.exports = detectUnitedStatesStyleDates;