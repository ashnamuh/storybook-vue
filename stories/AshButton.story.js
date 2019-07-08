// import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import AshButton from '../src/components/AshButton.vue'

storiesOf('AshButton', module)
  .addDecorator(withKnobs)
  .add('with text', () => ({
    components: {
      AshButton
    },
    template: '<AshButton :type="type" @click="action" :plain="plain" :round="round" :disabled="disabled">{{ text }}</AshButton>',
    methods: { action: action('log') },
    props: {
      text: {
        default: text('buttonName', 'Button')
      },
      type: {
        default: select('type', {
          default: 'default',
          primary: 'primary',
          success:'success',
          info: 'info',
          warning: 'warning',
          danger: 'danger'
        }, 'default')
      },
      size: {
        default: text('size', 'default')
      },
      plain: {
        default: boolean('plain', false)
      },
      round: {
        default: boolean('round', false)
      },
      disabled: {
        default: boolean('disabled', false)
      }
    }
  }))
