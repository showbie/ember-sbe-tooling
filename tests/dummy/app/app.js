import Application from '@ember/application';
import Ember from 'ember';
import loadInitializers from 'ember-load-initializers';

import Resolver from './resolver';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
});

loadInitializers(App, config.modulePrefix);

export default App;
