module.exports = {
  // simplifies regex
  'unicorn/better-regex': 'error',
  // this is dumb, sometimes you want to give your error variable
  // more context than just the name "error".
  'unicorn/catch-error-name': 'off',
  // this is good, because it will encourage more generic composable functions
  'unicorn/consistent-function-scoping': 'error',
  // off already by unicorn recommended
  'unicorn/custom-error-definition': 'off',
  // reasonable
  'unicorn/error-message': 'error',
  // not that great of a rule, but it's fixable.
  'unicorn/escape-case': 'error',
  // TODOs can be just tangential thoughts of improvements later, and requiring friction
  // distracts them from writing the actual code they were writing. It's a good idea, but really I
  // believe the expiration should be put into the issue tracker, where it can be surfaced to a PM
  'unicorn/expiring-todo-comments': 'off',
  // reasonable, and fixable.
  'unicorn/explicit-length-check': 'error',
  // this is quite opinionated by default with just kebabCase, when really just snake case is dumb.
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        kebabCase: true,
        camelCase: true,
        snakeCase: false,
        pascalCase: true,
      },
    },
  ],
  // reasonable and fixable.
  'unicorn/import-index': 'error',
  // reasonable and fixable.
  'unicorn/new-for-builtins': 'error',
  // this should really be a warning. there are valid reasons to do this... like such as
  // a file that's provided to you by a library that says "put this file here, ask no questions"
  'unicorn/no-abusive-eslint-disable': 'warn',
  // sure
  'unicorn/no-array-instanceof': 'error',
  // fixable, so okay fine.
  'unicorn/no-console-spaces': 'error',
  // this is a dumb rule. prevents a very niche edge case (which you can handle with
  // a unit test), but at the expense of writing readable code
  'unicorn/no-fn-reference-in-iterator': 'off',
  // for loops are often misused
  'unicorn/no-for-loop': 'error',
  // hexadecimal escapes are shorter, and sometimes that's a good thing. this rule
  // makes too much assumptions about the context in which someone uses hex escapes.
  'unicorn/no-hex-escape': 'off',
  // naming your variables "newSomething" is quite common, and not confusing.
  'unicorn/no-keyword-prefix': 'off',
  'no-nested-ternary': 'off',
  'unicorn/no-nested-ternary': 'error',
  // this is a good rule
  'unicorn/no-new-buffer': 'error',
  // null is a part of the language, and has meaning different from undefined.
  'unicorn/no-null': 'off',
  // reasonable
  'unicorn/no-process-exit': 'error',
  // this is stupid overreach of the linter; `reduce` is a wonderful part of the language.
  'unicorn/no-reduce': 'off',
  // sometimes you only want the 3rd and 4th variable.
  'unicorn/no-unreadable-array-destructuring': 'off',
  'unicorn/no-unsafe-regex': 'off',
  // this is silly, sometimes you want to export those
  'unicorn/no-unused-properties': 'off',
  // you may want to say "return undefined", to make it clear that you intend this
  'unicorn/no-useless-undefined': 'off',
  // extra zeros can infer meaning, or align code. they're not bad.
  'unicorn/no-zero-fractions': 'off',
  // you're not my real dad
  'unicorn/number-literal-case': 'off',
  'unicorn/prefer-add-event-listener': 'error',
  // neat
  'unicorn/prefer-dataset': 'error',
  'unicorn/prefer-event-key': 'error',
  // TODO: Enable this by default when targeting Node.js 12.
  'unicorn/prefer-flat-map': 'off',
  'unicorn/prefer-includes': 'error',
  'unicorn/prefer-modern-dom-apis': 'error',
  'unicorn/prefer-negative-index': 'error',
  'unicorn/prefer-node-append': 'error',
  'unicorn/prefer-node-remove': 'error',
  'unicorn/prefer-number-properties': 'error',
  'unicorn/prefer-optional-catch-binding': 'error',
  'unicorn/prefer-query-selector': 'error',
  'unicorn/prefer-reflect-apply': 'error',
  'unicorn/prefer-replace-all': 'error',
  'unicorn/prefer-set-has': 'error',
  'unicorn/prefer-spread': 'error',
  'unicorn/prefer-starts-ends-with': 'error',
  'unicorn/prefer-string-slice': 'error',
  // this is good. people might not know they can use .textContent
  'unicorn/prefer-text-content': 'error',
  'unicorn/prefer-trim-start-end': 'error',
  // clever, this is good.
  'unicorn/prefer-type-error': 'error',
  // nobody wants to go through all of their code and change "props" to "properties".
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/string-content': 'off',
  // reasonable
  'unicorn/throw-new-error': 'error',
}
