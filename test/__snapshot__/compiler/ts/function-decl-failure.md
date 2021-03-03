# Kataw parser test case

## Input

`````js
function x (x: string

function x x: string

function x (x: string }

function x !(x: string {

function x ( { (function !! function): string

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "function x (x: string\n\nfunction x x: string\n\nfunction x (x: string }\n\nfunction x !(x: string {\n\nfunction x ( { (function !! function): string\n",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "x",
                    "rawText": "x",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 8,
                    "end": 10
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 12,
                                "end": 13
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4194510,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 14,
                                "end": 21
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 12,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "flags": 81922,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 12,
                    "end": 31
                },
                "type": null,
                "contents": null,
                "typeParameters": null,
                "flags": 81922,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 21
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "x",
                    "rawText": "x",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 31,
                    "end": 33
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 33,
                    "end": 33
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 35,
                        "end": 35
                    },
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 33,
                    "end": 35
                },
                "typeParameters": null,
                "flags": 81922,
                "intersects": false,
                "transformFlags": 256,
                "parent": null,
                "emitNode": null,
                "start": 21,
                "end": 35
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "string",
                    "rawText": "string",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 36,
                    "end": 43
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 36,
                "end": 43
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "x",
                    "rawText": "x",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 53,
                    "end": 55
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 57,
                                "end": 58
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4194510,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 59,
                                "end": 66
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 57,
                            "end": 66
                        }
                    ],
                    "trailingComma": false,
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 57,
                    "end": 68
                },
                "type": null,
                "contents": null,
                "typeParameters": null,
                "flags": 81922,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 43,
                "end": 66
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "x",
                    "rawText": "x",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 78,
                    "end": 80
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 80,
                    "end": 80
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 66224,
                                    "expression": {
                                        "kind": 89,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 83,
                                            "end": 84
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4194510,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 85,
                                            "end": 92
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 82,
                                        "end": 92
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 82,
                                    "end": 92
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 82,
                                "end": 92
                            },
                            {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [
                                        {
                                            "kind": 264284,
                                            "name": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 104,
                                                "end": 106
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 89,
                                                        "ellipsis": false,
                                                        "binding": {
                                                            "kind": 33554598,
                                                            "propertyList": {
                                                                "kind": 33,
                                                                "properties": [],
                                                                "multiline": false,
                                                                "trailingComma": false,
                                                                "transformFlags": 1025,
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 110,
                                                                "end": 110
                                                            },
                                                            "flags": 65538,
                                                            "intersects": false,
                                                            "transformFlags": 1025,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 108,
                                                            "end": 110
                                                        },
                                                        "isOptional": false,
                                                        "type": null,
                                                        "initializer": null,
                                                        "decorators": null,
                                                        "accessModifier": null,
                                                        "isReadOnly": false,
                                                        "flags": 65538,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 108,
                                                        "end": 110
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 65538,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 108,
                                                "end": 112
                                            },
                                            "type": null,
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [
                                                        {
                                                            "kind": 264284,
                                                            "name": {
                                                                "kind": 131102,
                                                                "text": "",
                                                                "rawText": "",
                                                                "flags": 65538,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 120,
                                                                "end": 120
                                                            },
                                                            "formalParameters": {
                                                                "kind": 90,
                                                                "formalParameterList": [],
                                                                "trailingComma": false,
                                                                "flags": 65538,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 120,
                                                                "end": 120
                                                            },
                                                            "type": null,
                                                            "contents": {
                                                                "kind": 91,
                                                                "functionStatementList": {
                                                                    "kind": 94,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 2097233,
                                                                            "expression": {
                                                                                "kind": 65774,
                                                                                "operator": "!",
                                                                                "operand": {
                                                                                    "kind": 8456285,
                                                                                    "name": null,
                                                                                    "formalParameters": {
                                                                                        "kind": 90,
                                                                                        "formalParameterList": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 65538,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 132,
                                                                                        "end": 132
                                                                                    },
                                                                                    "contents": {
                                                                                        "kind": 91,
                                                                                        "functionStatementList": {
                                                                                            "kind": 94,
                                                                                            "statements": [],
                                                                                            "multiline": false,
                                                                                            "flags": 65538,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 132,
                                                                                            "end": 132
                                                                                        },
                                                                                        "flags": 65538,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 0,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 132,
                                                                                        "end": 132
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "type": null,
                                                                                    "flags": 65538,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 123,
                                                                                    "end": 132
                                                                                },
                                                                                "flags": 65538,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 122,
                                                                                "end": 132
                                                                            },
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 122,
                                                                            "end": 132
                                                                        }
                                                                    ],
                                                                    "multiline": false,
                                                                    "flags": 65538,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 122,
                                                                    "end": 132
                                                                },
                                                                "flags": 65538,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 120,
                                                                "end": 132
                                                            },
                                                            "typeParameters": null,
                                                            "flags": 65538,
                                                            "intersects": false,
                                                            "transformFlags": 256,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 112,
                                                            "end": 132
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 65538,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 112,
                                                    "end": 132
                                                },
                                                "flags": 65538,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 110,
                                                "end": 132
                                            },
                                            "typeParameters": null,
                                            "flags": 81922,
                                            "intersects": false,
                                            "transformFlags": 256,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 94,
                                            "end": 132
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 65538,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 94,
                                    "end": 132
                                },
                                "flags": 65538,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 92,
                                "end": 132
                            }
                        ],
                        "multiline": false,
                        "flags": 65538,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 82,
                        "end": 132
                    },
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 80,
                    "end": 132
                },
                "typeParameters": null,
                "flags": 81922,
                "intersects": false,
                "transformFlags": 256,
                "parent": null,
                "emitNode": null,
                "start": 68,
                "end": 132
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "string",
                    "rawText": "string",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 134,
                    "end": 141
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 134,
                "end": 141
            }
        ],
        "transformFlags": 0,
        "flags": 81920,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 141
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 34,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 67,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 81,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 93,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 111,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 121,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 132,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 133,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 142
}
```

### Printed


```javascript

function x(x: string);

function x() { }

string

function x(x: string);

function x() { (x: string) {
    function x({ }) { function () { ! function () { } } }
} }

string

```

### Diagnostics


```javascript
@{x2716}@ ';' expected. - start: 102, end: 0
@{x2716}@ Identifier expected - start: 135, end: 0

```
