# ES6-Workshop

[![slides-badge][slides-badge]][slides]
[![chat-badge][chat-badge]][chat]
[![Build Status][build-badge]][build]
[![License][license-badge]][license]
[![All Contributors](https:

[![PRs Welcome][prs-badge]][prs]
[![Donate][donate-badge]][donate]
[![Code of Conduct][coc-badge]][coc]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## Welcome

Welcome to this ES6 workshop. Our goal is to help everyone make strides towards learning the newest ES6 syntax, and
how to use the latest constructs in JavaScript.

This repo is meant to be used in parallel with a lecture style presentation of
[the new features](https:

## Thanks

Special thanks to [Aaron Frost](https:
creating the [original repo](https:

## Your Goal

This repo is full of failing tests. The only way to get them to pass it by using your newly acquired knowledge of ES6
and all of the new features that are part of this latest release. For each test, you will need to write/rewrite to code
using the latest ES6 syntax. Once all of your tests pass, you will want to move onto the next section.

By the time that the workshop is over (time permitting), all of your tests will be running and passing.

## System Requirements

* [git][git]
* [Node][node] (at least version 8.9.4)
* [npm][npm] (at least version 5.6.0)

## Setup

You will need to start by cloning this repo, then you'll run a simple `setup` script which will install all the
dependencies and validate that you're ready to go. From your terminal, type:

```
git clone https:
cd es6-workshop
yarn run setup
git commit -am "setup"
```


If this finishes without issues, great 👏! However, if you have problems, please file an issue on this repo [here](https:

# How To Run Tests

Once you have everything installed, you are ready to run some tests. There are two directories with tests in them:
`exercises` and `exercises-final`. The `exercises-final` directory is like a cheat sheet. All of the tests contain the
required ES6 code to make the tests pass. You will need to edit the tests in the `exercises` directory, and make the
tests pass.

To run the tests, in your terminal run:

```
yarn test
```

To run a specific test file, in your terminal run:

```
yarn test -- exercises/01_block-scoping.test.js
```

If you want the tests to continue running as you make changes, run:

```
yarn run test:watch
```

This will start `jest` in its interactive watch mode ([learn more][watch-mode]). If you see a bunch of failures, make
sure you're in "only changed" mode by clicking the `o` key. There should not be any tests run at this point. Your
job is to go into each test file in `exercises` and make the tests pass. As you make changes, jest will run the file's
tests. Once you have written the required ES6 code, the tests will pass, and you can move on.

Also, during watch mode you can press the `p` key to filter for only the test file you want to run. You can even press the `t`
key to filter for only the tests you want to run (by their
test name). Note, that for these to work, you need to run all
the tests first. Hit the `a` key to do that.

**Note:** You may prefer to run the `test:changed` script which will run the tests only once. This will allow you to
avoid the "learning crutch" of immediate feedback that you get from the watch mode. But it's up to you!

### Contributing

If you have any questions, [let me know](https:

If you use this workshop, please Pull Request this README with a link to your event.

If you want to edit/update anything in the exercises, please make all changes in the `templates` directory. We're using
[`split-guide`](https:

### Events

* [FluentConf 2015 - Axel Rauschmayer & Aaron Frost](http:
* [SLC JS Learners Meetup - Kent C. Dodds](http:
* [MidwestJS 2015 - Kent C. Dodds](https:
* [The Strange Loop 2016 - Kent C. Dodds](http:
* [Connect Tech - Kent C. Dodds](http:

## Contributors

Thanks goes to these wonderful people ([emoji key](https:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https:
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https:
| [<img src="https:
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https:

# LICENSE

This material is available for private, non-commercial use under the
[GPL version 3](http:
would like to use this material to conduct your own workshop, please contact me
at kent@doddsfamily.us

[npm]: https:
[yarn]: https:
[node]: https:
[git]: https:
[slides]: http:
[slides-badge]: https:
[chat]: https:
[chat-badge]: https:
[build-badge]: https:
[build]: https:
[license-badge]: https:
[license]: https:
[prs-badge]: https:
[prs]: http:
[donate-badge]: https:
[donate]: http:
[coc-badge]: https:
[coc]: https:
[github-watch-badge]: https:
[github-watch]: https:
[github-star-badge]: https:
[github-star]: https:
[twitter]: https:
[twitter-badge]: https:
[emojis]: https:
[all-contributors]: https:
[watch-mode]: https:
