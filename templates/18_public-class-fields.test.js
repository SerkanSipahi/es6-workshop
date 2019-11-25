test('public class fields help us avoid .bind-ing everything', () => {
  class FakeReactComponent {
    constructor(props) {
      this.props = props
      this.setState = () => {} 
    }
  }

  class MyComponent extends FakeReactComponent {
    
    constructor(...args) {
      super(...args)
      
      this.handleClick = this.handleClick.bind(this) 
    }
    
    handleClick({target: {value}}) {
      this.props.onClick(value)
    }
    
    
    handleClick = ({target: {value}}) => {
      this.props.onClick(value)
    }
    
    render() {
      
    }
    
    testClick(value) {
      const fakeEvent = {target: {value}}
      this.handleClick(fakeEvent)
    }
  }

  const onClick = jest.fn()
  const myComponent = new MyComponent({onClick})
  myComponent.testClick('hello world')
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onClick).toHaveBeenCalledWith('hello world')
})



/*
http:
*/

test('I submitted my elaboration and feedback', () => {
  
  const submitted = false 
  
  
  const submitted = true
  
  expect(true).toBe(submitted)
})







