module.exports = {
    extends: ['airbnb', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'import/no-extraneous-dependencies': 'off',
        // prettier settings
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                bracketSpacing: true,
                tabWidth: 4,
                jsxBracketSameLine: true,
                parser: 'flow'
            }
        ],
        'no-extend-native': 'error',
        'func-style': [
            'error',
            'expression',
            {
                allowArrowFunctions: true
            }
        ],
    },
    // don't look for eslintrcs above here
    root: true
};
