test('public class fields help us avoid .bind-ing everything', () => {
  class FakeReactComponent {
    constructor(props) {
      this.props = props
      this.setState = () => {} // just for fun
    }
  }

  class MyComponent extends FakeReactComponent {
    handleClick = ({target: {value}}) => {
      this.props.onClick(value)
    }
    render() {
      // weird JSX stuff here
    }
    // this is just so we can test things out
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


test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})







