# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_getter_bare
> :: test: should listen to use strict directive in getter bare
> :: case: else
## Options

`````js
{}
`````
## Input

`````js
foo = {
  get x(){
    "use strict";
    else = x
  }
}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 351,
                                    "asyncKeyword": null,
                                    "asteriskToken": null,
                                    "getKeyword": {
                                        "kind": 16498,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 13
                                    },
                                    "setKeyword": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 1056,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [
                                                    {
                                                        "kind": 201392131,
                                                        "text": "use strict",
                                                        "rawText": "\"use strict\"",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 35
                                                    }
                                                ],
                                                "statements": [],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 18,
                                                "end": 36
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 36
                                        },
                                        "flags": 1056,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 36
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 7,
                                    "end": 36
                                },
                                {
                                    "kind": 134299649,
                                    "text": "else",
                                    "rawText": "else",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 45
                                }
                            ],
                            "trailingComma": false,
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 45
                        },
                        "flags": 49,
                        "transformFlags": 8,
                        "start": 5,
                        "end": 45
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 47
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 47,
                        "end": 49
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 5,
                    "end": 49
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "foo = {\n  get x(){\n    \"use strict\";\n    else = x\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 41, end: 45
✖ Property definition expected. Did you mean to use a ':'? - start: 45, end: 47
✖ ',' expected - start: 46, end: 47
✖ The left-hand side must be a variable or a property access. - start: 5, end: 47
✖ Declaration or statement expected - start: 49, end: 53
✖ Declaration or statement expected - start: 53, end: 55

```

