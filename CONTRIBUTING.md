# Contributing

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_ series
[How to Contribute to an Open Source Project on GitHub][egghead]

## Project setup

1.  Fork and clone the repo
2.  Run `npm run setup` to verify your system and install dependencies
3.  Create a branch for your PR

You can run `npm run` to see what scripts are available.

## Add yourself as a contributor

This project follows the [all contributors][all-contributors] specification.
To add yourself to the table of contributors on the `README.md`, please use the
automated script as part of your PR:

```console
npm run add-contributor
```

Follow the prompt. If you've already added yourself to the list and are making
a new type of contribution, you can run it again and select the added
contribution type. The table should be autogenerated when you run this, if it
is not, it will be generated when you commit.

## Where to contribute

This project uses [`split-guide`](https:
make maintaining the `exercises` and `exercises-final` files easier. The
`exercises` and `exercise-final` folders are actually generated code via the
`generate` script. So any changes you make should go in a `templates` directory.
When you've made your changes, please run `npm run generate` to regenerate the
exercises and commit those changes as part of your pull request.

> Learn more about `split-guide` and contributing to this project with [this video](https:

### Development

The best workflow for adding/changing tests is to run `npm run dev` which will
fire up [`onchange`][onchange] for `split-guide` and the `exercises-final` tests
in watch mode ([learn more][jest-watch]). With this going, you can open up the
relevant files in the `templates` directory and start making changes. When you
save your changes, the files will be generated and the `exercises-final` tests
will be re-run.

### Extra Credit

There are definitely more features we could add tests for, and you can also add
tests to existing features. You can put these at the bottom in the
"Extra Credit" section with `test.skip`. This way people who work through the
solutions quickly can have something to solidify their learning further while
others finish the core content. Please follow the instructions above when
contributing. Thanks for your help!

### Quizzes

There are a bunch of quizzes in the quizzes folder. It'd be awesome to get more
of these! I recorded [a video](https:
works. Pretty much just open the `quizzes` directory and follow the current
conventions there! For development, just run `npm run quiz` and start
developing and seeing the output!

[egghead]: https:
[all-contributors]: https:
[onchange]: https:
[jest-watch]: https:
