import { module } from 'qunit';
import { Promise } from 'rsvp';

import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      this.application = startApp();

      if (options.beforeEach) {
        return options.beforeEach.apply(this, arguments);
      }
    },

    afterEach() {
      let afterEach =
        options.afterEach && options.afterEach.apply(this, arguments);
      // eslint-disable-next-line ember/named-functions-in-promises
      return Promise.resolve(afterEach).then(() =>
        destroyApp(this.application),
      );
    },
  });
}
