# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: function
## Options

`````js
{}
`````
## Input

`````js
async (x = delete ((function) = f)) => {}
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
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 8
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 17
                                },
                                "operand": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 177,
                                                "asyncKeyword": null,
                                                "functionKeyword": {
                                                    "kind": 37822554,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 20,
                                                    "end": 28
                                                },
                                                "asteriskToken": null,
                                                "name": null,
                                                "typeParameters": null,
                                                "formalParameterList": {
                                                    "kind": 214,
                                                    "formalParameters": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 28,
                                                    "end": 28
                                                },
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 29,
                                                        "end": 29
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 29,
                                                    "end": 29
                                                },
                                                "returnType": null,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 29
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 31
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 33
                                            },
                                            "flags": 0,
                                            "transformFlags": 128,
                                            "start": 20,
                                            "end": 33
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 34
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 35
                                },
                                "flags": 32,
                                "transformFlags": 16384,
                                "start": 10,
                                "end": 35
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 7,
                            "end": 35
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 35
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 38
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 40
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 41
                },
                "flags": 290,
                "transformFlags": 0,
                "start": 0,
                "end": 41
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((function) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 28, end: 29
✖ Missing an opening brace - '{ - start: 30, end: 31
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 29, end: 31
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 17, end: 38

```

