/* eslint-env node */
/* eslint camelcase: 0 */
module.exports = {
  framework: 'qunit',
  test_page: 'tests/index.html?hidepassed',
  reporter: 'xunit',
  report_file: 'tests/reports/QUnit.xml',
  disable_watching: true,
  launch_in_ci: [
    'Chrome'
  ],
  launch_in_dev: [
    'Chrome'
  ]
};
