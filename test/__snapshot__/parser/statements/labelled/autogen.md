# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> false
> `````

> `````js
> async try while { catch }
> `````

> `````js
> catch { try
> `````

> `````js
> try { !xxx
> `````

> `````js
> /false//a
> `````

> `````js
> )=)=(){{}/()try finally catch /1/
> `````

> `````js
> ((((false))!&try
> `````

> `````js
> try %&/() function
> `````

> `````js
> =! class function try while with foo!
> `````

> `````js
> @foo
> `````

> `````js
> class x {}
> `````

> `````js
> (((??! if else))
> `````

> `````js
> catch try {
> `````

> `````js
> catch try {}
> `````

> `````js
> catch
> `````

> `````js
> /)finally
> `````

> `````js
> (((
> `````

> `````js
> !{[]
> `````

> `````js
> !{[
> `````

> `````js
> }
> `````

> `````js
> /()
> `````

> `````js
> /(
> `````

> `````js
> /(try
> `````

> `````js
> while try this and !foo
> `````

> `````js
> &/()=
> `````

> `````js
> function while
> `````

> `````js
> /**/ /x
> `````

### Templates

#### missing parens and block

`````js
try catch #
`````

#### try with invalid array

`````js
try [catch] #
`````

#### try with unclosed block

`````js
try {} finally(x) { #
`````

#### try triple

`````js
try try try #
`````

#### catch stand alone

`````js
catch #
`````

#### catch finally

`````js
catch # finally
`````

#### unclosed parens

`````js
try( #
`````

#### with unclosed array

`````js
try[ #
`````



## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 16,
                    "start": 3,
                    "end": 3
                },
                "flags": 16,
                "start": 3,
                "end": 3
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 0,
                    "start": 3,
                    "end": 9
                },
                "catchParameter": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 16,
                        "start": 9,
                        "end": 9
                    },
                    "flags": 16,
                    "start": 9,
                    "end": 9
                },
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "try catch #",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid character - start: 9, end: 11
✖ Private identifiers are not allowed outside class_bodies - start: 9, end: 11

```
