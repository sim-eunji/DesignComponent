class ButtonProps {
  
  static toSheme() {
    
    const props = {
      type: {
        type: String, 
        default: 'button'
      },
      disabled: Boolean,
      fluid: Boolean,
      circular: Boolean,
      size: String,
      color: {
        type: String,
        default: 'black'
      },
      icon: String,
      tabindex: [String, Number]
    }

    return props
  }
}

const Button = {
  name: 'Button',
  props: ButtonProps.toSheme(),

  render(h, { data, props, listeners }) {
    let element = 'button'
    let className = 'ui button'
    const attrs = []
    const children = []

    if(props.icon) {
      children.push(h('i', { class: `icon ${props.icon}` }))
      className += ' icon'
    }

    if(props.color)  className += ` ${props.color}`
    if(props.disabled)  {
      className += ` disabled`
      attrs.disabled = true
    }
    if(props.loading)  className += ` loading`
    if(props.size)  className += ` ${props.size}`
    if(props.fluid)  className += ` fluid`
    if(props.circular)  className += ` circular`

    if(props.tabindex) attrs.tabindex = props.tabindex
    if(props.type) attrs.type = props.type

    return h(
      element,
      {
        staticClass: className,
        attrs, 
        on: {
          click(e) {
            if(!props.loading) {
              listeners.click ? listeners.click(e) : void(0)
            }
          }
        },
        ref: data.ref,
        refInFor: data.refInFor
      },
      children
    )
  }
}

export default Button