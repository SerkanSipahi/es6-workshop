import log from './pretty-log'

function basicExample() {
  
  
  class Greeter {
    constructor(name, preference) {
      this.name = name
      this.preference = preference
    }
    greet(otherName) {
      return `Hello ${otherName}, my name is ${this.name}`
    }
    askAboutWeather() {
      const antiPreference = this.preference === 'cool' ? 'warm' : 'cool'
      return `Is it ${antiPreference} outside? I prefer it ${this.preference}.`
    }
    getInterestingCallbacks() {
      return {
        greet: this.greet,
        askAboutWeather: this.askAboutWeather,
      }
    }
  }
  const greeter = new Greeter('Ronald', 'cool')
  const interestingCallbacks = greeter.getInterestingCallbacks()
  return {
    greeting: interestingCallbacks.greet('Jane'),
    weatherQuestion: interestingCallbacks.askAboutWeather(),
  }
}




function basicExampleSOLUTION() {
  class Greeter {
    constructor(name, preference) {
      this.name = name
      this.preference = preference
    }
    greet = otherName => {
      return `Hello ${otherName}, my name is ${this.name}`
    }
    askAboutWeather = () => {
      const antiPreference = this.preference === 'cool' ? 'warm' : 'cool'
      return `Is it ${antiPreference} outside? I prefer it ${this.preference}.`
    }
    getInterestingCallbacks() {
      return {
        greet: this.greet,
        askAboutWeather: this.askAboutWeather,
      }
    }
  }
  const greeter = new Greeter('Ronald', 'cool')
  const interestingCallbacks = greeter.getInterestingCallbacks()
  return {
    greeting: interestingCallbacks.greet('Jane'),
    weatherQuestion: interestingCallbacks.askAboutWeather(),
  }
}
log(basicExampleSOLUTION())
