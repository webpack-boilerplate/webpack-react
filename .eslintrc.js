module.exports = {
    "root": true,

    "env": {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "requireConfigFile": false,
        "babelOptions": {
            "presets": [
                "@babel/preset-env",
                "@babel/preset-react",
            ],
        },
    },
    "settings": {
        "react": {
            "version": "detect",
        },
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        // suppress errors for missing 'import React' in files
        // "react/react-in-jsx-scope": "off",
    }
};
