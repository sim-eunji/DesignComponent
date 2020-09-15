import { generateUniqueId } from '../../../utils'

const TYPES = [ 'email', 'hidden', 'number', 'password', 'search', 'tel', 'text', 'url' ]

class InputProps {

  static toScheme() {

    const props = {
      value: [String, Number],
      type: {
        type: String, 
        default: 'text',
        validator: type => TYPES.indexOf(type) !== -1
      },
      name: String,
      id: String,
      placeholder: String,
      tabindex: {
        type: [String, Number],
        default: '0'
      },
      disabled: Boolean,
      error: Boolean,
      success: Boolean,
      fluid: {
        type: Boolean,
        default: true
      },
      label: {
        type: String, 
        default: ""
      },
      autofocus: Boolean
    }

    return props
  }
}

const Input = {
  name: 'Input', 
  
  props: InputProps.toScheme(),

  computed: {
    _id() {
      return this.id ?? generateUniqueId('id')
    }
  },

  watch: {
    value(v) {
      this.$refs.$input.value = v
    }
  },

  methods: {
    _focus() {
      this.$refs.$input.focus()
    }
  },

  render(h) {
    let className = 'ui-input field'
    let uiInputClassName = 'ui input'

    const props = this.$props
    const attrs = {}
    const input = h(
      'input',
      {
        ref: '$input',
        attrs: {
          type: props.type,
          name: props.name,
          id: this._id,
          placeholder: props.placeholder,
          tabindex: props.tabindex,
          value: this.value,
          autofocus: this.autofocus 
        },
        on: {
          input: e => this.$emit('input', e.target.value),
          focus: e => this.$emit('focus', e),
          blur: e => this.$emit('blur', e),
          keyup: e => this.$emit('keyup', e),
          keydown: e => this.$emit('keydown', e),
          keypress: e => this.$emit('keypress', e)
        }
      }
    )

    const children = []

    if(props.error) className += ` error`
    if(props.success) className += ` success`
    if(props.loading) uiInputClassName += ` loading`
    if(props.disabled) uiInputClassName += ` disabled`
    if(props.fluid) uiInputClassName += ` fluid`

    const label = h(
      'label',
        {
          attrs: {
            for: this._id
          },
          on: {
            mouseover: e => {
              this.$emit('labelMouseover', e)
            }
          }
        },
        [ props.label ]
    )
 
    children.push(h(
      'div',
      { class: uiInputClassName },
      [
        label,
        input,
        (
          (props.error || props.success) ?
          h(
            {
              props: {
                name: `formcheck-${props.error ? 'error' : 'ok'}`
              }
            }
          ) :
          null
        )
      ]
    ))

    return h(
      'div',
      {
        class: className,
        attrs
      },
      children
    )
  }
}

export default Input