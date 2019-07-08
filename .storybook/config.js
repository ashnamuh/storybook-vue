import { configure } from '@storybook/vue'

function loadStories() {
  const req = require.context('../stories', true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)
