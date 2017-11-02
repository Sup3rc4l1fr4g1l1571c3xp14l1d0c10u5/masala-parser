ParserFactory
----

```js
function string(s) {
    return new Parser((input, index = 0) => {
        if (input.subStreamAt(s.split(''), index)) {
            return response.accept(s, input, index + s.length, true);
        } else {
            return response.reject(input.location(index), false);
        }
    });
}

// >>>>>

function string(s) {
    return Parsers.of((input, index = 0) => {
        if (input.subStreamAt(s.split(''), index)) {
            return response.accept(s, input, index + s.length, true);
        } else {
            return response.reject(input.location(index), false);
        }
    });
}
```


TypedParsers
----

```js
class OptionalParser extends Parser{
    
    constructor(f){
        super(f);
        this.type='Optional';
    }
    
    orElse(val){
        return this.map(opt =>opt.orElse(val));
    }
    
     orLazyElse(value) {
        return this.map(opt => opt.orLazyElse(value))
     }
}


```








Use a ParserFactory
Change to typed parser, 

parser.isCompleted();

rename F.nop() to F.nop
parsing.isCompleted()




-> release

typescript
-> release



lotech
-> release




prune thenLeft and thenRight

Questions Didier

- perdu lien coveralls


Promotion

StackOverflow Regex
https://stackoverflow.com/questions/5436824/matching-accented-characters-with-javascript-regexes
>>>> Make a response with next Masala version

Compare Google operation parsing with masala

