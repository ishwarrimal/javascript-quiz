const data = [
    {
      "id": 1,
      "title": "1. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">sayHi</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(name);\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(age);\n  <span class=\"hljs-keyword\">var</span> name = <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>;\n  <span class=\"hljs-keyword\">let</span> age = <span class=\"hljs-number\">21</span>;\n}\n\n<span class=\"hljs-title function_\">sayHi</span>();",
      "choices": [
        "A: `Lydia` and `undefined`",
        "B: `Lydia` and `ReferenceError`",
        "C: `ReferenceError` and `21`",
        "D: `undefined` and `ReferenceError`"
      ],
      "answer": {option: "D", reason: "Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.\n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get _initialized_. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`."}
    },
    {
      "id": 2,
      "title": "2. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; <span class=\"hljs-number\">3</span>; i++) {\n  <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(i), <span class=\"hljs-number\">1</span>);\n}\n\n<span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">0</span>; i &lt; <span class=\"hljs-number\">3</span>; i++) {\n  <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(i), <span class=\"hljs-number\">1</span>);\n}",
      "choices": [
        "A: `0 1 2` and `0 1 2`",
        "B: `0 1 2` and `3 3 3`",
        "C: `3 3 3` and `0 1 2`"
      ],
      "answer": {option: "C", reason: "Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.\n\nIn the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop."}
    },
    {
      "id": 3,
      "title": "3. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> shape = {\n  <span class=\"hljs-attr\">radius</span>: <span class=\"hljs-number\">10</span>,\n  <span class=\"hljs-title function_\">diameter</span>(<span class=\"hljs-params\"></span>) {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">radius</span> * <span class=\"hljs-number\">2</span>;\n  },\n  <span class=\"hljs-attr\">perimeter</span>: <span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-number\">2</span> * <span class=\"hljs-title class_\">Math</span>.<span class=\"hljs-property\">PI</span> * <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">radius</span>,\n};\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(shape.<span class=\"hljs-title function_\">diameter</span>());\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(shape.<span class=\"hljs-title function_\">perimeter</span>());",
      "choices": [
        "A: `20` and `62.83185307179586`",
        "B: `20` and `NaN`",
        "C: `20` and `63`",
        "D: `NaN` and `63`"
      ],
      "answer": {option: "B", reason: "Note that the value of `diameter` is a regular function, whereas the value of `perimeter` is an arrow function.\n\nWith arrow functions, the `this` keyword refers to its current surrounding scope, unlike regular functions! This means that when we call `perimeter`, it doesn't refer to the shape object, but to its surrounding scope (window for example).\n\nThere is no value `radius` on that object, which returns `NaN`."}
    },
    {
      "id": 4,
      "title": "4. What's the output?",
      "text": null,
      "code": "+<span class=\"hljs-literal\">true</span>;\n!<span class=\"hljs-string\">&#x27;Lydia&#x27;</span>;",
      "choices": [
        "A: `1` and `false`",
        "B: `false` and `NaN`",
        "C: `false` and `false`"
      ],
      "answer": {option: "A", reason: "The unary plus tries to convert an operand to a number. `true` is `1`, and `false` is `0`.\n\nThe string `'Lydia'` is a truthy value. What we're actually asking, is \"is this truthy value falsy?\". This returns `false`."}
    },
    {
      "id": 5,
      "title": "5. Which one is true?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> bird = {\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#x27;small&#x27;</span>,\n};\n\n<span class=\"hljs-keyword\">const</span> mouse = {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Mickey&#x27;</span>,\n  <span class=\"hljs-attr\">small</span>: <span class=\"hljs-literal\">true</span>,\n};",
      "choices": [
        "A: `mouse.bird.size` is not valid",
        "B: `mouse[bird.size]` is not valid",
        "C: `mouse[bird[\"size\"]]` is not valid",
        "D: All of them are valid"
      ],
      "answer": {option: "A", reason: "In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not _type_ them as strings, they are always converted into strings under the hood.\n\nJavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement.\n\n`mouse[bird.size]`: First it evaluates `bird.size`, which is `\"small\"`. `mouse[\"small\"]` returns `true`\n\nHowever, with dot notation, this doesn't happen. `mouse` does not have a key called `bird`, which means that `mouse.bird` is `undefined`. Then, we ask for the `size` using dot notation: `mouse.bird.size`. Since `mouse.bird` is `undefined`, we're actually asking `undefined.size`. This isn't valid, and will throw an error similar to `Cannot read property \"size\" of undefined`."}
    },
    {
      "id": 6,
      "title": "6. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">let</span> c = { <span class=\"hljs-attr\">greeting</span>: <span class=\"hljs-string\">&#x27;Hey!&#x27;</span> };\n<span class=\"hljs-keyword\">let</span> d;\n\nd = c;\nc.<span class=\"hljs-property\">greeting</span> = <span class=\"hljs-string\">&#x27;Hello&#x27;</span>;\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(d.<span class=\"hljs-property\">greeting</span>);",
      "choices": [
        "A: `Hello`",
        "B: `Hey!`",
        "C: `undefined`",
        "D: `ReferenceError`",
        "E: `TypeError`"
      ],
      "answer": {option: "A", reason: "In JavaScript, all objects interact by _reference_ when setting them equal to each other.\n\nFirst, variable `c` holds a value to an object. Later, we assign `d` with the same reference that `c` has to the object.\n\n[![](https://camo.githubusercontent.com/90d7e0a800f423e8e042a55252a744a59cafe8d976d3126da45e0ffa8259078d/68747470733a2f2f692e696d6775722e636f6d2f6b6f356b3066732e706e67)](https://camo.githubusercontent.com/90d7e0a800f423e8e042a55252a744a59cafe8d976d3126da45e0ffa8259078d/68747470733a2f2f692e696d6775722e636f6d2f6b6f356b3066732e706e67)\n\nWhen you change one object, you change all of them."}
    },
    {
      "id": 7,
      "title": "7. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">let</span> a = <span class=\"hljs-number\">3</span>;\n<span class=\"hljs-keyword\">let</span> b = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Number</span>(<span class=\"hljs-number\">3</span>);\n<span class=\"hljs-keyword\">let</span> c = <span class=\"hljs-number\">3</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(a == b);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(a === b);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(b === c);",
      "choices": [
        "A: `true` `false` `true`",
        "B: `false` `false` `true`",
        "C: `true` `false` `false`",
        "D: `false` `true` `true`"
      ],
      "answer": {option: "C", reason: "`new Number()` is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.\n\nWhen we use the `==` operator (Equality operator), it only checks whether it has the same _value_. They both have the value of `3`, so it returns `true`.\n\nHowever, when we use the `===` operator (Strict equality operator), both value _and_ type should be the same. It's not: `new Number()` is not a number, it's an **object**. Both return `false.`"}
    },
    {
      "id": 8,
      "title": "8. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">Chameleon</span> {\n  <span class=\"hljs-keyword\">static</span> <span class=\"hljs-title function_\">colorChange</span>(<span class=\"hljs-params\">newColor</span>) {\n    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">newColor</span> = newColor;\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">newColor</span>;\n  }\n\n  <span class=\"hljs-title function_\">constructor</span>(<span class=\"hljs-params\">{ newColor = <span class=\"hljs-string\">&#x27;green&#x27;</span> } = {}</span>) {\n    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">newColor</span> = newColor;\n  }\n}\n\n<span class=\"hljs-keyword\">const</span> freddie = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Chameleon</span>({ <span class=\"hljs-attr\">newColor</span>: <span class=\"hljs-string\">&#x27;purple&#x27;</span> });\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(freddie.<span class=\"hljs-title function_\">colorChange</span>(<span class=\"hljs-string\">&#x27;orange&#x27;</span>));",
      "choices": [
        "A: `orange`",
        "B: `purple`",
        "C: `green`",
        "D: `TypeError`"
      ],
      "answer": {option: "D", reason: "The `colorChange` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since `freddie` is an instance of class Chameleon, the function cannot be called upon it. A `TypeError` is thrown."}
    },
    {
      "id": 9,
      "title": "9. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">let</span> greeting;\ngreetign = {}; <span class=\"hljs-comment\">// Typo!</span>\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(greetign);",
      "choices": [
        "A: `{}`",
        "B: `ReferenceError: greetign is not defined`",
        "C: `undefined`"
      ],
      "answer": {option: "A", reason: "It logs the object, because we just created an empty object on the global object! When we mistyped `greeting` as `greetign`, the JS interpreter actually saw this as:\n\n1.  `global.greetign = {}` in Node.js\n2.  `window.greetign = {}`, `frames.greetign = {}` and `self.greetign` in browsers.\n3.  `self.greetign` in web workers.\n4.  `globalThis.greetign` in all environments.\n\nIn order to avoid this, we can use `\"use strict\"`. This makes sure that you have declared a variable before setting it equal to anything."}
    },
    {
      "id": 10,
      "title": "10. What happens when we do this?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">bark</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;Woof!&#x27;</span>);\n}\n\nbark.<span class=\"hljs-property\">animal</span> = <span class=\"hljs-string\">&#x27;dog&#x27;</span>;",
      "choices": [
        "A: Nothing, this is totally fine!",
        "B: `SyntaxError`. You cannot add properties to a function this way.",
        "C: `\"Woof\"` gets logged.",
        "D: `ReferenceError`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nThis is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)\n\nA function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable."
    },
    {
      "id": 11,
      "title": "11. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">Person</span>(<span class=\"hljs-params\">firstName, lastName</span>) {\n  <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">firstName</span> = firstName;\n  <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">lastName</span> = lastName;\n}\n\n<span class=\"hljs-keyword\">const</span> member = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Person</span>(<span class=\"hljs-string\">&#x27;Lydia&#x27;</span>, <span class=\"hljs-string\">&#x27;Hallie&#x27;</span>);\n<span class=\"hljs-title class_\">Person</span>.<span class=\"hljs-property\">getFullName</span> = <span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`<span class=\"hljs-subst\">${<span class=\"hljs-variable language_\">this</span>.firstName}</span> <span class=\"hljs-subst\">${<span class=\"hljs-variable language_\">this</span>.lastName}</span>`</span>;\n};\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(member.<span class=\"hljs-title function_\">getFullName</span>());",
      "choices": [
        "A: `TypeError`",
        "B: `SyntaxError`",
        "C: `Lydia Hallie`",
        "D: `undefined` `undefined`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nIn JavaScript, functions are objects, and therefore, the method `getFullName` gets added to the constructor function object itself. For that reason, we can call `Person.getFullName()`, but `member.getFullName` throws a `TypeError`.\n\nIf you want a method to be available to all object instances, you have to add it to the prototype property:\n\nPerson.prototype.getFullName \\= function() {\n  return \\`${this.firstName} ${this.lastName}\\`;\n};"
    },
    {
      "id": 12,
      "title": "12. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">Person</span>(<span class=\"hljs-params\">firstName, lastName</span>) {\n  <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">firstName</span> = firstName;\n  <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">lastName</span> = lastName;\n}\n\n<span class=\"hljs-keyword\">const</span> lydia = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Person</span>(<span class=\"hljs-string\">&#x27;Lydia&#x27;</span>, <span class=\"hljs-string\">&#x27;Hallie&#x27;</span>);\n<span class=\"hljs-keyword\">const</span> sarah = <span class=\"hljs-title class_\">Person</span>(<span class=\"hljs-string\">&#x27;Sarah&#x27;</span>, <span class=\"hljs-string\">&#x27;Smith&#x27;</span>);\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(lydia);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(sarah);",
      "choices": [
        "A: `Person {firstName: \"Lydia\", lastName: \"Hallie\"}` and `undefined`",
        "B: `Person {firstName: \"Lydia\", lastName: \"Hallie\"}` and `Person {firstName: \"Sarah\", lastName: \"Smith\"}`",
        "C: `Person {firstName: \"Lydia\", lastName: \"Hallie\"}` and `{}`",
        "D: `Person {firstName: \"Lydia\", lastName: \"Hallie\"}` and `ReferenceError`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nFor `sarah`, we didn't use the `new` keyword. When using `new`, `this` refers to the new empty object we create. However, if you don't add `new`, `this` refers to the **global object**!\n\nWe said that `this.firstName` equals `\"Sarah\"` and `this.lastName` equals `\"Smith\"`. What we actually did, is defining `global.firstName = 'Sarah'` and `global.lastName = 'Smith'`. `sarah` itself is left `undefined`, since we don't return a value from the `Person` function."
    },
    {
      "id": 13,
      "title": "13. What are the three phases of event propagation?",
      "text": null,
      "choices": [
        "A: Target > Capturing > Bubbling",
        "B: Bubbling > Target > Capturing",
        "C: Target > Bubbling > Capturing",
        "D: Capturing > Target > Bubbling"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nDuring the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.\n\n[![](https://camo.githubusercontent.com/b302f8396d6e312bb45dce44b610d3bb03210420d43b32480893c9786a4427e5/68747470733a2f2f692e696d6775722e636f6d2f4e31386f5267642e706e67)](https://camo.githubusercontent.com/b302f8396d6e312bb45dce44b610d3bb03210420d43b32480893c9786a4427e5/68747470733a2f2f692e696d6775722e636f6d2f4e31386f5267642e706e67)"
    },
    {
      "id": 14,
      "title": "14. All object have prototypes.",
      "text": null,
      "choices": [
        "A: true",
        "B: false"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nAll objects have prototypes, except for the **base object**. The base object is the object created by the user, or an object that is created using the `new` keyword. The base object has access to some methods and properties, such as `.toString`. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you."
    },
    {
      "id": 15,
      "title": "15. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">sum</span>(<span class=\"hljs-params\">a, b</span>) {\n  <span class=\"hljs-keyword\">return</span> a + b;\n}\n\n<span class=\"hljs-title function_\">sum</span>(<span class=\"hljs-number\">1</span>, <span class=\"hljs-string\">&#x27;2&#x27;</span>);",
      "choices": [
        "A: `NaN`",
        "B: `TypeError`",
        "C: `\"12\"`",
        "D: `3`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nJavaScript is a **dynamically typed language**: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another.\n\nIn this example, JavaScript converts the number `1` into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`'2'`), the number is treated as a string. We can concatenate strings like `\"Hello\" + \"World\"`, so what's happening here is `\"1\" + \"2\"` which returns `\"12\"`."
    },
    {
      "id": 16,
      "title": "16. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">let</span> number = <span class=\"hljs-number\">0</span>;\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(number++);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(++number);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(number);",
      "choices": [
        "A: `1` `1` `2`",
        "B: `1` `2` `2`",
        "C: `0` `2` `2`",
        "D: `0` `1` `2`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nThe **postfix** unary operator `++`:\n\n1.  Returns the value (this returns `0`)\n2.  Increments the value (number is now `1`)\n\nThe **prefix** unary operator `++`:\n\n1.  Increments the value (number is now `2`)\n2.  Returns the value (this returns `2`)\n\nThis returns `0 2 2`."
    },
    {
      "id": 17,
      "title": "17. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">getPersonInfo</span>(<span class=\"hljs-params\">one, two, three</span>) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(one);\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(two);\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(three);\n}\n\n<span class=\"hljs-keyword\">const</span> person = <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>;\n<span class=\"hljs-keyword\">const</span> age = <span class=\"hljs-number\">21</span>;\n\ngetPersonInfo<span class=\"hljs-string\">`<span class=\"hljs-subst\">${person}</span> is <span class=\"hljs-subst\">${age}</span> years old`</span>;",
      "choices": [
        "A: `\"Lydia\"` `21` `[\"\", \" is \", \" years old\"]`",
        "B: `[\"\", \" is \", \" years old\"]` `\"Lydia\"` `21`",
        "C: `\"Lydia\"` `[\"\", \" is \", \" years old\"]` `21`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nIf you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!"
    },
    {
      "id": 18,
      "title": "18. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">checkAge</span>(<span class=\"hljs-params\">data</span>) {\n  <span class=\"hljs-keyword\">if</span> (data === { <span class=\"hljs-attr\">age</span>: <span class=\"hljs-number\">18</span> }) {\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;You are an adult!&#x27;</span>);\n  } <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (data == { <span class=\"hljs-attr\">age</span>: <span class=\"hljs-number\">18</span> }) {\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;You are still an adult.&#x27;</span>);\n  } <span class=\"hljs-keyword\">else</span> {\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">`Hmm.. You don&#x27;t have an age I guess`</span>);\n  }\n}\n\n<span class=\"hljs-title function_\">checkAge</span>({ <span class=\"hljs-attr\">age</span>: <span class=\"hljs-number\">18</span> });",
      "choices": [
        "A: `You are an adult!`",
        "B: `You are still an adult.`",
        "C: `Hmm.. You don't have an age I guess`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nWhen testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory.\n\nThe two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.\n\nThis is why both `{ age: 18 } === { age: 18 }` and `{ age: 18 } == { age: 18 }` return `false`."
    },
    {
      "id": 19,
      "title": "19. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">getAge</span>(<span class=\"hljs-params\">...args</span>) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-keyword\">typeof</span> args);\n}\n\n<span class=\"hljs-title function_\">getAge</span>(<span class=\"hljs-number\">21</span>);",
      "choices": [
        "A: `\"number\"`",
        "B: `\"array\"`",
        "C: `\"object\"`",
        "D: `\"NaN\"`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nThe rest parameter (`...args`) lets us \"collect\" all remaining arguments into an array. An array is an object, so `typeof args` returns `\"object\"`"
    },
    {
      "id": 20,
      "title": "20. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">getAge</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-string\">&#x27;use strict&#x27;</span>;\n  age = <span class=\"hljs-number\">21</span>;\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(age);\n}\n\n<span class=\"hljs-title function_\">getAge</span>();",
      "choices": [
        "A: `21`",
        "B: `undefined`",
        "C: `ReferenceError`",
        "D: `TypeError`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nWith `\"use strict\"`, you can make sure that you don't accidentally declare global variables. We never declared the variable `age`, and since we use `\"use strict\"`, it will throw a reference error. If we didn't use `\"use strict\"`, it would have worked, since the property `age` would have gotten added to the global object."
    },
    {
      "id": 21,
      "title": "21. What's the value of sum?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> sum = <span class=\"hljs-built_in\">eval</span>(<span class=\"hljs-string\">&#x27;10*10+5&#x27;</span>);",
      "choices": [
        "A: `105`",
        "B: `\"105\"`",
        "C: `TypeError`",
        "D: `\"10*10+5\"`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\n`eval` evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is `10 * 10 + 5`. This returns the number `105`."
    },
    {
      "id": 22,
      "title": "22. How long is cool_secret accessible?",
      "text": null,
      "code": "<span class=\"hljs-variable language_\">sessionStorage</span>.<span class=\"hljs-title function_\">setItem</span>(<span class=\"hljs-string\">&#x27;cool_secret&#x27;</span>, <span class=\"hljs-number\">123</span>);",
      "choices": [
        "A: Forever, the data doesn't get lost.",
        "B: When the user closes the tab.",
        "C: When the user closes the entire browser, not only the tab.",
        "D: When the user shuts off their computer."
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nThe data stored in `sessionStorage` is removed after closing the _tab_.\n\nIf you used `localStorage`, the data would've been there forever, unless for example `localStorage.clear()` is invoked."
    },
    {
      "id": 23,
      "title": "23. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">var</span> num = <span class=\"hljs-number\">8</span>;\n<span class=\"hljs-keyword\">var</span> num = <span class=\"hljs-number\">10</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(num);",
      "choices": [
        "A: `8`",
        "B: `10`",
        "C: `SyntaxError`",
        "D: `ReferenceError`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWith the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.\n\nYou cannot do this with `let` or `const` since they're block-scoped and therefore can't be redeclared."
    },
    {
      "id": 24,
      "title": "24. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> obj = { <span class=\"hljs-number\">1</span>: <span class=\"hljs-string\">&#x27;a&#x27;</span>, <span class=\"hljs-number\">2</span>: <span class=\"hljs-string\">&#x27;b&#x27;</span>, <span class=\"hljs-number\">3</span>: <span class=\"hljs-string\">&#x27;c&#x27;</span> };\n<span class=\"hljs-keyword\">const</span> set = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Set</span>([<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">3</span>, <span class=\"hljs-number\">4</span>, <span class=\"hljs-number\">5</span>]);\n\nobj.<span class=\"hljs-title function_\">hasOwnProperty</span>(<span class=\"hljs-string\">&#x27;1&#x27;</span>);\nobj.<span class=\"hljs-title function_\">hasOwnProperty</span>(<span class=\"hljs-number\">1</span>);\nset.<span class=\"hljs-title function_\">has</span>(<span class=\"hljs-string\">&#x27;1&#x27;</span>);\nset.<span class=\"hljs-title function_\">has</span>(<span class=\"hljs-number\">1</span>);",
      "choices": [
        "A: `false` `true` `false` `true`",
        "B: `false` `true` `true` `true`",
        "C: `true` `true` `false` `true`",
        "D: `true` `true` `true` `true`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nAll object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true.\n\nIt doesn't work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`."
    },
    {
      "id": 25,
      "title": "25. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> obj = { <span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">&#x27;one&#x27;</span>, <span class=\"hljs-attr\">b</span>: <span class=\"hljs-string\">&#x27;two&#x27;</span>, <span class=\"hljs-attr\">a</span>: <span class=\"hljs-string\">&#x27;three&#x27;</span> };\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(obj);",
      "choices": [
        "A: `{ a: \"one\", b: \"two\" }`",
        "B: `{ b: \"two\", a: \"three\" }`",
        "C: `{ a: \"three\", b: \"two\" }`",
        "D: `SyntaxError`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nIf you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value."
    },
    {
      "id": 26,
      "title": "26. The JavaScript global execution context creates two things for you: the global object, and the \"this\" keyword.",
      "text": null,
      "choices": [
        "A: true",
        "B: false",
        "C: it depends"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nThe base execution context is the global execution context: it's what's accessible everywhere in your code."
    },
    {
      "id": 27,
      "title": "27. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">1</span>; i &lt; <span class=\"hljs-number\">5</span>; i++) {\n  <span class=\"hljs-keyword\">if</span> (i === <span class=\"hljs-number\">3</span>) <span class=\"hljs-keyword\">continue</span>;\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(i);\n}",
      "choices": [
        "A: `1` `2`",
        "B: `1` `2` `3`",
        "C: `1` `2` `4`",
        "D: `1` `3` `4`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nThe `continue` statement skips an iteration if a certain condition returns `true`."
    },
    {
      "id": 28,
      "title": "28. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-title class_\">String</span>.<span class=\"hljs-property\"><span class=\"hljs-keyword\">prototype</span></span>.<span class=\"hljs-property\">giveLydiaPizza</span> = <span class=\"hljs-function\">() =&gt;</span> {\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">&#x27;Just give Lydia pizza already!&#x27;</span>;\n};\n\n<span class=\"hljs-keyword\">const</span> name = <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(name.<span class=\"hljs-title function_\">giveLydiaPizza</span>())",
      "choices": [
        "A: `\"Just give Lydia pizza already!\"`",
        "B: `TypeError: not a function`",
        "C: `SyntaxError`",
        "D: `undefined`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\n`String` is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!"
    },
    {
      "id": 29,
      "title": "29. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> a = {};\n<span class=\"hljs-keyword\">const</span> b = { <span class=\"hljs-attr\">key</span>: <span class=\"hljs-string\">&#x27;b&#x27;</span> };\n<span class=\"hljs-keyword\">const</span> c = { <span class=\"hljs-attr\">key</span>: <span class=\"hljs-string\">&#x27;c&#x27;</span> };\n\na[b] = <span class=\"hljs-number\">123</span>;\na[c] = <span class=\"hljs-number\">456</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(a[b]);",
      "choices": [
        "A: `123`",
        "B: `456`",
        "C: `undefined`",
        "D: `ReferenceError`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nObject keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.\n\nHowever, when we stringify an object, it becomes `\"[object Object]\"`. So what we are saying here, is that `a[\"[object Object]\"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a[\"[object Object]\"] = 456`.\n\nThen, we log `a[b]`, which is actually `a[\"[object Object]\"]`. We just set that to `456`, so it returns `456`."
    },
    {
      "id": 30,
      "title": "30. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">foo</span> = (<span class=\"hljs-params\"></span>) =&gt; <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;First&#x27;</span>);\n<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">bar</span> = (<span class=\"hljs-params\"></span>) =&gt; <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;Second&#x27;</span>));\n<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">baz</span> = (<span class=\"hljs-params\"></span>) =&gt; <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;Third&#x27;</span>);\n\n<span class=\"hljs-title function_\">bar</span>();\n<span class=\"hljs-title function_\">foo</span>();\n<span class=\"hljs-title function_\">baz</span>();",
      "choices": [
        "A: `First` `Second` `Third`",
        "B: `First` `Third` `Second`",
        "C: `Second` `First` `Third`",
        "D: `Second` `Third` `First`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWe have a `setTimeout` function and invoked it first. Yet, it was logged last.\n\nThis is because in browsers, we don't just have the runtime engine, we also have something called a `WebAPI`. The `WebAPI` gives us the `setTimeout` function to start with, and for example the DOM.\n\nAfter the _callback_ is pushed to the WebAPI, the `setTimeout` function itself (but not the callback!) is popped off the stack.\n\n[![](https://camo.githubusercontent.com/3fb6829734d4f143e7b0e65777fb0fa797477b1099d5bf80dfff487dbf8d58ea/68747470733a2f2f692e696d6775722e636f6d2f58357773484f672e706e67)](https://camo.githubusercontent.com/3fb6829734d4f143e7b0e65777fb0fa797477b1099d5bf80dfff487dbf8d58ea/68747470733a2f2f692e696d6775722e636f6d2f58357773484f672e706e67)\n\nNow, `foo` gets invoked, and `\"First\"` is being logged.\n\n[![](https://camo.githubusercontent.com/67039fb1a1de6555795f4a4d935902970273a9ecedbd4db0d704c890d4cc104d/68747470733a2f2f692e696d6775722e636f6d2f507663306447712e706e67)](https://camo.githubusercontent.com/67039fb1a1de6555795f4a4d935902970273a9ecedbd4db0d704c890d4cc104d/68747470733a2f2f692e696d6775722e636f6d2f507663306447712e706e67)\n\n`foo` is popped off the stack, and `baz` gets invoked. `\"Third\"` gets logged.\n\n[![](https://camo.githubusercontent.com/3cc29283d12de4212d526a805190866349c3db20bf4b51e1fae5f08e318bad16/68747470733a2f2f692e696d6775722e636f6d2f576841326243502e706e67)](https://camo.githubusercontent.com/3cc29283d12de4212d526a805190866349c3db20bf4b51e1fae5f08e318bad16/68747470733a2f2f692e696d6775722e636f6d2f576841326243502e706e67)\n\nThe WebAPI can't just add stuff to the stack whenever it's ready. Instead, it pushes the callback function to something called the _queue_.\n\n[![](https://camo.githubusercontent.com/ac7d6708d80a2f40ef6887fd10e09b9921bb76b74024debb3b0a9fdc41f42d52/68747470733a2f2f692e696d6775722e636f6d2f4e536e445a6d552e706e67)](https://camo.githubusercontent.com/ac7d6708d80a2f40ef6887fd10e09b9921bb76b74024debb3b0a9fdc41f42d52/68747470733a2f2f692e696d6775722e636f6d2f4e536e445a6d552e706e67)\n\nThis is where an event loop starts to work. An **event loop** looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.\n\n[![](https://camo.githubusercontent.com/22adea15940091bf25f18f9003d56b64b45ef2ac6038166ba1bae08c32eb4570/68747470733a2f2f692e696d6775722e636f6d2f757969536341492e706e67)](https://camo.githubusercontent.com/22adea15940091bf25f18f9003d56b64b45ef2ac6038166ba1bae08c32eb4570/68747470733a2f2f692e696d6775722e636f6d2f757969536341492e706e67)\n\n`bar` gets invoked, `\"Second\"` gets logged, and it's popped off the stack."
    },
    {
      "id": 31,
      "title": "31. What is the event.target when clicking the button?",
      "text": null,
      "code": "&lt;div onclick=<span class=\"hljs-string\">&quot;console.log(&#x27;first div&#x27;)&quot;</span>&gt;\n  &lt;div onclick=&quot;console.log(&#x27;second div&#x27;)&quot;&gt;\n    &lt;button onclick=&quot;console.log(&#x27;button&#x27;)&quot;&gt;\n      Click!\n    &lt;/button&gt;\n  &lt;/div&gt;\n&lt;/div&gt;",
      "choices": [
        "A: Outer `div`",
        "B: Inner `div`",
        "C: `button`",
        "D: An array of all nested elements."
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nThe deepest nested element that caused the event is the target of the event. You can stop bubbling by `event.stopPropagation`"
    },
    {
      "id": 32,
      "title": "32. When you click the paragraph, what's the logged output?",
      "text": null,
      "code": "&lt;div onclick=<span class=\"hljs-string\">&quot;console.log(&#x27;div&#x27;)&quot;</span>&gt;\n  &lt;p onclick=&quot;console.log(&#x27;p&#x27;)&quot;&gt;\n    Click here!\n  &lt;/p&gt;\n&lt;/div&gt;",
      "choices": [
        "A: `p` `div`",
        "B: `div` `p`",
        "C: `p`",
        "D: `div`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nIf we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards."
    },
    {
      "id": 33,
      "title": "33. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> person = { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Lydia&#x27;</span> };\n\n<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">sayHi</span>(<span class=\"hljs-params\">age</span>) {\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`<span class=\"hljs-subst\">${<span class=\"hljs-variable language_\">this</span>.name}</span> is <span class=\"hljs-subst\">${age}</span>`</span>;\n}\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(sayHi.<span class=\"hljs-title function_\">call</span>(person, <span class=\"hljs-number\">21</span>));\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(sayHi.<span class=\"hljs-title function_\">bind</span>(person, <span class=\"hljs-number\">21</span>));",
      "choices": [
        "A: `undefined is 21` `Lydia is 21`",
        "B: `function` `function`",
        "C: `Lydia is 21` `Lydia is 21`",
        "D: `Lydia is 21` `function`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nWith both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_!\n\n`.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately."
    },
    {
      "id": 34,
      "title": "34. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">sayHi</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-keyword\">return</span> (<span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-number\">0</span>)();\n}\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-title function_\">sayHi</span>());",
      "choices": [
        "A: `\"object\"`",
        "B: `\"number\"`",
        "C: `\"function\"`",
        "D: `\"undefined\"`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nThe `sayHi` function returns the returned value of the immediately invoked function expression (IIFE). This function returned `0`, which is type `\"number\"`.\n\nFYI: `typeof` can return the following list of values: `undefined`, `boolean`, `number`, `bigint`, `string`, `symbol`, `function` and `object`. Note that `typeof null` returns `\"object\"`."
    },
    {
      "id": 35,
      "title": "35. Which of these values are falsy?",
      "text": null,
      "code": "<span class=\"hljs-number\">0</span>;\n<span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Number</span>(<span class=\"hljs-number\">0</span>);\n(<span class=\"hljs-string\">&#x27;&#x27;</span>);\n(<span class=\"hljs-string\">&#x27; &#x27;</span>);\n<span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Boolean</span>(<span class=\"hljs-literal\">false</span>);\n<span class=\"hljs-literal\">undefined</span>;",
      "choices": [
        "A: `0`, `''`, `undefined`",
        "B: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`",
        "C: `0`, `''`, `new Boolean(false)`, `undefined`",
        "D: All of them are falsy"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nThere are 8 falsy values:\n\n*   `undefined`\n*   `null`\n*   `NaN`\n*   `false`\n*   `''` (empty string)\n*   `0`\n*   `-0`\n*   `0n` (BigInt(0))\n\nFunction constructors, like `new Number` and `new Boolean` are truthy."
    },
    {
      "id": 36,
      "title": "36. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-number\">1</span>);",
      "choices": [
        "A: `\"number\"`",
        "B: `\"string\"`",
        "C: `\"object\"`",
        "D: `\"undefined\"`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\n`typeof 1` returns `\"number\"`. `typeof \"number\"` returns `\"string\"`"
    },
    {
      "id": 37,
      "title": "37. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> numbers = [<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">3</span>];\nnumbers[<span class=\"hljs-number\">10</span>] = <span class=\"hljs-number\">11</span>;\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(numbers);",
      "choices": [
        "A: `[1, 2, 3, null x 7, 11]`",
        "B: `[1, 2, 3, 11]`",
        "C: `[1, 2, 3, empty x 7, 11]`",
        "D: `SyntaxError`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nWhen you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called \"empty slots\". These actually have the value of `undefined`, but you will see something like:\n\n`[1, 2, 3, empty x 7, 11]`\n\ndepending on where you run it (it's different for every browser, node, etc.)"
    },
    {
      "id": 38,
      "title": "38. What's the output?",
      "text": null,
      "code": "(<span class=\"hljs-function\">() =&gt;</span> {\n  <span class=\"hljs-keyword\">let</span> x, y;\n  <span class=\"hljs-keyword\">try</span> {\n    <span class=\"hljs-keyword\">throw</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Error</span>();\n  } <span class=\"hljs-keyword\">catch</span> (x) {\n    (x = <span class=\"hljs-number\">1</span>), (y = <span class=\"hljs-number\">2</span>);\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(x);\n  }\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(x);\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(y);\n})();",
      "choices": [
        "A: `1` `undefined` `2`",
        "B: `undefined` `undefined` `undefined`",
        "C: `1` `1` `2`",
        "D: `1` `undefined` `undefined`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nThe `catch` block receives the argument `x`. This is not the same `x` as the variable when we pass arguments. This variable `x` is block-scoped.\n\nLater, we set this block-scoped variable equal to `1`, and set the value of the variable `y`. Now, we log the block-scoped variable `x`, which is equal to `1`.\n\nOutside of the `catch` block, `x` is still `undefined`, and `y` is `2`. When we want to `console.log(x)` outside of the `catch` block, it returns `undefined`, and `y` returns `2`."
    },
    {
      "id": 39,
      "title": "39. Everything in JavaScript is either a...",
      "text": null,
      "choices": [
        "A: primitive or object",
        "B: function or object",
        "C: trick question! only objects",
        "D: number or object"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nJavaScript only has primitive types and objects.\n\nPrimitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`.\n\nWhat differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that `'foo'.toUpperCase()` evaluates to `'FOO'` and does not result in a `TypeError`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the primitive type using one of the wrapper classes, i.e. `String`, and then immediately discard the wrapper after the expression evaluates. All primitives except for `null` and `undefined` exhibit this behaviour."
    },
    {
      "id": 40,
      "title": "40. What's the output?",
      "text": null,
      "code": "[[<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">1</span>], [<span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">3</span>]].<span class=\"hljs-title function_\">reduce</span>(\n  <span class=\"hljs-function\">(<span class=\"hljs-params\">acc, cur</span>) =&gt;</span> {\n    <span class=\"hljs-keyword\">return</span> acc.<span class=\"hljs-title function_\">concat</span>(cur);\n  },\n  [<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>],\n);",
      "choices": [
        "A: `[0, 1, 2, 3, 1, 2]`",
        "B: `[6, 1, 2]`",
        "C: `[1, 2, 0, 1, 2, 3]`",
        "D: `[1, 2, 6]`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\n`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.\n\nThen, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`"
    },
    {
      "id": 41,
      "title": "41. What's the output?",
      "text": null,
      "code": "!!<span class=\"hljs-literal\">null</span>;\n!!<span class=\"hljs-string\">&#x27;&#x27;</span>;\n!!<span class=\"hljs-number\">1</span>;",
      "choices": [
        "A: `false` `true` `false`",
        "B: `false` `false` `true`",
        "C: `false` `true` `true`",
        "D: `true` `true` `false`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\n`null` is falsy. `!null` returns `true`. `!true` returns `false`.\n\n`\"\"` is falsy. `!\"\"` returns `true`. `!true` returns `false`.\n\n`1` is truthy. `!1` returns `false`. `!false` returns `true`."
    },
    {
      "id": 42,
      "title": "42. What does the setInterval method return in the browser?",
      "text": null,
      "code": "<span class=\"hljs-built_in\">setInterval</span>(<span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;Hi&#x27;</span>), <span class=\"hljs-number\">1000</span>);",
      "choices": [
        "A: a unique id",
        "B: the amount of milliseconds specified",
        "C: the passed function",
        "D: `undefined`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nIt returns a unique id. This id can be used to clear that interval with the `clearInterval()` function."
    },
    {
      "id": 43,
      "title": "43. What does this return?",
      "text": null,
      "code": "[...<span class=\"hljs-string\">&#x27;Lydia&#x27;</span>];",
      "choices": [
        "A: `[\"L\", \"y\", \"d\", \"i\", \"a\"]`",
        "B: `[\"Lydia\"]`",
        "C: `[[], \"Lydia\"]`",
        "D: `[[\"L\", \"y\", \"d\", \"i\", \"a\"]]`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nA string is an iterable. The spread operator maps every character of an iterable to one element."
    },
    {
      "id": 44,
      "title": "44. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span>* <span class=\"hljs-title function_\">generator</span>(<span class=\"hljs-params\">i</span>) {\n  <span class=\"hljs-keyword\">yield</span> i;\n  <span class=\"hljs-keyword\">yield</span> i * <span class=\"hljs-number\">2</span>;\n}\n\n<span class=\"hljs-keyword\">const</span> gen = <span class=\"hljs-title function_\">generator</span>(<span class=\"hljs-number\">10</span>);\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(gen.<span class=\"hljs-title function_\">next</span>().<span class=\"hljs-property\">value</span>);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(gen.<span class=\"hljs-title function_\">next</span>().<span class=\"hljs-property\">value</span>);",
      "choices": [
        "A: `[0, 10], [10, 20]`",
        "B: `20, 20`",
        "C: `10, 20`",
        "D: `0, 10 and 10, 20`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nRegular functions cannot be stopped mid-way after invocation. However, a generator function can be \"stopped\" midway, and later continue from where it stopped. Every time a generator function encounters a `yield` keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t _return_ the value, it _yields_ the value.\n\nFirst, we initialize the generator function with `i` equal to `10`. We invoke the generator function using the `next()` method. The first time we invoke the generator function, `i` is equal to `10`. It encounters the first `yield` keyword: it yields the value of `i`. The generator is now \"paused\", and `10` gets logged.\n\nThen, we invoke the function again with the `next()` method. It starts to continue where it stopped previously, still with `i` equal to `10`. Now, it encounters the next `yield` keyword, and yields `i * 2`. `i` is equal to `10`, so it returns `10 * 2`, which is `20`. This results in `10, 20`."
    },
    {
      "id": 45,
      "title": "45. What does this return?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> firstPromise = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">res, rej</span>) =&gt;</span> {\n  <span class=\"hljs-built_in\">setTimeout</span>(res, <span class=\"hljs-number\">500</span>, <span class=\"hljs-string\">&#x27;one&#x27;</span>);\n});\n\n<span class=\"hljs-keyword\">const</span> secondPromise = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">res, rej</span>) =&gt;</span> {\n  <span class=\"hljs-built_in\">setTimeout</span>(res, <span class=\"hljs-number\">100</span>, <span class=\"hljs-string\">&#x27;two&#x27;</span>);\n});\n\n<span class=\"hljs-title class_\">Promise</span>.<span class=\"hljs-title function_\">race</span>([firstPromise, secondPromise]).<span class=\"hljs-title function_\">then</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">res</span> =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(res));",
      "choices": [
        "A: `\"one\"`",
        "B: `\"two\"`",
        "C: `\"two\" \"one\"`",
        "D: `\"one\" \"two\"`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWhen we pass multiple promises to the `Promise.race` method, it resolves/rejects the _first_ promise that resolves/rejects. To the `setTimeout` method, we pass a timer: 500ms for the first promise (`firstPromise`), and 100ms for the second promise (`secondPromise`). This means that the `secondPromise` resolves first with the value of `'two'`. `res` now holds the value of `'two'`, which gets logged."
    },
    {
      "id": 46,
      "title": "46. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">let</span> person = { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Lydia&#x27;</span> };\n<span class=\"hljs-keyword\">const</span> members = [person];\nperson = <span class=\"hljs-literal\">null</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(members);",
      "choices": [
        "A: `null`",
        "B: `[null]`",
        "C: `[{}]`",
        "D: `[{ name: \"Lydia\" }]`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nFirst, we declare a variable `person` with the value of an object that has a `name` property.\n\n[![](https://camo.githubusercontent.com/0354f2de42a6883901ffee576d298d6695b3e892bdb1aa34222d28d22a2ae4ac/68747470733a2f2f692e696d6775722e636f6d2f544d4c314d62532e706e67)](https://camo.githubusercontent.com/0354f2de42a6883901ffee576d298d6695b3e892bdb1aa34222d28d22a2ae4ac/68747470733a2f2f692e696d6775722e636f6d2f544d4c314d62532e706e67)\n\nThen, we declare a variable called `members`. We set the first element of that array equal to the value of the `person` variable. Objects interact by _reference_ when setting them equal to each other. When you assign a reference from one variable to another, you make a _copy_ of that reference. (note that they don't have the _same_ reference!)\n\n[![](https://camo.githubusercontent.com/db6a6b5701fabef09480083f86184664eaa5ee76be47421c312ff6e619dbe0a8/68747470733a2f2f692e696d6775722e636f6d2f465347354b33462e706e67)](https://camo.githubusercontent.com/db6a6b5701fabef09480083f86184664eaa5ee76be47421c312ff6e619dbe0a8/68747470733a2f2f692e696d6775722e636f6d2f465347354b33462e706e67)\n\nThen, we set the variable `person` equal to `null`.\n\n[![](https://camo.githubusercontent.com/a531ccbf6cd1aab6e8523e6bf0e9b38a72c8924025e0c261b8ca533a689f13b0/68747470733a2f2f692e696d6775722e636f6d2f73596a63734d542e706e67)](https://camo.githubusercontent.com/a531ccbf6cd1aab6e8523e6bf0e9b38a72c8924025e0c261b8ca533a689f13b0/68747470733a2f2f692e696d6775722e636f6d2f73596a63734d542e706e67)\n\nWe are only modifying the value of the `person` variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in `members` still holds its reference to the original object. When we log the `members` array, the first element still holds the value of the object, which gets logged."
    },
    {
      "id": 47,
      "title": "47. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> person = {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>,\n  <span class=\"hljs-attr\">age</span>: <span class=\"hljs-number\">21</span>,\n};\n\n<span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">const</span> item <span class=\"hljs-keyword\">in</span> person) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(item);\n}",
      "choices": [
        "A: `{ name: \"Lydia\" }, { age: 21 }`",
        "B: `\"name\", \"age\"`",
        "C: `\"Lydia\", 21`",
        "D: `[\"name\", \"Lydia\"], [\"age\", 21]`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWith a `for-in` loop, we can iterate through object keys, in this case `name` and `age`. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of `item` equal to the current key it’s iterating over. First, `item` is equal to `name`, and gets logged. Then, `item` is equal to `age`, which gets logged."
    },
    {
      "id": 48,
      "title": "48. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-number\">3</span> + <span class=\"hljs-number\">4</span> + <span class=\"hljs-string\">&#x27;5&#x27;</span>);",
      "choices": [
        "A: `\"345\"`",
        "B: `\"75\"`",
        "C: `12`",
        "D: `\"12\"`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nOperator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right.\n\n`3 + 4` gets evaluated first. This results in the number `7`.\n\n`7 + '5'` results in `\"75\"` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `\"7\" + \"5\"` results in `\"75\"`."
    },
    {
      "id": 49,
      "title": "49. What's the value of num?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> num = <span class=\"hljs-built_in\">parseInt</span>(<span class=\"hljs-string\">&#x27;7*6&#x27;</span>, <span class=\"hljs-number\">10</span>);",
      "choices": [
        "A: `42`",
        "B: `\"42\"`",
        "C: `7`",
        "D: `NaN`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nOnly the first numbers in the string is returned. Based on the _radix_ (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the `parseInt` checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.\n\n`*` is not a valid number. It only parses `\"7\"` into the decimal `7`. `num` now holds the value of `7`."
    },
    {
      "id": 50,
      "title": "50. What's the output?",
      "text": null,
      "code": "[<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">3</span>].<span class=\"hljs-title function_\">map</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">num</span> =&gt;</span> {\n  <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> num === <span class=\"hljs-string\">&#x27;number&#x27;</span>) <span class=\"hljs-keyword\">return</span>;\n  <span class=\"hljs-keyword\">return</span> num * <span class=\"hljs-number\">2</span>;\n});",
      "choices": [
        "A: `[]`",
        "B: `[null, null, null]`",
        "C: `[undefined, undefined, undefined]`",
        "D: `[ 3 x empty ]`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nWhen mapping over the array, the value of `num` is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement `typeof num === \"number\"` returns `true`. The map function creates a new array and inserts the values returned from the function.\n\nHowever, we don’t return a value. When we don’t return a value from the function, the function returns `undefined`. For every element in the array, the function block gets called, so for each element we return `undefined`."
    },
    {
      "id": 51,
      "title": "51. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">getInfo</span>(<span class=\"hljs-params\">member, year</span>) {\n  member.<span class=\"hljs-property\">name</span> = <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>;\n  year = <span class=\"hljs-string\">&#x27;1998&#x27;</span>;\n}\n\n<span class=\"hljs-keyword\">const</span> person = { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Sarah&#x27;</span> };\n<span class=\"hljs-keyword\">const</span> birthYear = <span class=\"hljs-string\">&#x27;1997&#x27;</span>;\n\n<span class=\"hljs-title function_\">getInfo</span>(person, birthYear);\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(person, birthYear);",
      "choices": [
        "A: `{ name: \"Lydia\" }, \"1997\"`",
        "B: `{ name: \"Sarah\" }, \"1998\"`",
        "C: `{ name: \"Lydia\" }, \"1998\"`",
        "D: `{ name: \"Sarah\" }, \"1997\"`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nArguments are passed by _value_, unless their value is an object, then they're passed by _reference_. `birthYear` is passed by value, since it's a string, not an object. When we pass arguments by value, a _copy_ of that value is created (see question 46).\n\nThe variable `birthYear` has a reference to the value `\"1997\"`. The argument `year` also has a reference to the value `\"1997\"`, but it's not the same value as `birthYear` has a reference to. When we update the value of `year` by setting `year` equal to `\"1998\"`, we are only updating the value of `year`. `birthYear` is still equal to `\"1997\"`.\n\nThe value of `person` is an object. The argument `member` has a (copied) reference to the _same_ object. When we modify a property of the object `member` has a reference to, the value of `person` will also be modified, since they both have a reference to the same object. `person`'s `name` property is now equal to the value `\"Lydia\"`"
    },
    {
      "id": 52,
      "title": "52. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">greeting</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-keyword\">throw</span> <span class=\"hljs-string\">&#x27;Hello world!&#x27;</span>;\n}\n\n<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">sayHi</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-keyword\">try</span> {\n    <span class=\"hljs-keyword\">const</span> data = <span class=\"hljs-title function_\">greeting</span>();\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;It worked!&#x27;</span>, data);\n  } <span class=\"hljs-keyword\">catch</span> (e) {\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;Oh no an error:&#x27;</span>, e);\n  }\n}\n\n<span class=\"hljs-title function_\">sayHi</span>();",
      "choices": [
        "A: `It worked! Hello world!`",
        "B: `Oh no an error: undefined`",
        "C: `SyntaxError: can only throw Error objects`",
        "D: `Oh no an error: Hello world!`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nWith the `throw` statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a **string**, a **number**, a **boolean** or an **object**. In this case, our exception is the string `'Hello world!'`.\n\nWith the `catch` statement, we can specify what to do if an exception is thrown in the `try` block. An exception is thrown: the string `'Hello world!'`. `e` is now equal to that string, which we log. This results in `'Oh an error: Hello world!'`."
    },
    {
      "id": 53,
      "title": "53. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">Car</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">make</span> = <span class=\"hljs-string\">&#x27;Lamborghini&#x27;</span>;\n  <span class=\"hljs-keyword\">return</span> { <span class=\"hljs-attr\">make</span>: <span class=\"hljs-string\">&#x27;Maserati&#x27;</span> };\n}\n\n<span class=\"hljs-keyword\">const</span> myCar = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Car</span>();\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(myCar.<span class=\"hljs-property\">make</span>);",
      "choices": [
        "A: `\"Lamborghini\"`",
        "B: `\"Maserati\"`",
        "C: `ReferenceError`",
        "D: `TypeError`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWhen a constructor function is called with the `new` keyword, it creates an object and sets the `this` keyword to refer to that object. By default, if the constructor function doesn't explicitly return anything, it will return the newly created object.\n\nIn this case, the constructor function `Car` explicitly returns a new object with `make` set to `\"Maserati\"`, which overrides the default behavior. Therefore, when `new Car()` is called, the _returned_ object is assigned to `myCar`, resulting in the output being `\"Maserati\"` when `myCar.make` is accessed."
    },
    {
      "id": 54,
      "title": "54. What's the output?",
      "text": null,
      "code": "(<span class=\"hljs-function\">() =&gt;</span> {\n  <span class=\"hljs-keyword\">let</span> x = (y = <span class=\"hljs-number\">10</span>);\n})();\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-keyword\">typeof</span> x);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-keyword\">typeof</span> y);",
      "choices": [
        "A: `\"undefined\", \"number\"`",
        "B: `\"number\", \"number\"`",
        "C: `\"object\", \"number\"`",
        "D: `\"number\", \"undefined\"`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\n`let x = (y = 10);` is actually shorthand for:\n\ny \\= 10;\nlet x \\= y;\n\nWhen we set `y` equal to `10`, we actually add a property `y` to the global object (`window` in browser, `global` in Node). In a browser, `window.y` is now equal to `10`.\n\nThen, we declare a variable `x` with the value of `y`, which is `10`. Variables declared with the `let` keyword are _block scoped_, they are only defined within the block they're declared in; the immediately invoked function expression (IIFE) in this case. When we use the `typeof` operator, the operand `x` is not defined: we are trying to access `x` outside of the block it's declared in. This means that `x` is not defined. Values who haven't been assigned a value or declared are of type `\"undefined\"`. `console.log(typeof x)` returns `\"undefined\"`.\n\nHowever, we created a global variable `y` when setting `y` equal to `10`. This value is accessible anywhere in our code. `y` is defined, and holds a value of type `\"number\"`. `console.log(typeof y)` returns `\"number\"`."
    },
    {
      "id": 55,
      "title": "55. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">Dog</span> {\n  <span class=\"hljs-title function_\">constructor</span>(<span class=\"hljs-params\">name</span>) {\n    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">name</span> = name;\n  }\n}\n\n<span class=\"hljs-title class_\">Dog</span>.<span class=\"hljs-property\"><span class=\"hljs-keyword\">prototype</span></span>.<span class=\"hljs-property\">bark</span> = <span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">`Woof I am <span class=\"hljs-subst\">${<span class=\"hljs-variable language_\">this</span>.name}</span>`</span>);\n};\n\n<span class=\"hljs-keyword\">const</span> pet = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Dog</span>(<span class=\"hljs-string\">&#x27;Mara&#x27;</span>);\n\npet.<span class=\"hljs-title function_\">bark</span>();\n\n<span class=\"hljs-keyword\">delete</span> <span class=\"hljs-title class_\">Dog</span>.<span class=\"hljs-property\"><span class=\"hljs-keyword\">prototype</span></span>.<span class=\"hljs-property\">bark</span>;\n\npet.<span class=\"hljs-title function_\">bark</span>();",
      "choices": [
        "A: `\"Woof I am Mara\"`, `TypeError`",
        "B: `\"Woof I am Mara\"`, `\"Woof I am Mara\"`",
        "C: `\"Woof I am Mara\"`, `undefined`",
        "D: `TypeError`, `TypeError`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nWe can delete properties from objects using the `delete` keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the `bark` function is not available anymore on the prototype after `delete Dog.prototype.bark`, yet we still try to access it.\n\nWhen we try to invoke something that is not a function, a `TypeError` is thrown. In this case `TypeError: pet.bark is not a function`, since `pet.bark` is `undefined`."
    },
    {
      "id": 56,
      "title": "56. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> set = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Set</span>([<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">3</span>, <span class=\"hljs-number\">4</span>]);\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(set);",
      "choices": [
        "A: `[1, 1, 2, 3, 4]`",
        "B: `[1, 2, 3, 4]`",
        "C: `{1, 1, 2, 3, 4}`",
        "D: `{1, 2, 3, 4}`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nThe `Set` object is a collection of _unique_ values: a value can only occur once in a set.\n\nWe passed the iterable `[1, 1, 2, 3, 4]` with a duplicate value `1`. Since we cannot have two of the same values in a set, one of them is removed. This results in `{1, 2, 3, 4}`."
    },
    {
      "id": 57,
      "title": "57. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-comment\">// counter.js</span>\n<span class=\"hljs-keyword\">let</span> counter = <span class=\"hljs-number\">10</span>;\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> counter;\n\n\n<span class=\"hljs-comment\">// index.js</span>\n<span class=\"hljs-keyword\">import</span> myCounter <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;./counter&#x27;</span>;\n\nmyCounter += <span class=\"hljs-number\">1</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(myCounter);",
      "choices": [
        "A: `10`",
        "B: `11`",
        "C: `Error`",
        "D: `NaN`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nAn imported module is _read-only_: you cannot modify the imported module. Only the module that exports them can change its value.\n\nWhen we try to increment the value of `myCounter`, it throws an error: `myCounter` is read-only and cannot be modified."
    },
    {
      "id": 58,
      "title": "58. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> name = <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>;\nage = <span class=\"hljs-number\">21</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-keyword\">delete</span> name);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-keyword\">delete</span> age);",
      "choices": [
        "A: `false`, `true`",
        "B: `\"Lydia\"`, `21`",
        "C: `true`, `true`",
        "D: `undefined`, `undefined`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nThe `delete` operator returns a boolean value: `true` on a successful deletion, else it'll return `false`. However, variables declared with the `var`, `const` or `let` keyword cannot be deleted using the `delete` operator.\n\nThe `name` variable was declared with a `const` keyword, so its deletion is not successful: `false` is returned. When we set `age` equal to `21`, we actually added a property called `age` to the global object. You can successfully delete properties from objects this way, also the global object, so `delete age` returns `true`."
    },
    {
      "id": 59,
      "title": "59. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> numbers = [<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">3</span>, <span class=\"hljs-number\">4</span>, <span class=\"hljs-number\">5</span>];\n<span class=\"hljs-keyword\">const</span> [y] = numbers;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(y);",
      "choices": [
        "A: `[[1, 2, 3, 4, 5]]`",
        "B: `[1, 2, 3, 4, 5]`",
        "C: `1`",
        "D: `[1]`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nWe can unpack values from arrays or properties from objects through destructuring. For example:\n\n\\[a, b\\] \\= \\[1, 2\\];\n\n[![](https://camo.githubusercontent.com/1d080a7e86e34703ef69dfdeae38d6c7a888923a62ee7a4f34c748b8baf6e850/68747470733a2f2f692e696d6775722e636f6d2f41444670566f702e706e67)](https://camo.githubusercontent.com/1d080a7e86e34703ef69dfdeae38d6c7a888923a62ee7a4f34c748b8baf6e850/68747470733a2f2f692e696d6775722e636f6d2f41444670566f702e706e67)\n\nThe value of `a` is now `1`, and the value of `b` is now `2`. What we actually did in the question, is:\n\n\\[y\\] \\= \\[1, 2, 3, 4, 5\\];\n\n[![](https://camo.githubusercontent.com/c9ef7f0415dde444c3a74d5e26db819c19935b87dc9c1a05a02f5ba1587b2788/68747470733a2f2f692e696d6775722e636f6d2f4e7a476b4d4e6b2e706e67)](https://camo.githubusercontent.com/c9ef7f0415dde444c3a74d5e26db819c19935b87dc9c1a05a02f5ba1587b2788/68747470733a2f2f692e696d6775722e636f6d2f4e7a476b4d4e6b2e706e67)\n\nThis means that the value of `y` is equal to the first value in the array, which is the number `1`. When we log `y`, `1` is returned."
    },
    {
      "id": 60,
      "title": "60. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> user = { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>, <span class=\"hljs-attr\">age</span>: <span class=\"hljs-number\">21</span> };\n<span class=\"hljs-keyword\">const</span> admin = { <span class=\"hljs-attr\">admin</span>: <span class=\"hljs-literal\">true</span>, ...user };\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(admin);",
      "choices": [
        "A: `{ admin: true, user: { name: \"Lydia\", age: 21 } }`",
        "B: `{ admin: true, name: \"Lydia\", age: 21 }`",
        "C: `{ admin: true, user: [\"Lydia\", 21] }`",
        "D: `{ admin: true }`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nIt's possible to combine objects using the spread operator `...`. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the `user` object, and add them to the `admin` object. The `admin` object now contains the copied key/value pairs, which results in `{ admin: true, name: \"Lydia\", age: 21 }`."
    },
    {
      "id": 61,
      "title": "61. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> person = { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Lydia&#x27;</span> };\n\n<span class=\"hljs-title class_\">Object</span>.<span class=\"hljs-title function_\">defineProperty</span>(person, <span class=\"hljs-string\">&#x27;age&#x27;</span>, { <span class=\"hljs-attr\">value</span>: <span class=\"hljs-number\">21</span> });\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(person);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title class_\">Object</span>.<span class=\"hljs-title function_\">keys</span>(person));",
      "choices": [
        "A: `{ name: \"Lydia\", age: 21 }`, `[\"name\", \"age\"]`",
        "B: `{ name: \"Lydia\", age: 21 }`, `[\"name\"]`",
        "C: `{ name: \"Lydia\"}`, `[\"name\", \"age\"]`",
        "D: `{ name: \"Lydia\"}`, `[\"age\"]`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWith the `defineProperty` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the `defineProperty` method, they are by default _not enumerable_. The `Object.keys` method returns all _enumerable_ property names from an object, in this case only `\"name\"`.\n\nProperties added using the `defineProperty` method are immutable by default. You can override this behavior using the `writable`, `configurable` and `enumerable` properties. This way, the `defineProperty` method gives you a lot more control over the properties you're adding to an object."
    },
    {
      "id": 62,
      "title": "62. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> settings = {\n  <span class=\"hljs-attr\">username</span>: <span class=\"hljs-string\">&#x27;lydiahallie&#x27;</span>,\n  <span class=\"hljs-attr\">level</span>: <span class=\"hljs-number\">19</span>,\n  <span class=\"hljs-attr\">health</span>: <span class=\"hljs-number\">90</span>,\n};\n\n<span class=\"hljs-keyword\">const</span> data = <span class=\"hljs-title class_\">JSON</span>.<span class=\"hljs-title function_\">stringify</span>(settings, [<span class=\"hljs-string\">&#x27;level&#x27;</span>, <span class=\"hljs-string\">&#x27;health&#x27;</span>]);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(data);",
      "choices": [
        "A: `\"{\"level\":19, \"health\":90}\"`",
        "B: `\"{\"username\": \"lydiahallie\"}\"`",
        "C: `\"[\"level\", \"health\"]\"`",
        "D: `\"{\"username\": \"lydiahallie\", \"level\":19, \"health\":90}\"`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nThe second argument of `JSON.stringify` is the _replacer_. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.\n\nIf the replacer is an _array_, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names `\"level\"` and `\"health\"` are included, `\"username\"` is excluded. `data` is now equal to `\"{\"level\":19, \"health\":90}\"`.\n\nIf the replacer is a _function_, this function gets called on every property in the object you're stringifying. The value returned from this function will be the value of the property when it's added to the JSON string. If the value is `undefined`, this property is excluded from the JSON string."
    },
    {
      "id": 63,
      "title": "63. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">let</span> num = <span class=\"hljs-number\">10</span>;\n\n<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">increaseNumber</span> = (<span class=\"hljs-params\"></span>) =&gt; num++;\n<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">increasePassedNumber</span> = number =&gt; number++;\n\n<span class=\"hljs-keyword\">const</span> num1 = <span class=\"hljs-title function_\">increaseNumber</span>();\n<span class=\"hljs-keyword\">const</span> num2 = <span class=\"hljs-title function_\">increasePassedNumber</span>(num1);\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(num1);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(num2);",
      "choices": [
        "A: `10`, `10`",
        "B: `10`, `11`",
        "C: `11`, `11`",
        "D: `11`, `12`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nThe unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `num1` is `10`, since the `increaseNumber` function first returns the value of `num`, which is `10`, and only increments the value of `num` afterwards.\n\n`num2` is `10`, since we passed `num1` to the `increasePassedNumber`. `number` is equal to `10`(the value of `num1`). Again, the unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `number` is `10`, so `num2` is equal to `10`."
    },
    {
      "id": 64,
      "title": "64. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> value = { <span class=\"hljs-attr\">number</span>: <span class=\"hljs-number\">10</span> };\n\n<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">multiply</span> = (<span class=\"hljs-params\">x = { ...value }</span>) =&gt; {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>((x.<span class=\"hljs-property\">number</span> *= <span class=\"hljs-number\">2</span>));\n};\n\n<span class=\"hljs-title function_\">multiply</span>();\n<span class=\"hljs-title function_\">multiply</span>();\n<span class=\"hljs-title function_\">multiply</span>(value);\n<span class=\"hljs-title function_\">multiply</span>(value);",
      "choices": [
        "A: `20`, `40`, `80`, `160`",
        "B: `20`, `40`, `20`, `40`",
        "C: `20`, `20`, `20`, `40`",
        "D: `NaN`, `NaN`, `20`, `40`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nIn ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is `\"undefined\"`. In this case, we spread the properties of the `value` object into a new object, so `x` has the default value of `{ number: 10 }`.\n\nThe default argument is evaluated at _call time_! Every time we call the function, a _new_ object is created. We invoke the `multiply` function the first two times without passing a value: `x` has the default value of `{ number: 10 }`. We then log the multiplied value of that number, which is `20`.\n\nThe third time we invoke multiply, we do pass an argument: the object called `value`. The `*=` operator is actually shorthand for `x.number = x.number * 2`: we modify the value of `x.number`, and log the multiplied value `20`.\n\nThe fourth time, we pass the `value` object again. `x.number` was previously modified to `20`, so `x.number *= 2` logs `40`."
    },
    {
      "id": 65,
      "title": "65. What's the output?",
      "text": null,
      "code": "[<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">3</span>, <span class=\"hljs-number\">4</span>].<span class=\"hljs-title function_\">reduce</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">x, y</span>) =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(x, y));",
      "choices": [
        "A: `1` `2` and `3` `3` and `6` `4`",
        "B: `1` `2` and `2` `3` and `3` `4`",
        "C: `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`",
        "D: `1` `2` and `undefined` `3` and `undefined` `4`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nThe first argument that the `reduce` method receives is the _accumulator_, `x` in this case. The second argument is the _current value_, `y`. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value.\n\nIn this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.\n\nThe value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional `initialValue` argument to the `reduce` method, the accumulator is equal to the first element on the first call.\n\nOn the first call, the accumulator (`x`) is `1`, and the current value (`y`) is `2`. We don't return from the callback function, we log the accumulator and current value: `1` and `2` get logged.\n\nIf you don't return a value from a function, it returns `undefined`. On the next call, the accumulator is `undefined`, and the current value is `3`. `undefined` and `3` get logged.\n\nOn the fourth call, we again don't return from the callback function. The accumulator is again `undefined`, and the current value is `4`. `undefined` and `4` get logged."
    },
    {
      "id": 66,
      "title": "66. With which constructor can we successfully extend the Dog class?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">Dog</span> {\n  <span class=\"hljs-title function_\">constructor</span>(<span class=\"hljs-params\">name</span>) {\n    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">name</span> = name;\n  }\n};\n\n<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">Labrador</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title class_ inherited__\">Dog</span> {\n  <span class=\"hljs-comment\">// 1</span>\n  <span class=\"hljs-title function_\">constructor</span>(<span class=\"hljs-params\">name, size</span>) {\n    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">size</span> = size;\n  }\n  <span class=\"hljs-comment\">// 2</span>\n  <span class=\"hljs-title function_\">constructor</span>(<span class=\"hljs-params\">name, size</span>) {\n    <span class=\"hljs-variable language_\">super</span>(name);\n    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">size</span> = size;\n  }\n  <span class=\"hljs-comment\">// 3</span>\n  <span class=\"hljs-title function_\">constructor</span>(<span class=\"hljs-params\">size</span>) {\n    <span class=\"hljs-variable language_\">super</span>(name);\n    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">size</span> = size;\n  }\n  <span class=\"hljs-comment\">// 4</span>\n  <span class=\"hljs-title function_\">constructor</span>(<span class=\"hljs-params\">name, size</span>) {\n    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">name</span> = name;\n    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">size</span> = size;\n  }\n\n};",
      "choices": [
        "A: 1",
        "B: 2",
        "C: 3",
        "D: 4"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nIn a derived class, you cannot access the `this` keyword before calling `super`. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error.\n\nWith the `super` keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the `name` argument, so we need to pass `name` to `super`.\n\nThe `Labrador` class receives two arguments, `name` since it extends `Dog`, and `size` as an extra property on the `Labrador` class. They both need to be passed to the constructor function on `Labrador`, which is done correctly using constructor 2."
    },
    {
      "id": 67,
      "title": "67. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-comment\">// index.js</span>\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;running index.js&#x27;</span>);\n<span class=\"hljs-keyword\">import</span> { sum } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;./sum.js&#x27;</span>;\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title function_\">sum</span>(<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>));\n\n<span class=\"hljs-comment\">// sum.js</span>\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;running sum.js&#x27;</span>);\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">sum</span> = (<span class=\"hljs-params\">a, b</span>) =&gt; a + b;",
      "choices": [
        "A: `running index.js`, `running sum.js`, `3`",
        "B: `running sum.js`, `running index.js`, `3`",
        "C: `running sum.js`, `3`, `running index.js`",
        "D: `running index.js`, `undefined`, `running sum.js`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWith the `import` keyword, all imported modules are _pre-parsed_. This means that the imported modules get run _first_, the code in the file which imports the module gets executed _after_.\n\nThis is a difference between `require()` in CommonJS and `import`! With `require()`, you can load dependencies on demand while the code is being run. If we would have used `require` instead of `import`, `running index.js`, `running sum.js`, `3` would have been logged to the console."
    },
    {
      "id": 68,
      "title": "68. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title class_\">Number</span>(<span class=\"hljs-number\">2</span>) === <span class=\"hljs-title class_\">Number</span>(<span class=\"hljs-number\">2</span>));\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title class_\">Boolean</span>(<span class=\"hljs-literal\">false</span>) === <span class=\"hljs-title class_\">Boolean</span>(<span class=\"hljs-literal\">false</span>));\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title class_\">Symbol</span>(<span class=\"hljs-string\">&#x27;foo&#x27;</span>) === <span class=\"hljs-title class_\">Symbol</span>(<span class=\"hljs-string\">&#x27;foo&#x27;</span>));",
      "choices": [
        "A: `true`, `true`, `false`",
        "B: `false`, `true`, `false`",
        "C: `true`, `false`, `true`",
        "D: `true`, `true`, `true`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nEvery Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first `Symbol('foo')`, and the second `Symbol('foo')`. These two values are unique and not equal to each other, `Symbol('foo') === Symbol('foo')` returns `false`."
    },
    {
      "id": 69,
      "title": "69. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> name = <span class=\"hljs-string\">&#x27;Lydia Hallie&#x27;</span>;\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(name.<span class=\"hljs-title function_\">padStart</span>(<span class=\"hljs-number\">13</span>));\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(name.<span class=\"hljs-title function_\">padStart</span>(<span class=\"hljs-number\">2</span>));",
      "choices": [
        "A: `\"Lydia Hallie\"`, `\"Lydia Hallie\"`",
        "B: `\" Lydia Hallie\"`, `\" Lydia Hallie\"` (`\"[13x whitespace]Lydia Hallie\"`, `\"[2x whitespace]Lydia Hallie\"`)",
        "C: `\" Lydia Hallie\"`, `\"Lydia Hallie\"` (`\"[1x whitespace]Lydia Hallie\"`, `\"Lydia Hallie\"`)",
        "D: `\"Lydia Hallie\"`, `\"Lyd\"`,"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nWith the `padStart` method, we can add padding to the beginning of a string. The value passed to this method is the _total_ length of the string together with the padding. The string `\"Lydia Hallie\"` has a length of `12`. `name.padStart(13)` inserts 1 space at the start of the string, because 12 + 1 is 13.\n\nIf the argument passed to the `padStart` method is smaller than the length of the array, no padding will be added."
    },
    {
      "id": 70,
      "title": "70. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;🥑&#x27;</span> + <span class=\"hljs-string\">&#x27;💻&#x27;</span>);",
      "choices": [
        "A: `\"🥑💻\"`",
        "B: `257548`",
        "C: A string containing their code points",
        "D: Error"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nWith the `+` operator, you can concatenate strings. In this case, we are concatenating the string `\"🥑\"` with the string `\"💻\"`, resulting in `\"🥑💻\"`."
    },
    {
      "id": 71,
      "title": "71. How can we log the values that are commented out after the console.log statement?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span>* <span class=\"hljs-title function_\">startGame</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-keyword\">const</span> answer = <span class=\"hljs-keyword\">yield</span> <span class=\"hljs-string\">&#x27;Do you love JavaScript?&#x27;</span>;\n  <span class=\"hljs-keyword\">if</span> (answer !== <span class=\"hljs-string\">&#x27;Yes&#x27;</span>) {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">&quot;Oh wow... Guess we&#x27;re done here&quot;</span>;\n  }\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">&#x27;JavaScript loves you back ❤️&#x27;</span>;\n}\n\n<span class=\"hljs-keyword\">const</span> game = <span class=\"hljs-title function_\">startGame</span>();\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-comment\">/* 1 */</span>); <span class=\"hljs-comment\">// Do you love JavaScript?</span>\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-comment\">/* 2 */</span>); <span class=\"hljs-comment\">// JavaScript loves you back ❤️</span>",
      "choices": [
        "A: `game.next(\"Yes\").value` and `game.next().value`",
        "B: `game.next.value(\"Yes\")` and `game.next.value()`",
        "C: `game.next().value` and `game.next(\"Yes\").value`",
        "D: `game.next.value()` and `game.next.value(\"Yes\")`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nA generator function \"pauses\" its execution when it sees the `yield` keyword. First, we have to let the function yield the string \"Do you love JavaScript?\", which can be done by calling `game.next().value`.\n\nEvery line is executed, until it finds the first `yield` keyword. There is a `yield` keyword on the first line within the function: the execution stops with the first yield! _This means that the variable `answer` is not defined yet!_\n\nWhen we call `game.next(\"Yes\").value`, the previous `yield` is replaced with the value of the parameters passed to the `next()` function, `\"Yes\"` in this case. The value of the variable `answer` is now equal to `\"Yes\"`. The condition of the if-statement returns `false`, and `JavaScript loves you back ❤️` gets logged."
    },
    {
      "id": 72,
      "title": "72. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title class_\">String</span>.<span class=\"hljs-property\">raw</span><span class=\"hljs-string\">`Hello\\nworld`</span>);",
      "choices": [
        "A: `Hello world!`",
        "B: `Hello`  \n     `world`",
        "C: `Hello\\nworld`",
        "D: `Hello\\n`  \n     `world`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\n`String.raw` returns a string where the escapes (`\\n`, `\\v`, `\\t` etc.) are ignored! Backslashes can be an issue since you could end up with something like:\n\n``const path = `C:\\Documents\\Projects\\table.html` ``\n\nWhich would result in:\n\n`\"C:DocumentsProjects able.html\"`\n\nWith `String.raw`, it would simply ignore the escape and print:\n\n`C:\\Documents\\Projects\\table.html`\n\nIn this case, the string is `Hello\\nworld`, which gets logged."
    },
    {
      "id": 73,
      "title": "73. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">async</span> <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">getData</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">await</span> <span class=\"hljs-title class_\">Promise</span>.<span class=\"hljs-title function_\">resolve</span>(<span class=\"hljs-string\">&#x27;I made it!&#x27;</span>);\n}\n\n<span class=\"hljs-keyword\">const</span> data = <span class=\"hljs-title function_\">getData</span>();\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(data);",
      "choices": [
        "A: `\"I made it!\"`",
        "B: `Promise {<resolved>: \"I made it!\"}`",
        "C: `Promise {<pending>}`",
        "D: `undefined`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nAn async function always returns a promise. The `await` still has to wait for the promise to resolve: a pending promise gets returned when we call `getData()` in order to set `data` equal to it.\n\nIf we wanted to get access to the resolved value `\"I made it\"`, we could have used the `.then()` method on `data`:\n\n`data.then(res => console.log(res))`\n\nThis would've logged `\"I made it!\"`"
    },
    {
      "id": 74,
      "title": "74. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">addToList</span>(<span class=\"hljs-params\">item, list</span>) {\n  <span class=\"hljs-keyword\">return</span> list.<span class=\"hljs-title function_\">push</span>(item);\n}\n\n<span class=\"hljs-keyword\">const</span> result = <span class=\"hljs-title function_\">addToList</span>(<span class=\"hljs-string\">&#x27;apple&#x27;</span>, [<span class=\"hljs-string\">&#x27;banana&#x27;</span>]);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(result);",
      "choices": [
        "A: `['apple', 'banana']`",
        "B: `2`",
        "C: `true`",
        "D: `undefined`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nThe `.push()` method returns the _length_ of the new array! Previously, the array contained one element (the string `\"banana\"`) and had a length of `1`. After adding the string `\"apple\"` to the array, the array contains two elements, and has a length of `2`. This gets returned from the `addToList` function.\n\nThe `push` method modifies the original array. If you wanted to return the _array_ from the function rather than the _length of the array_, you should have returned `list` after pushing `item` to it."
    },
    {
      "id": 75,
      "title": "75. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> box = { <span class=\"hljs-attr\">x</span>: <span class=\"hljs-number\">10</span>, <span class=\"hljs-attr\">y</span>: <span class=\"hljs-number\">20</span> };\n\n<span class=\"hljs-title class_\">Object</span>.<span class=\"hljs-title function_\">freeze</span>(box);\n\n<span class=\"hljs-keyword\">const</span> shape = box;\nshape.<span class=\"hljs-property\">x</span> = <span class=\"hljs-number\">100</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(shape);",
      "choices": [
        "A: `{ x: 100, y: 20 }`",
        "B: `{ x: 10, y: 20 }`",
        "C: `{ x: 100 }`",
        "D: `ReferenceError`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\n`Object.freeze` makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).\n\nWhen we create the variable `shape` and set it equal to the frozen object `box`, `shape` also refers to a frozen object. You can check whether an object is frozen by using `Object.isFrozen`. In this case, `Object.isFrozen(shape)` would return true, since the variable `shape` has a reference to a frozen object.\n\nSince `shape` is frozen, and since the value of `x` is not an object, we cannot modify the property `x`. `x` is still equal to `10`, and `{ x: 10, y: 20 }` gets logged."
    },
    {
      "id": 76,
      "title": "76. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> { <span class=\"hljs-attr\">firstName</span>: myName } = { <span class=\"hljs-attr\">firstName</span>: <span class=\"hljs-string\">&#x27;Lydia&#x27;</span> };\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(firstName);",
      "choices": [
        "A: `\"Lydia\"`",
        "B: `\"myName\"`",
        "C: `undefined`",
        "D: `ReferenceError`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nBy using [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax we can unpack values from arrays, or properties from objects, into distinct variables:\n\nconst { firstName } \\= { firstName: 'Lydia' };\n// ES5 version:\n// var firstName = { firstName: 'Lydia' }.firstName;\n\nconsole.log(firstName); // \"Lydia\"\n\nAlso, a property can be unpacked from an object and assigned to a variable with a different name than the object property:\n\nconst { firstName: myName } \\= { firstName: 'Lydia' };\n// ES5 version:\n// var myName = { firstName: 'Lydia' }.firstName;\n\nconsole.log(myName); // \"Lydia\"\nconsole.log(firstName); // Uncaught ReferenceError: firstName is not defined\n\nTherefore, `firstName` does not exist as a variable, thus attempting to access its value will raise a `ReferenceError`.\n\n**Note:** Be aware of the `global scope` properties:\n\nconst { name: myName } \\= { name: 'Lydia' };\n\nconsole.log(myName); // \"lydia\"\nconsole.log(name); // \"\" ----- Browser e.g. Chrome\nconsole.log(name); // ReferenceError: name is not defined  ----- NodeJS\n\nWhenever Javascript is unable to find a variable within the _current scope_, it climbs up the [Scope chain](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md) and searches for it and if it reaches the top-level scope, aka **Global scope**, and still doesn't find it, it will throw a `ReferenceError`.\n\n*   In **Browsers** such as _Chrome_, `name` is a _deprecated global scope property_. In this example, the code is running inside _global scope_ and there is no user defined local variable for `name`, therefore it searches the predefined _variables/properties_ in the global scope which is in case of browsers, it searches through `window` object and it will extract the [window.name](https://developer.mozilla.org/en-US/docs/Web/API/Window/name) value which is equal to an **empty string**.\n    \n*   In **NodeJS**, there is no such property on the `global` object, thus attempting to access a non-existent variable will raise a [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined)."
    },
    {
      "id": 77,
      "title": "77. Is this a pure function?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">sum</span>(<span class=\"hljs-params\">a, b</span>) {\n  <span class=\"hljs-keyword\">return</span> a + b;\n}",
      "choices": [
        "A: Yes",
        "B: No"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nA pure function is a function that _always_ returns the same result, if the same arguments are passed.\n\nThe `sum` function always returns the same result. If we pass `1` and `2`, it will _always_ return `3` without side effects. If we pass `5` and `10`, it will _always_ return `15`, and so on. This is the definition of a pure function."
    },
    {
      "id": 78,
      "title": "78. What is the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">add</span> = (<span class=\"hljs-params\"></span>) =&gt; {\n  <span class=\"hljs-keyword\">const</span> cache = {};\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-function\"><span class=\"hljs-params\">num</span> =&gt;</span> {\n    <span class=\"hljs-keyword\">if</span> (num <span class=\"hljs-keyword\">in</span> cache) {\n      <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`From cache! <span class=\"hljs-subst\">${cache[num]}</span>`</span>;\n    } <span class=\"hljs-keyword\">else</span> {\n      <span class=\"hljs-keyword\">const</span> result = num + <span class=\"hljs-number\">10</span>;\n      cache[num] = result;\n      <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`Calculated! <span class=\"hljs-subst\">${result}</span>`</span>;\n    }\n  };\n};\n\n<span class=\"hljs-keyword\">const</span> addFunction = <span class=\"hljs-title function_\">add</span>();\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title function_\">addFunction</span>(<span class=\"hljs-number\">10</span>));\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title function_\">addFunction</span>(<span class=\"hljs-number\">10</span>));\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title function_\">addFunction</span>(<span class=\"hljs-number\">5</span> * <span class=\"hljs-number\">2</span>));",
      "choices": [
        "A: `Calculated! 20` `Calculated! 20` `Calculated! 20`",
        "B: `Calculated! 20` `From cache! 20` `Calculated! 20`",
        "C: `Calculated! 20` `From cache! 20` `From cache! 20`",
        "D: `Calculated! 20` `From cache! 20` `Error`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nThe `add` function is a _memoized_ function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a `cache` object that stores the previously returned values.\n\nIf we call the `addFunction` function again with the same argument, it first checks whether it has already gotten that value in its cache. If that's the case, the caches value will be returned, which saves on execution time. Else, if it's not cached, it will calculate the value and store it afterwards.\n\nWe call the `addFunction` function three times with the same value: on the first invocation, the value of the function when `num` is equal to `10` isn't cached yet. The condition of the if-statement `num in cache` returns `false`, and the else block gets executed: `Calculated! 20` gets logged, and the value of the result gets added to the cache object. `cache` now looks like `{ 10: 20 }`.\n\nThe second time, the `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.\n\nThe third time, we pass `5 * 2` to the function which gets evaluated to `10`. The `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged."
    },
    {
      "id": 79,
      "title": "79. What is the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> myLifeSummedUp = [<span class=\"hljs-string\">&#x27;☕&#x27;</span>, <span class=\"hljs-string\">&#x27;💻&#x27;</span>, <span class=\"hljs-string\">&#x27;🍷&#x27;</span>, <span class=\"hljs-string\">&#x27;🍫&#x27;</span>];\n\n<span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> item <span class=\"hljs-keyword\">in</span> myLifeSummedUp) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(item);\n}\n\n<span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> item <span class=\"hljs-keyword\">of</span> myLifeSummedUp) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(item);\n}",
      "choices": [
        "A: `0` `1` `2` `3` and `\"☕\"` `\"💻\"` `\"🍷\"` `\"🍫\"`",
        "B: `\"☕\"` `\"💻\"` `\"🍷\"` `\"🍫\"` and `\"☕\"` `\"💻\"` `\"🍷\"` `\"🍫\"`",
        "C: `\"☕\"` `\"💻\"` `\"🍷\"` `\"🍫\"` and `0` `1` `2` `3`",
        "D: `0` `1` `2` `3` and `{0: \"☕\", 1: \"💻\", 2: \"🍷\", 3: \"🍫\"}`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nWith a _for-in_ loop, we can iterate over **enumerable** properties. In an array, the enumerable properties are the \"keys\" of array elements, which are actually their indexes. You could see an array as:\n\n`{0: \"☕\", 1: \"💻\", 2: \"🍷\", 3: \"🍫\"}`\n\nWhere the keys are the enumerable properties. `0` `1` `2` `3` get logged.\n\nWith a _for-of_ loop, we can iterate over **iterables**. An array is an iterable. When we iterate over the array, the variable \"item\" is equal to the element it's currently iterating over, `\"☕\"` `\"💻\"` `\"🍷\"` `\"🍫\"` get logged."
    },
    {
      "id": 80,
      "title": "80. What is the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> list = [<span class=\"hljs-number\">1</span> + <span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">1</span> * <span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">1</span> / <span class=\"hljs-number\">2</span>];\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(list);",
      "choices": [
        "A: `[\"1 + 2\", \"1 * 2\", \"1 / 2\"]`",
        "B: `[\"12\", 2, 0.5]`",
        "C: `[3, 2, 0.5]`",
        "D: `[1, 1, 1]`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nArray elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations.\n\nThe element will be equal to the returned value. `1 + 2` returns `3`, `1 * 2` returns `2`, and `1 / 2` returns `0.5`."
    },
    {
      "id": 81,
      "title": "81. What is the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">sayHi</span>(<span class=\"hljs-params\">name</span>) {\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`Hi there, <span class=\"hljs-subst\">${name}</span>`</span>;\n}\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title function_\">sayHi</span>());",
      "choices": [
        "A: `Hi there,`",
        "B: `Hi there, undefined`",
        "C: `Hi there, null`",
        "D: `ReferenceError`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nBy default, arguments have the value of `undefined`, unless a value has been passed to the function. In this case, we didn't pass a value for the `name` argument. `name` is equal to `undefined` which gets logged.\n\nIn ES6, we can overwrite this default `undefined` value with default parameters. For example:\n\n`function sayHi(name = \"Lydia\") { ... }`\n\nIn this case, if we didn't pass a value or if we passed `undefined`, `name` would always be equal to the string `Lydia`"
    },
    {
      "id": 82,
      "title": "82. What is the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">var</span> status = <span class=\"hljs-string\">&#x27;😎&#x27;</span>;\n\n<span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> {\n  <span class=\"hljs-keyword\">const</span> status = <span class=\"hljs-string\">&#x27;😍&#x27;</span>;\n\n  <span class=\"hljs-keyword\">const</span> data = {\n    <span class=\"hljs-attr\">status</span>: <span class=\"hljs-string\">&#x27;🥑&#x27;</span>,\n    <span class=\"hljs-title function_\">getStatus</span>(<span class=\"hljs-params\"></span>) {\n      <span class=\"hljs-keyword\">return</span> <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">status</span>;\n    },\n  };\n\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(data.<span class=\"hljs-title function_\">getStatus</span>());\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(data.<span class=\"hljs-property\">getStatus</span>.<span class=\"hljs-title function_\">call</span>(<span class=\"hljs-variable language_\">this</span>));\n}, <span class=\"hljs-number\">0</span>);",
      "choices": [
        "A: `\"🥑\"` and `\"😍\"`",
        "B: `\"🥑\"` and `\"😎\"`",
        "C: `\"😍\"` and `\"😎\"`",
        "D: `\"😎\"` and `\"😎\"`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nThe value of the `this` keyword is dependent on where you use it. In a **method**, like the `getStatus` method, the `this` keyword refers to _the object that the method belongs to_. The method belongs to the `data` object, so `this` refers to the `data` object. When we log `this.status`, the `status` property on the `data` object gets logged, which is `\"🥑\"`.\n\nWith the `call` method, we can change the object to which the `this` keyword refers. In **functions**, the `this` keyword refers to the _the object that the function belongs to_. We declared the `setTimeout` function on the _global object_, so within the `setTimeout` function, the `this` keyword refers to the _global object_. On the global object, there is a variable called _status_ with the value of `\"😎\"`. When logging `this.status`, `\"😎\"` gets logged."
    },
    {
      "id": 83,
      "title": "83. What is the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> person = {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>,\n  <span class=\"hljs-attr\">age</span>: <span class=\"hljs-number\">21</span>,\n};\n\n<span class=\"hljs-keyword\">let</span> city = person.<span class=\"hljs-property\">city</span>;\ncity = <span class=\"hljs-string\">&#x27;Amsterdam&#x27;</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(person);",
      "choices": [
        "A: `{ name: \"Lydia\", age: 21 }`",
        "B: `{ name: \"Lydia\", age: 21, city: \"Amsterdam\" }`",
        "C: `{ name: \"Lydia\", age: 21, city: undefined }`",
        "D: `\"Amsterdam\"`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nWe set the variable `city` equal to the value of the property called `city` on the `person` object. There is no property on this object called `city`, so the variable `city` has the value of `undefined`.\n\nNote that we are _not_ referencing the `person` object itself! We simply set the variable `city` equal to the current value of the `city` property on the `person` object.\n\nThen, we set `city` equal to the string `\"Amsterdam\"`. This doesn't change the person object: there is no reference to that object.\n\nWhen logging the `person` object, the unmodified object gets returned."
    },
    {
      "id": 84,
      "title": "84. What is the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">checkAge</span>(<span class=\"hljs-params\">age</span>) {\n  <span class=\"hljs-keyword\">if</span> (age &lt; <span class=\"hljs-number\">18</span>) {\n    <span class=\"hljs-keyword\">const</span> message = <span class=\"hljs-string\">&quot;Sorry, you&#x27;re too young.&quot;</span>;\n  } <span class=\"hljs-keyword\">else</span> {\n    <span class=\"hljs-keyword\">const</span> message = <span class=\"hljs-string\">&quot;Yay! You&#x27;re old enough!&quot;</span>;\n  }\n\n  <span class=\"hljs-keyword\">return</span> message;\n}\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title function_\">checkAge</span>(<span class=\"hljs-number\">21</span>));",
      "choices": [
        "A: `\"Sorry, you're too young.\"`",
        "B: `\"Yay! You're old enough!\"`",
        "C: `ReferenceError`",
        "D: `undefined`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nVariables with the `const` and `let` keyword are _block-scoped_. A block is anything between curly brackets (`{ }`). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it's declared in, a ReferenceError gets thrown."
    },
    {
      "id": 85,
      "title": "85. What kind of information would get logged?",
      "text": null,
      "code": "<span class=\"hljs-title function_\">fetch</span>(<span class=\"hljs-string\">&#x27;https://www.website.com/api/user/1&#x27;</span>)\n  .<span class=\"hljs-title function_\">then</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">res</span> =&gt;</span> res.<span class=\"hljs-title function_\">json</span>())\n  .<span class=\"hljs-title function_\">then</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">res</span> =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(res));",
      "choices": [
        "A: The result of the `fetch` method.",
        "B: The result of the second invocation of the `fetch` method.",
        "C: The result of the callback in the previous `.then()`.",
        "D: It would always be undefined."
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nThe value of `res` in the second `.then` is equal to the returned value of the previous `.then`. You can keep chaining `.then`s like this, where the value is passed to the next handler."
    },
    {
      "id": 86,
      "title": "86. Which option is a way to set hasName equal to true, provided you cannot pass true as an argument?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">getName</span>(<span class=\"hljs-params\">name</span>) {\n  <span class=\"hljs-keyword\">const</span> hasName = <span class=\"hljs-comment\">//</span>\n}",
      "choices": [
        "A: `!!name`",
        "B: `name`",
        "C: `new Boolean(name)`",
        "D: `name.length`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nWith `!!name`, we determine whether the value of `name` is truthy or falsy. If name is truthy, which we want to test for, `!name` returns `false`. `!false` (which is what `!!name` practically is) returns `true`.\n\nBy setting `hasName` equal to `name`, you set `hasName` equal to whatever value you passed to the `getName` function, not the boolean value `true`.\n\n`new Boolean(true)` returns an object wrapper, not the boolean value itself.\n\n`name.length` returns the length of the passed argument, not whether it's `true`."
    },
    {
      "id": 87,
      "title": "87. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;I want pizza&#x27;</span>[<span class=\"hljs-number\">0</span>]);",
      "choices": [
        "A: `\"\"\"`",
        "B: `\"I\"`",
        "C: `SyntaxError`",
        "D: `undefined`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nIn order to get a character at a specific index of a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case, we want to get the element with index 0, the character `\"I'`, which gets logged.\n\nNote that this method is not supported in IE7 and below. In that case, use `.charAt()`."
    },
    {
      "id": 88,
      "title": "88. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">sum</span>(<span class=\"hljs-params\">num1, num2 = num1</span>) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(num1 + num2);\n}\n\n<span class=\"hljs-title function_\">sum</span>(<span class=\"hljs-number\">10</span>);",
      "choices": [
        "A: `NaN`",
        "B: `20`",
        "C: `ReferenceError`",
        "D: `undefined`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nYou can set a default parameter's value equal to another parameter of the function, as long as they've been defined _before_ the default parameter. We pass the value `10` to the `sum` function. If the `sum` function only receives 1 argument, it means that the value for `num2` is not passed, and the value of `num1` is equal to the passed value `10` in this case. The default value of `num2` is the value of `num1`, which is `10`. `num1 + num2` returns `20`.\n\nIf you're trying to set a default parameter's value equal to a parameter which is defined _after_ (to the right), the parameter's value hasn't been initialized yet, which will throw an error."
    },
    {
      "id": 89,
      "title": "89. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-comment\">// module.js</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> () =&gt; <span class=\"hljs-string\">&#x27;Hello world&#x27;</span>;\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> name = <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>;\n\n<span class=\"hljs-comment\">// index.js</span>\n<span class=\"hljs-keyword\">import</span> * <span class=\"hljs-keyword\">as</span> data <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;./module&#x27;</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(data);",
      "choices": [
        "A: `{ default: function default(), name: \"Lydia\" }`",
        "B: `{ default: function default() }`",
        "C: `{ default: \"Hello world\", name: \"Lydia\" }`",
        "D: Global object of `module.js`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nWith the `import * as name` syntax, we import _all exports_ from the `module.js` file into the `index.js` file as a new object called `data` is created. In the `module.js` file, there are two exports: the default export, and a named export. The default export is a function which returns the string `\"Hello World\"`, and the named export is a variable called `name` which has the value of the string `\"Lydia\"`.\n\nThe `data` object has a `default` property for the default export, other properties have the names of the named exports and their corresponding values."
    },
    {
      "id": 90,
      "title": "90. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">Person</span> {\n  <span class=\"hljs-title function_\">constructor</span>(<span class=\"hljs-params\">name</span>) {\n    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">name</span> = name;\n  }\n}\n\n<span class=\"hljs-keyword\">const</span> member = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Person</span>(<span class=\"hljs-string\">&#x27;John&#x27;</span>);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-keyword\">typeof</span> member);",
      "choices": [
        "A: `\"class\"`",
        "B: `\"function\"`",
        "C: `\"object\"`",
        "D: `\"string\"`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nClasses are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be:\n\nfunction Person(name) {\n  this.name \\= name;\n}\n\nCalling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `\"object\"` for an instance. `typeof member` returns `\"object\"`."
    },
    {
      "id": 91,
      "title": "91. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">let</span> newList = [<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">3</span>].<span class=\"hljs-title function_\">push</span>(<span class=\"hljs-number\">4</span>);\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(newList.<span class=\"hljs-title function_\">push</span>(<span class=\"hljs-number\">5</span>));",
      "choices": [
        "A: `[1, 2, 3, 4, 5]`",
        "B: `[1, 2, 3, 5]`",
        "C: `[1, 2, 3, 4]`",
        "D: `Error`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nThe `.push` method returns the _new length_ of the array, not the array itself! By setting `newList` equal to `[1, 2, 3].push(4)`, we set `newList` equal to the new length of the array: `4`.\n\nThen, we try to use the `.push` method on `newList`. Since `newList` is the numerical value `4`, we cannot use the `.push` method: a TypeError is thrown."
    },
    {
      "id": 92,
      "title": "92. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">giveLydiaPizza</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">&#x27;Here is pizza!&#x27;</span>;\n}\n\n<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">giveLydiaChocolate</span> = (<span class=\"hljs-params\"></span>) =&gt;\n  <span class=\"hljs-string\">&quot;Here&#x27;s chocolate... now go hit the gym already.&quot;</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(giveLydiaPizza.<span class=\"hljs-property\"><span class=\"hljs-keyword\">prototype</span></span>);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(giveLydiaChocolate.<span class=\"hljs-property\"><span class=\"hljs-keyword\">prototype</span></span>);",
      "choices": [
        "A: `{ constructor: ...}` `{ constructor: ...}`",
        "B: `{}` `{ constructor: ...}`",
        "C: `{ constructor: ...}` `{}`",
        "D: `{ constructor: ...}` `undefined`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nRegular functions, such as the `giveLydiaPizza` function, have a `prototype` property, which is an object (prototype object) with a `constructor` property. Arrow functions however, such as the `giveLydiaChocolate` function, do not have this `prototype` property. `undefined` gets returned when trying to access the `prototype` property using `giveLydiaChocolate.prototype`."
    },
    {
      "id": 93,
      "title": "93. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> person = {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>,\n  <span class=\"hljs-attr\">age</span>: <span class=\"hljs-number\">21</span>,\n};\n\n<span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">const</span> [x, y] <span class=\"hljs-keyword\">of</span> <span class=\"hljs-title class_\">Object</span>.<span class=\"hljs-title function_\">entries</span>(person)) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(x, y);\n}",
      "choices": [
        "A: `name` `Lydia` and `age` `21`",
        "B: `[\"name\", \"Lydia\"]` and `[\"age\", 21]`",
        "C: `[\"name\", \"age\"]` and `undefined`",
        "D: `Error`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\n`Object.entries(person)` returns an array of nested arrays, containing the keys and objects:\n\n`[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]`\n\nUsing the `for-of` loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using `const [x, y]`. `x` is equal to the first element in the subarray, `y` is equal to the second element in the subarray.\n\nThe first subarray is `[ \"name\", \"Lydia\" ]`, with `x` equal to `\"name\"`, and `y` equal to `\"Lydia\"`, which get logged. The second subarray is `[ \"age\", 21 ]`, with `x` equal to `\"age\"`, and `y` equal to `21`, which get logged."
    },
    {
      "id": 94,
      "title": "94. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">getItems</span>(<span class=\"hljs-params\">fruitList, ...args, favoriteFruit</span>) {\n  <span class=\"hljs-keyword\">return</span> [...fruitList, ...args, favoriteFruit]\n}\n\n<span class=\"hljs-title function_\">getItems</span>([<span class=\"hljs-string\">&quot;banana&quot;</span>, <span class=\"hljs-string\">&quot;apple&quot;</span>], <span class=\"hljs-string\">&quot;pear&quot;</span>, <span class=\"hljs-string\">&quot;orange&quot;</span>)",
      "choices": [
        "A: `[\"banana\", \"apple\", \"pear\", \"orange\"]`",
        "B: `[[\"banana\", \"apple\"], \"pear\", \"orange\"]`",
        "C: `[\"banana\", \"apple\", [\"pear\"], \"orange\"]`",
        "D: `SyntaxError`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\n`...args` is a rest parameter. The rest parameter's value is an array containing all remaining arguments, **and can only be the last parameter**! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.\n\nfunction getItems(fruitList, favoriteFruit, ...args) {\n  return \\[...fruitList, ...args, favoriteFruit\\];\n}\n\ngetItems(\\['banana', 'apple'\\], 'pear', 'orange');\n\nThe above example works. This returns the array `[ 'banana', 'apple', 'orange', 'pear' ]`"
    },
    {
      "id": 95,
      "title": "95. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">nums</span>(<span class=\"hljs-params\">a, b</span>) {\n  <span class=\"hljs-keyword\">if</span> (a &gt; b) <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;a is bigger&#x27;</span>);\n  <span class=\"hljs-keyword\">else</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;b is bigger&#x27;</span>);\n  <span class=\"hljs-keyword\">return</span>\n  a + b;\n}\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title function_\">nums</span>(<span class=\"hljs-number\">4</span>, <span class=\"hljs-number\">2</span>));\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title function_\">nums</span>(<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>));",
      "choices": [
        "A: `a is bigger`, `6` and `b is bigger`, `3`",
        "B: `a is bigger`, `undefined` and `b is bigger`, `undefined`",
        "C: `undefined` and `undefined`",
        "D: `SyntaxError`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nIn JavaScript, we don't _have_ to write the semicolon (`;`) explicitly, however the JavaScript engine still adds them after statements. This is called **Automatic Semicolon Insertion**. A statement can for example be variables, or keywords like `throw`, `return`, `break`, etc.\n\nHere, we wrote a `return` statement, and another value `a + b` on a _new line_. However, since it's a new line, the engine doesn't know that it's actually the value that we wanted to return. Instead, it automatically added a semicolon after `return`. You could see this as:\n\nreturn;\na + b;\n\nThis means that `a + b` is never reached, since a function stops running after the `return` keyword. If no value gets returned, like here, the function returns `undefined`. Note that there is no automatic insertion after `if/else` statements!"
    },
    {
      "id": 96,
      "title": "96. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">Person</span> {\n  <span class=\"hljs-title function_\">constructor</span>(<span class=\"hljs-params\"></span>) {\n    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">name</span> = <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>;\n  }\n}\n\n<span class=\"hljs-title class_\">Person</span> = <span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">AnotherPerson</span> {\n  <span class=\"hljs-title function_\">constructor</span>(<span class=\"hljs-params\"></span>) {\n    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">name</span> = <span class=\"hljs-string\">&#x27;Sarah&#x27;</span>;\n  }\n};\n\n<span class=\"hljs-keyword\">const</span> member = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Person</span>();\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(member.<span class=\"hljs-property\">name</span>);",
      "choices": [
        "A: `\"Lydia\"`",
        "B: `\"Sarah\"`",
        "C: `Error: cannot redeclare Person`",
        "D: `SyntaxError`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWe can set classes equal to other classes/function constructors. In this case, we set `Person` equal to `AnotherPerson`. The name on this constructor is `Sarah`, so the name property on the new `Person` instance `member` is `\"Sarah\"`."
    },
    {
      "id": 97,
      "title": "97. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> info = {\n  [<span class=\"hljs-title class_\">Symbol</span>(<span class=\"hljs-string\">&#x27;a&#x27;</span>)]: <span class=\"hljs-string\">&#x27;b&#x27;</span>,\n};\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(info);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title class_\">Object</span>.<span class=\"hljs-title function_\">keys</span>(info));",
      "choices": [
        "A: `{Symbol('a'): 'b'}` and `[\"{Symbol('a')\"]`",
        "B: `{}` and `[]`",
        "C: `{ a: \"b\" }` and `[\"a\"]`",
        "D: `{Symbol('a'): 'b'}` and `[]`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nA Symbol is not _enumerable_. The Object.keys method returns all _enumerable_ key properties on an object. The Symbol won't be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.\n\nThis is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also \"hide\" properties on objects this way (although not entirely. You can still access symbols using the `Object.getOwnPropertySymbols()` method)."
    },
    {
      "id": 98,
      "title": "98. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">getList</span> = (<span class=\"hljs-params\">[x, ...y]</span>) =&gt; [x, y]\n<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">getUser</span> = user =&gt; { <span class=\"hljs-attr\">name</span>: user.<span class=\"hljs-property\">name</span>, <span class=\"hljs-attr\">age</span>: user.<span class=\"hljs-property\">age</span> }\n\n<span class=\"hljs-keyword\">const</span> list = [<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">3</span>, <span class=\"hljs-number\">4</span>]\n<span class=\"hljs-keyword\">const</span> user = { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&quot;Lydia&quot;</span>, <span class=\"hljs-attr\">age</span>: <span class=\"hljs-number\">21</span> }\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title function_\">getList</span>(list))\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title function_\">getUser</span>(user))",
      "choices": [
        "A: `[1, [2, 3, 4]]` and `SyntaxError`",
        "B: `[1, [2, 3, 4]]` and `{ name: \"Lydia\", age: 21 }`",
        "C: `[1, 2, 3, 4]` and `{ name: \"Lydia\", age: 21 }`",
        "D: `Error` and `{ name: \"Lydia\", age: 21 }`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nThe `getList` function receives an array as its argument. Between the parentheses of the `getList` function, we destructure this array right away. You could see this as:\n\n`[x, ...y] = [1, 2, 3, 4]`\n\nWith the rest parameter `...y`, we put all \"remaining\" arguments in an array. The remaining arguments are `2`, `3` and `4` in this case. The value of `y` is an array, containing all the rest parameters. The value of `x` is equal to `1` in this case, so when we log `[x, y]`, `[1, [2, 3, 4]]` gets logged.\n\nThe `getUser` function receives an object. With arrow functions, we don't _have_ to write curly brackets if we just return one value. However, if you want to instantly return an _object_ from an arrow function, you have to write it between parentheses, otherwise everything between the two braces will be interpreted as a block statement. In this case the code between the braces is not a valid JavaScript code, so a `SyntaxError` gets thrown.\n\nThe following function would have returned an object:\n\n`const getUser = user => ({ name: user.name, age: user.age })`"
    },
    {
      "id": 99,
      "title": "99. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> name = <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title function_\">name</span>());",
      "choices": [
        "A: `SyntaxError`",
        "B: `ReferenceError`",
        "C: `TypeError`",
        "D: `undefined`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nThe variable `name` holds the value of a string, which is not a function, thus cannot invoke.\n\nTypeErrors get thrown when a value is not of the expected type. JavaScript expected `name` to be a function since we're trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function!\n\nSyntaxErrors get thrown when you've written something that isn't valid JavaScript, for example when you've written the word `return` as `retrun`. ReferenceErrors get thrown when JavaScript isn't able to find a reference to a value that you're trying to access."
    },
    {
      "id": 100,
      "title": "100. What's the value of output?",
      "text": null,
      "code": "<span class=\"hljs-comment\">// 🎉✨ This is my 100th question! ✨🎉</span>\n\n<span class=\"hljs-keyword\">const</span> output = <span class=\"hljs-string\">`<span class=\"hljs-subst\">${[] &amp;&amp; <span class=\"hljs-string\">&#x27;Im&#x27;</span>}</span>possible!\nYou should<span class=\"hljs-subst\">${<span class=\"hljs-string\">&#x27;&#x27;</span> &amp;&amp; <span class=\"hljs-string\">`n&#x27;t`</span>}</span> see a therapist after so much JavaScript lol`</span>;",
      "choices": [
        "A: `possible! You should see a therapist after so much JavaScript lol`",
        "B: `Impossible! You should see a therapist after so much JavaScript lol`",
        "C: `possible! You shouldn't see a therapist after so much JavaScript lol`",
        "D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\n`[]` is a truthy value. With the `&&` operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value `[]` is a truthy value, so `\"Im'` gets returned.\n\n`\"\"` is a falsy value. If the left-hand value is falsy, nothing gets returned. `n't` doesn't get returned."
    },
    {
      "id": 101,
      "title": "101. What's the value of output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> one = <span class=\"hljs-literal\">false</span> || {} || <span class=\"hljs-literal\">null</span>;\n<span class=\"hljs-keyword\">const</span> two = <span class=\"hljs-literal\">null</span> || <span class=\"hljs-literal\">false</span> || <span class=\"hljs-string\">&#x27;&#x27;</span>;\n<span class=\"hljs-keyword\">const</span> three = [] || <span class=\"hljs-number\">0</span> || <span class=\"hljs-literal\">true</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(one, two, three);",
      "choices": [
        "A: `false` `null` `[]`",
        "B: `null` `\"\"` `true`",
        "C: `{}` `\"\"` `[]`",
        "D: `null` `null` `true`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nWith the `||` operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.\n\n`(false || {} || null)`: the empty object `{}` is a truthy value. This is the first (and only) truthy value, which gets returned. `one` is equal to `{}`.\n\n`(null || false || \"\")`: all operands are falsy values. This means that the last operand, `\"\"` gets returned. `two` is equal to `\"\"`.\n\n`([] || 0 || \"\")`: the empty array`[]` is a truthy value. This is the first truthy value, which gets returned. `three` is equal to `[]`."
    },
    {
      "id": 102,
      "title": "102. What's the value of output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">myPromise</span> = (<span class=\"hljs-params\"></span>) =&gt; <span class=\"hljs-title class_\">Promise</span>.<span class=\"hljs-title function_\">resolve</span>(<span class=\"hljs-string\">&#x27;I have resolved!&#x27;</span>);\n\n<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">firstFunction</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-title function_\">myPromise</span>().<span class=\"hljs-title function_\">then</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">res</span> =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(res));\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;second&#x27;</span>);\n}\n\n<span class=\"hljs-keyword\">async</span> <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">secondFunction</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-keyword\">await</span> <span class=\"hljs-title function_\">myPromise</span>());\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;second&#x27;</span>);\n}\n\n<span class=\"hljs-title function_\">firstFunction</span>();\n<span class=\"hljs-title function_\">secondFunction</span>();",
      "choices": [
        "A: `I have resolved!`, `second` and `I have resolved!`, `second`",
        "B: `second`, `I have resolved!` and `second`, `I have resolved!`",
        "C: `I have resolved!`, `second` and `second`, `I have resolved!`",
        "D: `second`, `I have resolved!` and `I have resolved!`, `second`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nWith a promise, we basically say _I want to execute this function, but I'll put it aside for now while it's running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value._\n\nWe can get this value with both `.then` and the `await` keyword in an `async` function. Although we can get a promise's value with both `.then` and `await`, they work a bit differently.\n\nIn the `firstFunction`, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is `console.log('second')` in this case. Then, the function resolved with the string `I have resolved`, which then got logged after it saw that the callstack was empty.\n\nWith the await keyword in `secondFunction`, we literally pause the execution of an async function until the value has been resolved before moving to the next line.\n\nThis means that it waited for the `myPromise` to resolve with the value `I have resolved`, and only once that happened, we moved to the next line: `second` got logged."
    },
    {
      "id": 103,
      "title": "103. What's the value of output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> set = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Set</span>();\n\nset.<span class=\"hljs-title function_\">add</span>(<span class=\"hljs-number\">1</span>);\nset.<span class=\"hljs-title function_\">add</span>(<span class=\"hljs-string\">&#x27;Lydia&#x27;</span>);\nset.<span class=\"hljs-title function_\">add</span>({ <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Lydia&#x27;</span> });\n\n<span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> item <span class=\"hljs-keyword\">of</span> set) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(item + <span class=\"hljs-number\">2</span>);\n}",
      "choices": [
        "A: `3`, `NaN`, `NaN`",
        "B: `3`, `7`, `NaN`",
        "C: `3`, `Lydia2`, `[object Object]2`",
        "D: `\"12\"`, `Lydia2`, `[object Object]2`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nThe `+` operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string.\n\nThe first one is `1`, which is a numerical value. `1 + 2` returns the number 3.\n\nHowever, the second one is a string `\"Lydia\"`. `\"Lydia\"` is a string and `2` is a number: `2` gets coerced into a string. `\"Lydia\"` and `\"2\"` get concatenated, which results in the string `\"Lydia2\"`.\n\n`{ name: \"Lydia\" }` is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes `\"[object Object]\"`. `\"[object Object]\"` concatenated with `\"2\"` becomes `\"[object Object]2\"`."
    },
    {
      "id": 104,
      "title": "104. What's its value?",
      "text": null,
      "code": "<span class=\"hljs-title class_\">Promise</span>.<span class=\"hljs-title function_\">resolve</span>(<span class=\"hljs-number\">5</span>);",
      "choices": [
        "A: `5`",
        "B: `Promise {<pending>: 5}`",
        "C: `Promise {<fulfilled>: 5}`",
        "D: `Error`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nWe can pass any type of value we want to `Promise.resolve`, either a promise or a non-promise. The method itself returns a promise with the resolved value (`<fulfilled>`). If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise.\n\nIn this case, we just passed the numerical value `5`. It returns a resolved promise with the value `5`."
    },
    {
      "id": 105,
      "title": "105. What's its value?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">compareMembers</span>(<span class=\"hljs-params\">person1, person2 = person</span>) {\n  <span class=\"hljs-keyword\">if</span> (person1 !== person2) {\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;Not the same!&#x27;</span>);\n  } <span class=\"hljs-keyword\">else</span> {\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;They are the same!&#x27;</span>);\n  }\n}\n\n<span class=\"hljs-keyword\">const</span> person = { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Lydia&#x27;</span> };\n\n<span class=\"hljs-title function_\">compareMembers</span>(person);",
      "choices": [
        "A: `Not the same!`",
        "B: `They are the same!`",
        "C: `ReferenceError`",
        "D: `SyntaxError`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nObjects are passed by reference. When we check objects for strict equality (`===`), we're comparing their references.\n\nWe set the default value for `person2` equal to the `person` object, and passed the `person` object as the value for `person1`.\n\nThis means that both values have a reference to the same spot in memory, thus they are equal.\n\nThe code block in the `else` statement gets run, and `They are the same!` gets logged."
    },
    {
      "id": 106,
      "title": "106. What's its value?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> colorConfig = {\n  <span class=\"hljs-attr\">red</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">blue</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">green</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">black</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">yellow</span>: <span class=\"hljs-literal\">false</span>,\n};\n\n<span class=\"hljs-keyword\">const</span> colors = [<span class=\"hljs-string\">&#x27;pink&#x27;</span>, <span class=\"hljs-string\">&#x27;red&#x27;</span>, <span class=\"hljs-string\">&#x27;blue&#x27;</span>];\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(colorConfig.<span class=\"hljs-property\">colors</span>[<span class=\"hljs-number\">1</span>]);",
      "choices": [
        "A: `true`",
        "B: `false`",
        "C: `undefined`",
        "D: `TypeError`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nIn JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (`colorConfig.colors`) instead of bracket notation (`colorConfig[\"colors\"]`).\n\nWith dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called `colors` on the `colorConfig` object. There is no property called `colors`, so this returns `undefined`. Then, we try to access the value of the first element by using `[1]`. We cannot do this on a value that's `undefined`, so it throws a `TypeError`: `Cannot read property '1' of undefined`.\n\nJavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement. If we would've used `colorConfig[colors[1]]`, it would have returned the value of the `red` property on the `colorConfig` object."
    },
    {
      "id": 107,
      "title": "107. What's its value?",
      "text": null,
      "code": "<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;❤️&#x27;</span> === <span class=\"hljs-string\">&#x27;❤️&#x27;</span>);",
      "choices": [
        "A: `true`",
        "B: `false`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nUnder the hood, emojis are unicodes. The unicodes for the heart emoji is `\"U+2764 U+FE0F\"`. These are always the same for the same emojis, so we're comparing two equal strings to each other, which returns true."
    },
    {
      "id": 108,
      "title": "108. Which of these methods modifies the original array?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> emojis = [<span class=\"hljs-string\">&#x27;✨&#x27;</span>, <span class=\"hljs-string\">&#x27;🥑&#x27;</span>, <span class=\"hljs-string\">&#x27;😍&#x27;</span>];\n\nemojis.<span class=\"hljs-title function_\">map</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">x</span> =&gt;</span> x + <span class=\"hljs-string\">&#x27;✨&#x27;</span>);\nemojis.<span class=\"hljs-title function_\">filter</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">x</span> =&gt;</span> x !== <span class=\"hljs-string\">&#x27;🥑&#x27;</span>);\nemojis.<span class=\"hljs-title function_\">find</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">x</span> =&gt;</span> x !== <span class=\"hljs-string\">&#x27;🥑&#x27;</span>);\nemojis.<span class=\"hljs-title function_\">reduce</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">acc, cur</span>) =&gt;</span> acc + <span class=\"hljs-string\">&#x27;✨&#x27;</span>);\nemojis.<span class=\"hljs-title function_\">slice</span>(<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>, <span class=\"hljs-string\">&#x27;✨&#x27;</span>);\nemojis.<span class=\"hljs-title function_\">splice</span>(<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>, <span class=\"hljs-string\">&#x27;✨&#x27;</span>);",
      "choices": [
        "A: `All of them`",
        "B: `map` `reduce` `slice` `splice`",
        "C: `map` `slice` `splice`",
        "D: `splice`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nWith `splice` method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed `'🥑'` and `'😍'`) and added the ✨ emoji instead.\n\n`map`, `filter` and `slice` return a new array, `find` returns an element, and `reduce` returns a reduced value."
    },
    {
      "id": 109,
      "title": "109. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> food = [<span class=\"hljs-string\">&#x27;🍕&#x27;</span>, <span class=\"hljs-string\">&#x27;🍫&#x27;</span>, <span class=\"hljs-string\">&#x27;🥑&#x27;</span>, <span class=\"hljs-string\">&#x27;🍔&#x27;</span>];\n<span class=\"hljs-keyword\">const</span> info = { <span class=\"hljs-attr\">favoriteFood</span>: food[<span class=\"hljs-number\">0</span>] };\n\ninfo.<span class=\"hljs-property\">favoriteFood</span> = <span class=\"hljs-string\">&#x27;🍝&#x27;</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(food);",
      "choices": [
        "A: `['🍕', '🍫', '🥑', '🍔']`",
        "B: `['🍝', '🍫', '🥑', '🍔']`",
        "C: `['🍝', '🍕', '🍫', '🥑', '🍔']`",
        "D: `ReferenceError`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nWe set the value of the `favoriteFood` property on the `info` object equal to the string with the pizza emoji, `'🍕'`. A string is a primitive data type. In JavaScript, primitive data types don't interact by reference.\n\nIn JavaScript, primitive data types (everything that's not an object) interact by _value_. In this case, we set the value of the `favoriteFood` property on the `info` object equal to the value of the first element in the `food` array, the string with the pizza emoji in this case (`'🍕'`). A string is a primitive data type, and interact by value (see my [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) if you're interested in learning more)\n\nThen, we change the value of the `favoriteFood` property on the `info` object. The `food` array hasn't changed, since the value of `favoriteFood` was merely a _copy_ of the value of the first element in the array, and doesn't have a reference to the same spot in memory as the element on `food[0]`. When we log food, it's still the original array, `['🍕', '🍫', '🥑', '🍔']`."
    },
    {
      "id": 110,
      "title": "110. What does this method do?",
      "text": null,
      "code": "<span class=\"hljs-title class_\">JSON</span>.<span class=\"hljs-title function_\">parse</span>();",
      "choices": [
        "A: Parses JSON to a JavaScript value",
        "B: Parses a JavaScript object to JSON",
        "C: Parses any JavaScript value to JSON",
        "D: Parses JSON to a JavaScript object only"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nWith the `JSON.parse()` method, we can parse JSON string to a JavaScript value.\n\n// Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonNumber \\= JSON.stringify(4); // '4'\nJSON.parse(jsonNumber); // 4\n\n// Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonArray \\= JSON.stringify(\\[1, 2, 3\\]); // '\\[1, 2, 3\\]'\nJSON.parse(jsonArray); // \\[1, 2, 3\\]\n\n// Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonArray \\= JSON.stringify({ name: 'Lydia' }); // '{\"name\":\"Lydia\"}'\nJSON.parse(jsonArray); // { name: 'Lydia' }"
    },
    {
      "id": 111,
      "title": "111. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">let</span> name = <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>;\n\n<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">getName</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(name);\n  <span class=\"hljs-keyword\">let</span> name = <span class=\"hljs-string\">&#x27;Sarah&#x27;</span>;\n}\n\n<span class=\"hljs-title function_\">getName</span>();",
      "choices": [
        "A: Lydia",
        "B: Sarah",
        "C: `undefined`",
        "D: `ReferenceError`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nEach function has its own _execution context_ (or _scope_). The `getName` function first looks within its own context (scope) to see if it contains the variable `name` we're trying to access. In this case, the `getName` function contains its own `name` variable: we declare the variable `name` with the `let` keyword, and with the value of `'Sarah'`.\n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get _initialized_. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.\n\nIf we wouldn't have declared the `name` variable within the `getName` function, the javascript engine would've looked down the _scope chain_. The outer scope has a variable called `name` with the value of `Lydia`. In that case, it would've logged `Lydia`.\n\nlet name \\= 'Lydia';\n\nfunction getName() {\n  console.log(name);\n}\n\ngetName(); // Lydia"
    },
    {
      "id": 112,
      "title": "112. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span>* <span class=\"hljs-title function_\">generatorOne</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-keyword\">yield</span> [<span class=\"hljs-string\">&#x27;a&#x27;</span>, <span class=\"hljs-string\">&#x27;b&#x27;</span>, <span class=\"hljs-string\">&#x27;c&#x27;</span>];\n}\n\n<span class=\"hljs-keyword\">function</span>* <span class=\"hljs-title function_\">generatorTwo</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-keyword\">yield</span>* [<span class=\"hljs-string\">&#x27;a&#x27;</span>, <span class=\"hljs-string\">&#x27;b&#x27;</span>, <span class=\"hljs-string\">&#x27;c&#x27;</span>];\n}\n\n<span class=\"hljs-keyword\">const</span> one = <span class=\"hljs-title function_\">generatorOne</span>();\n<span class=\"hljs-keyword\">const</span> two = <span class=\"hljs-title function_\">generatorTwo</span>();\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(one.<span class=\"hljs-title function_\">next</span>().<span class=\"hljs-property\">value</span>);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(two.<span class=\"hljs-title function_\">next</span>().<span class=\"hljs-property\">value</span>);",
      "choices": [
        "A: `a` and `a`",
        "B: `a` and `undefined`",
        "C: `['a', 'b', 'c']` and `a`",
        "D: `a` and `['a', 'b', 'c']`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nWith the `yield` keyword, we `yield` values in a generator function. With the `yield*` keyword, we can yield values from another generator function, or iterable object (for example an array).\n\nIn `generatorOne`, we yield the entire array `['a', 'b', 'c']` using the `yield` keyword. The value of `value` property on the object returned by the `next` method on `one` (`one.next().value`) is equal to the entire array `['a', 'b', 'c']`.\n\nconsole.log(one.next().value); // \\['a', 'b', 'c'\\]\nconsole.log(one.next().value); // undefined\n\nIn `generatorTwo`, we use the `yield*` keyword. This means that the first yielded value of `two`, is equal to the first yielded value in the iterator. The iterator is the array `['a', 'b', 'c']`. The first yielded value is `a`, so the first time we call `two.next().value`, `a` is returned.\n\nconsole.log(two.next().value); // 'a'\nconsole.log(two.next().value); // 'b'\nconsole.log(two.next().value); // 'c'\nconsole.log(two.next().value); // undefined"
    },
    {
      "id": 113,
      "title": "113. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">`<span class=\"hljs-subst\">${(x =&gt; x)(<span class=\"hljs-string\">&#x27;I love&#x27;</span>)}</span> to program`</span>);",
      "choices": [
        "A: `I love to program`",
        "B: `undefined to program`",
        "C: `${(x => x)('I love') to program`",
        "D: `TypeError`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nExpressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function `(x => x)('I love')` in this case. We pass the value `'I love'` as an argument to the `x => x` arrow function. `x` is equal to `'I love'`, which gets returned. This results in `I love to program`."
    },
    {
      "id": 114,
      "title": "114. What will happen?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">let</span> config = {\n  <span class=\"hljs-attr\">alert</span>: <span class=\"hljs-built_in\">setInterval</span>(<span class=\"hljs-function\">() =&gt;</span> {\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;Alert!&#x27;</span>);\n  }, <span class=\"hljs-number\">1000</span>),\n};\n\nconfig = <span class=\"hljs-literal\">null</span>;",
      "choices": [
        "A: The `setInterval` callback won't be invoked",
        "B: The `setInterval` callback gets invoked once",
        "C: The `setInterval` callback will still be called every second",
        "D: We never invoked `config.alert()`, config is `null`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nNormally when we set objects equal to `null`, those objects get _garbage collected_ as there is no reference anymore to that object. However, since the callback function within `setInterval` is an arrow function (thus bound to the `config` object), the callback function still holds a reference to the `config` object. As long as there is a reference, the object won't get garbage collected. Since this is an interval, setting `config` to `null` or `delete`\\-ing `config.alert` won't garbage-collect the interval, so the interval will still be called. It should be cleared with `clearInterval(config.alert)` to remove it from memory. Since it was not cleared, the `setInterval` callback function will still get invoked every 1000ms (1s)."
    },
    {
      "id": 115,
      "title": "115. Which method(s) will return the value 'Hello world!'?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> myMap = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Map</span>();\n<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">myFunc</span> = (<span class=\"hljs-params\"></span>) =&gt; <span class=\"hljs-string\">&#x27;greeting&#x27;</span>;\n\nmyMap.<span class=\"hljs-title function_\">set</span>(myFunc, <span class=\"hljs-string\">&#x27;Hello world!&#x27;</span>);\n\n<span class=\"hljs-comment\">//1</span>\nmyMap.<span class=\"hljs-title function_\">get</span>(<span class=\"hljs-string\">&#x27;greeting&#x27;</span>);\n<span class=\"hljs-comment\">//2</span>\nmyMap.<span class=\"hljs-title function_\">get</span>(myFunc);\n<span class=\"hljs-comment\">//3</span>\nmyMap.<span class=\"hljs-title function_\">get</span>(<span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-string\">&#x27;greeting&#x27;</span>);",
      "choices": [
        "A: 1",
        "B: 2",
        "C: 2 and 3",
        "D: All of them"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWhen adding a key/value pair using the `set` method, the key will be the value of the first argument passed to the `set` function, and the value will be the second argument passed to the `set` function. The key is the _function_ `() => 'greeting'` in this case, and the value `'Hello world'`. `myMap` is now `{ () => 'greeting' => 'Hello world!' }`.\n\n1 is wrong, since the key is not `'greeting'` but `() => 'greeting'`. 3 is wrong, since we're creating a new function by passing it as a parameter to the `get` method. Object interact by _reference_. Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory."
    },
    {
      "id": 116,
      "title": "116. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> person = {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>,\n  <span class=\"hljs-attr\">age</span>: <span class=\"hljs-number\">21</span>,\n};\n\n<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">changeAge</span> = (<span class=\"hljs-params\">x = { ...person }</span>) =&gt; (x.<span class=\"hljs-property\">age</span> += <span class=\"hljs-number\">1</span>);\n<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">changeAgeAndName</span> = (<span class=\"hljs-params\">x = { ...person }</span>) =&gt; {\n  x.<span class=\"hljs-property\">age</span> += <span class=\"hljs-number\">1</span>;\n  x.<span class=\"hljs-property\">name</span> = <span class=\"hljs-string\">&#x27;Sarah&#x27;</span>;\n};\n\n<span class=\"hljs-title function_\">changeAge</span>(person);\n<span class=\"hljs-title function_\">changeAgeAndName</span>();\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(person);",
      "choices": [
        "A: `{name: \"Sarah\", age: 22}`",
        "B: `{name: \"Sarah\", age: 23}`",
        "C: `{name: \"Lydia\", age: 22}`",
        "D: `{name: \"Lydia\", age: 23}`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nBoth the `changeAge` and `changeAgeAndName` functions have a default parameter, namely a _newly_ created object `{ ...person }`. This object has copies of all the key/values in the `person` object.\n\nFirst, we invoke the `changeAge` function and pass the `person` object as its argument. This function increases the value of the `age` property by 1. `person` is now `{ name: \"Lydia\", age: 22 }`.\n\nThen, we invoke the `changeAgeAndName` function, however we don't pass a parameter. Instead, the value of `x` is equal to a _new_ object: `{ ...person }`. Since it's a new object, it doesn't affect the values of the properties on the `person` object. `person` is still equal to `{ name: \"Lydia\", age: 22 }`."
    },
    {
      "id": 117,
      "title": "117. Which of the following options will return 6?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">sumValues</span>(<span class=\"hljs-params\">x, y, z</span>) {\n  <span class=\"hljs-keyword\">return</span> x + y + z;\n}",
      "choices": [
        "A: `sumValues([...1, 2, 3])`",
        "B: `sumValues([...[1, 2, 3]])`",
        "C: `sumValues(...[1, 2, 3])`",
        "D: `sumValues([1, 2, 3])`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nWith the spread operator `...`, we can _spread_ iterables to individual elements. The `sumValues` function receives three arguments: `x`, `y` and `z`. `...[1, 2, 3]` will result in `1, 2, 3`, which we pass to the `sumValues` function."
    },
    {
      "id": 118,
      "title": "118. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">let</span> num = <span class=\"hljs-number\">1</span>;\n<span class=\"hljs-keyword\">const</span> list = [<span class=\"hljs-string\">&#x27;🥳&#x27;</span>, <span class=\"hljs-string\">&#x27;🤠&#x27;</span>, <span class=\"hljs-string\">&#x27;🥰&#x27;</span>, <span class=\"hljs-string\">&#x27;🤪&#x27;</span>];\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(list[(num += <span class=\"hljs-number\">1</span>)]);",
      "choices": [
        "A: `🤠`",
        "B: `🥰`",
        "C: `SyntaxError`",
        "D: `ReferenceError`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWith the `+=` operator, we're incrementing the value of `num` by `1`. `num` had the initial value `1`, so `1 + 1` is `2`. The item on the second index in the `list` array is 🥰, `console.log(list[2])` prints 🥰."
    },
    {
      "id": 119,
      "title": "119. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> person = {\n  <span class=\"hljs-attr\">firstName</span>: <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>,\n  <span class=\"hljs-attr\">lastName</span>: <span class=\"hljs-string\">&#x27;Hallie&#x27;</span>,\n  <span class=\"hljs-attr\">pet</span>: {\n    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Mara&#x27;</span>,\n    <span class=\"hljs-attr\">breed</span>: <span class=\"hljs-string\">&#x27;Dutch Tulip Hound&#x27;</span>,\n  },\n  <span class=\"hljs-title function_\">getFullName</span>(<span class=\"hljs-params\"></span>) {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`<span class=\"hljs-subst\">${<span class=\"hljs-variable language_\">this</span>.firstName}</span> <span class=\"hljs-subst\">${<span class=\"hljs-variable language_\">this</span>.lastName}</span>`</span>;\n  },\n};\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(person.<span class=\"hljs-property\">pet</span>?.<span class=\"hljs-property\">name</span>);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(person.<span class=\"hljs-property\">pet</span>?.<span class=\"hljs-property\">family</span>?.<span class=\"hljs-property\">name</span>);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(person.<span class=\"hljs-property\">getFullName</span>?.());\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(member.<span class=\"hljs-property\">getLastName</span>?.());",
      "choices": [
        "A: `undefined` `undefined` `undefined` `undefined`",
        "B: `Mara` `undefined` `Lydia Hallie` `ReferenceError`",
        "C: `Mara` `null` `Lydia Hallie` `null`",
        "D: `null` `ReferenceError` `null` `ReferenceError`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWith the optional chaining operator `?.`, we no longer have to explicitly check whether the deeper nested values are valid or not. If we're trying to access a property on an `undefined` or `null` value (_nullish_), the expression short-circuits and returns `undefined`.\n\n`person.pet?.name`: `person` has a property named `pet`: `person.pet` is not nullish. It has a property called `name`, and returns `Mara`. `person.pet?.family?.name`: `person` has a property named `pet`: `person.pet` is not nullish. `pet` does _not_ have a property called `family`, `person.pet.family` is nullish. The expression returns `undefined`. `person.getFullName?.()`: `person` has a property named `getFullName`: `person.getFullName()` is not nullish and can get invoked, which returns `Lydia Hallie`. `member.getLastName?.()`: variable `member` is non existent therefore a `ReferenceError` gets thrown!"
    },
    {
      "id": 120,
      "title": "120. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> groceries = [<span class=\"hljs-string\">&#x27;banana&#x27;</span>, <span class=\"hljs-string\">&#x27;apple&#x27;</span>, <span class=\"hljs-string\">&#x27;peanuts&#x27;</span>];\n\n<span class=\"hljs-keyword\">if</span> (groceries.<span class=\"hljs-title function_\">indexOf</span>(<span class=\"hljs-string\">&#x27;banana&#x27;</span>)) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;We have to buy bananas!&#x27;</span>);\n} <span class=\"hljs-keyword\">else</span> {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">`We don&#x27;t have to buy bananas!`</span>);\n}",
      "choices": [
        "A: We have to buy bananas!",
        "B: We don't have to buy bananas",
        "C: `undefined`",
        "D: `1`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWe passed the condition `groceries.indexOf(\"banana\")` to the if-statement. `groceries.indexOf(\"banana\")` returns `0`, which is a falsy value. Since the condition in the if-statement is falsy, the code in the `else` block runs, and `We don't have to buy bananas!` gets logged."
    },
    {
      "id": 121,
      "title": "121. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> config = {\n  <span class=\"hljs-attr\">languages</span>: [],\n  <span class=\"hljs-keyword\">set</span> <span class=\"hljs-title function_\">language</span>(<span class=\"hljs-params\">lang</span>) {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">languages</span>.<span class=\"hljs-title function_\">push</span>(lang);\n  },\n};\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(config.<span class=\"hljs-property\">language</span>);",
      "choices": [
        "A: `function language(lang) { this.languages.push(lang }`",
        "B: `0`",
        "C: `[]`",
        "D: `undefined`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nThe `language` method is a `setter`. Setters don't hold an actual value, their purpose is to _modify_ properties. When calling a `setter` method, `undefined` gets returned."
    },
    {
      "id": 122,
      "title": "122. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> name = <span class=\"hljs-string\">&#x27;Lydia Hallie&#x27;</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(!<span class=\"hljs-keyword\">typeof</span> name === <span class=\"hljs-string\">&#x27;object&#x27;</span>);\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(!<span class=\"hljs-keyword\">typeof</span> name === <span class=\"hljs-string\">&#x27;string&#x27;</span>);",
      "choices": [
        "A: `false` `true`",
        "B: `true` `false`",
        "C: `false` `false`",
        "D: `true` `true`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\n`typeof name` returns `\"string\"`. The string `\"string\"` is a truthy value, so `!typeof name` returns the boolean value `false`. `false === \"object\"` and `false === \"string\"` both return`false`.\n\n(If we wanted to check whether the type was (un)equal to a certain type, we should've written `!==` instead of `!typeof`)"
    },
    {
      "id": 123,
      "title": "123. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">add</span> = x =&gt; <span class=\"hljs-function\"><span class=\"hljs-params\">y</span> =&gt;</span> <span class=\"hljs-function\"><span class=\"hljs-params\">z</span> =&gt;</span> {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(x, y, z);\n  <span class=\"hljs-keyword\">return</span> x + y + z;\n};\n\n<span class=\"hljs-title function_\">add</span>(<span class=\"hljs-number\">4</span>)(<span class=\"hljs-number\">5</span>)(<span class=\"hljs-number\">6</span>);",
      "choices": [
        "A: `4` `5` `6`",
        "B: `6` `5` `4`",
        "C: `4` `function` `function`",
        "D: `undefined` `undefined` `6`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nThe `add` function returns an arrow function, which returns an arrow function, which returns an arrow function (still with me?). The first function receives an argument `x` with the value of `4`. We invoke the second function, which receives an argument `y` with the value `5`. Then we invoke the third function, which receives an argument `z` with the value `6`. When we're trying to access the value `x`, `y` and `z` within the last arrow function, the JS engine goes up the scope chain in order to find the values for `x` and `y` accordingly. This returns `4` `5` `6`."
    },
    {
      "id": 124,
      "title": "124. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">async</span> <span class=\"hljs-keyword\">function</span>* <span class=\"hljs-title function_\">range</span>(<span class=\"hljs-params\">start, end</span>) {\n  <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> i = start; i &lt;= end; i++) {\n    <span class=\"hljs-keyword\">yield</span> <span class=\"hljs-title class_\">Promise</span>.<span class=\"hljs-title function_\">resolve</span>(i);\n  }\n}\n\n(<span class=\"hljs-keyword\">async</span> () =&gt; {\n  <span class=\"hljs-keyword\">const</span> gen = <span class=\"hljs-title function_\">range</span>(<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">3</span>);\n  <span class=\"hljs-keyword\">for</span> <span class=\"hljs-keyword\">await</span> (<span class=\"hljs-keyword\">const</span> item <span class=\"hljs-keyword\">of</span> gen) {\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(item);\n  }\n})();",
      "choices": [
        "A: `Promise {1}` `Promise {2}` `Promise {3}`",
        "B: `Promise {<pending>}` `Promise {<pending>}` `Promise {<pending>}`",
        "C: `1` `2` `3`",
        "D: `undefined` `undefined` `undefined`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nThe generator function `range` returns an async object with promises for each item in the range we pass: `Promise{1}`, `Promise{2}`, `Promise{3}`. We set the variable `gen` equal to the async object, after which we loop over it using a `for await ... of` loop. We set the variable `item` equal to the returned Promise values: first `Promise{1}`, then `Promise{2}`, then `Promise{3}`. Since we're _awaiting_ the value of `item`, the resolved promise, the resolved _values_ of the promises get returned: `1`, `2`, then `3`."
    },
    {
      "id": 125,
      "title": "125. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">myFunc</span> = (<span class=\"hljs-params\">{ x, y, z }</span>) =&gt; {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(x, y, z);\n};\n\n<span class=\"hljs-title function_\">myFunc</span>(<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">3</span>);",
      "choices": [
        "A: `1` `2` `3`",
        "B: `{1: 1}` `{2: 2}` `{3: 3}`",
        "C: `{ 1: undefined }` `undefined` `undefined`",
        "D: `undefined` `undefined` `undefined`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\n`myFunc` expects an object with properties `x`, `y` and `z` as its argument. Since we're only passing three separate numeric values (1, 2, 3) instead of one object with properties `x`, `y` and `z` ({x: 1, y: 2, z: 3}), `x`, `y` and `z` have their default value of `undefined`."
    },
    {
      "id": 126,
      "title": "126. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">getFine</span>(<span class=\"hljs-params\">speed, amount</span>) {\n  <span class=\"hljs-keyword\">const</span> formattedSpeed = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Intl</span>.<span class=\"hljs-title class_\">NumberFormat</span>(<span class=\"hljs-string\">&#x27;en-US&#x27;</span>, {\n    <span class=\"hljs-attr\">style</span>: <span class=\"hljs-string\">&#x27;unit&#x27;</span>,\n    <span class=\"hljs-attr\">unit</span>: <span class=\"hljs-string\">&#x27;mile-per-hour&#x27;</span>\n  }).<span class=\"hljs-title function_\">format</span>(speed);\n\n  <span class=\"hljs-keyword\">const</span> formattedAmount = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Intl</span>.<span class=\"hljs-title class_\">NumberFormat</span>(<span class=\"hljs-string\">&#x27;en-US&#x27;</span>, {\n    <span class=\"hljs-attr\">style</span>: <span class=\"hljs-string\">&#x27;currency&#x27;</span>,\n    <span class=\"hljs-attr\">currency</span>: <span class=\"hljs-string\">&#x27;USD&#x27;</span>\n  }).<span class=\"hljs-title function_\">format</span>(amount);\n\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`The driver drove <span class=\"hljs-subst\">${formattedSpeed}</span> and has to pay <span class=\"hljs-subst\">${formattedAmount}</span>`</span>;\n}\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title function_\">getFine</span>(<span class=\"hljs-number\">130</span>, <span class=\"hljs-number\">300</span>))",
      "choices": [
        "A: The driver drove 130 and has to pay 300",
        "B: The driver drove 130 mph and has to pay $300.00",
        "C: The driver drove undefined and has to pay undefined",
        "D: The driver drove 130.00 and has to pay 300.00"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWith the `Intl.NumberFormat` method, we can format numeric values to any locale. We format the numeric value `130` to the `en-US` locale as a `unit` in `mile-per-hour`, which results in `130 mph`. The numeric value `300` to the `en-US` locale as a `currency` in `USD` results in `$300.00`."
    },
    {
      "id": 127,
      "title": "127. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> spookyItems = [<span class=\"hljs-string\">&#x27;👻&#x27;</span>, <span class=\"hljs-string\">&#x27;🎃&#x27;</span>, <span class=\"hljs-string\">&#x27;🕸&#x27;</span>];\n({ <span class=\"hljs-attr\">item</span>: spookyItems[<span class=\"hljs-number\">3</span>] } = { <span class=\"hljs-attr\">item</span>: <span class=\"hljs-string\">&#x27;💀&#x27;</span> });\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(spookyItems);",
      "choices": [
        "A: `[\"👻\", \"🎃\", \"🕸\"]`",
        "B: `[\"👻\", \"🎃\", \"🕸\", \"💀\"]`",
        "C: `[\"👻\", \"🎃\", \"🕸\", { item: \"💀\" }]`",
        "D: `[\"👻\", \"🎃\", \"🕸\", \"[object Object]\"]`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nBy destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object. In this case, we're assigning the value \"💀\" to `spookyItems[3]`. This means that we're modifying the `spookyItems` array, we're adding the \"💀\" to it. When logging `spookyItems`, `[\"👻\", \"🎃\", \"🕸\", \"💀\"]` gets logged."
    },
    {
      "id": 128,
      "title": "128. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> name = <span class=\"hljs-string\">&#x27;Lydia Hallie&#x27;</span>;\n<span class=\"hljs-keyword\">const</span> age = <span class=\"hljs-number\">21</span>;\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title class_\">Number</span>.<span class=\"hljs-built_in\">isNaN</span>(name));\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-title class_\">Number</span>.<span class=\"hljs-built_in\">isNaN</span>(age));\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-built_in\">isNaN</span>(name));\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-built_in\">isNaN</span>(age));",
      "choices": [
        "A: `true` `false` `true` `false`",
        "B: `true` `false` `false` `false`",
        "C: `false` `false` `true` `false`",
        "D: `false` `true` `false` `true`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nWith the `Number.isNaN` method, you can check if the value you pass is a _numeric value_ and equal to `NaN`. `name` is not a numeric value, so `Number.isNaN(name)` returns `false`. `age` is a numeric value, but is not equal to `NaN`, so `Number.isNaN(age)` returns `false`.\n\nWith the `isNaN` method, you can check if the value you pass is not a number. `name` is not a number, so `isNaN(name)` returns true. `age` is a number, so `isNaN(age)` returns `false`."
    },
    {
      "id": 129,
      "title": "129. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> randomValue = <span class=\"hljs-number\">21</span>;\n\n<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">getInfo</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-keyword\">typeof</span> randomValue);\n  <span class=\"hljs-keyword\">const</span> randomValue = <span class=\"hljs-string\">&#x27;Lydia Hallie&#x27;</span>;\n}\n\n<span class=\"hljs-title function_\">getInfo</span>();",
      "choices": [
        "A: `\"number\"`",
        "B: `\"string\"`",
        "C: `undefined`",
        "D: `ReferenceError`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nVariables declared with the `const` keyword are not referenceable before their initialization: this is called the _temporal dead zone_. In the `getInfo` function, the variable `randomValue` is scoped in the functional scope of `getInfo`. On the line where we want to log the value of `typeof randomValue`, the variable `randomValue` isn't initialized yet: a `ReferenceError` gets thrown! The engine didn't go down the scope chain since we declared the variable `randomValue` in the `getInfo` function."
    },
    {
      "id": 130,
      "title": "130. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> myPromise = <span class=\"hljs-title class_\">Promise</span>.<span class=\"hljs-title function_\">resolve</span>(<span class=\"hljs-string\">&#x27;Woah some cool data&#x27;</span>);\n\n(<span class=\"hljs-keyword\">async</span> () =&gt; {\n  <span class=\"hljs-keyword\">try</span> {\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-keyword\">await</span> myPromise);\n  } <span class=\"hljs-keyword\">catch</span> {\n    <span class=\"hljs-keyword\">throw</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Error</span>(<span class=\"hljs-string\">`Oops didn&#x27;t work`</span>);\n  } <span class=\"hljs-keyword\">finally</span> {\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;Oh finally!&#x27;</span>);\n  }\n})();",
      "choices": [
        "A: `Woah some cool data`",
        "B: `Oh finally!`",
        "C: `Woah some cool data` `Oh finally!`",
        "D: `Oops didn't work` `Oh finally!`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nIn the `try` block, we're logging the awaited value of the `myPromise` variable: `\"Woah some cool data\"`. Since no errors were thrown in the `try` block, the code in the `catch` block doesn't run. The code in the `finally` block _always_ runs, `\"Oh finally!\"` gets logged."
    },
    {
      "id": 131,
      "title": "131. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> emojis = [<span class=\"hljs-string\">&#x27;🥑&#x27;</span>, [<span class=\"hljs-string\">&#x27;✨&#x27;</span>, <span class=\"hljs-string\">&#x27;✨&#x27;</span>, [<span class=\"hljs-string\">&#x27;🍕&#x27;</span>, <span class=\"hljs-string\">&#x27;🍕&#x27;</span>]]];\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(emojis.<span class=\"hljs-title function_\">flat</span>(<span class=\"hljs-number\">1</span>));",
      "choices": [
        "A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`",
        "B: `['🥑', '✨', '✨', ['🍕', '🍕']]`",
        "C: `['🥑', ['✨', '✨', '🍕', '🍕']]`",
        "D: `['🥑', '✨', '✨', '🍕', '🍕']`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWith the `flat` method, we can create a new, flattened array. The depth of the flattened array depends on the value that we pass. In this case, we passed the value `1` (which we didn't have to, that's the default value), meaning that only the arrays on the first depth will be concatenated. `['🥑']` and `['✨', '✨', ['🍕', '🍕']]` in this case. Concatenating these two arrays results in `['🥑', '✨', '✨', ['🍕', '🍕']]`."
    },
    {
      "id": 132,
      "title": "132. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">Counter</span> {\n  <span class=\"hljs-title function_\">constructor</span>(<span class=\"hljs-params\"></span>) {\n    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">count</span> = <span class=\"hljs-number\">0</span>;\n  }\n\n  <span class=\"hljs-title function_\">increment</span>(<span class=\"hljs-params\"></span>) {\n    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">count</span>++;\n  }\n}\n\n<span class=\"hljs-keyword\">const</span> counterOne = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Counter</span>();\ncounterOne.<span class=\"hljs-title function_\">increment</span>();\ncounterOne.<span class=\"hljs-title function_\">increment</span>();\n\n<span class=\"hljs-keyword\">const</span> counterTwo = counterOne;\ncounterTwo.<span class=\"hljs-title function_\">increment</span>();\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(counterOne.<span class=\"hljs-property\">count</span>);",
      "choices": [
        "A: `0`",
        "B: `1`",
        "C: `2`",
        "D: `3`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\n`counterOne` is an instance of the `Counter` class. The counter class contains a `count` property on its constructor, and an `increment` method. First, we invoked the `increment` method twice by calling `counterOne.increment()`. Currently, `counterOne.count` is `2`.\n\n[![](https://camo.githubusercontent.com/5dd8fe8e901cbe6e6451e265db21e3a37df51ed06735121edd177deeedef2d65/68747470733a2f2f692e696d6775722e636f6d2f4b784c6c546d392e706e67)](https://camo.githubusercontent.com/5dd8fe8e901cbe6e6451e265db21e3a37df51ed06735121edd177deeedef2d65/68747470733a2f2f692e696d6775722e636f6d2f4b784c6c546d392e706e67)\n\nThen, we create a new variable `counterTwo`, and set it equal to `counterOne`. Since objects interact by reference, we're just creating a new reference to the same spot in memory that `counterOne` points to. Since it has the same spot in memory, any changes made to the object that `counterTwo` has a reference to, also apply to `counterOne`. Currently, `counterTwo.count` is `2`.\n\nWe invoke `counterTwo.increment()`, which sets `count` to `3`. Then, we log the count on `counterOne`, which logs `3`.\n\n[![](https://camo.githubusercontent.com/fe95c1437959e5239b4c22d4f32a7dd5dbf9bae5ac5a0e81c37bdb84cdd00af5/68747470733a2f2f692e696d6775722e636f6d2f424e4248586d632e706e67)](https://camo.githubusercontent.com/fe95c1437959e5239b4c22d4f32a7dd5dbf9bae5ac5a0e81c37bdb84cdd00af5/68747470733a2f2f692e696d6775722e636f6d2f424e4248586d632e706e67)"
    },
    {
      "id": 133,
      "title": "133. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> myPromise = <span class=\"hljs-title class_\">Promise</span>.<span class=\"hljs-title function_\">resolve</span>(<span class=\"hljs-title class_\">Promise</span>.<span class=\"hljs-title function_\">resolve</span>(<span class=\"hljs-string\">&#x27;Promise&#x27;</span>));\n\n<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">funcOne</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;Timeout 1!&#x27;</span>), <span class=\"hljs-number\">0</span>);\n  myPromise.<span class=\"hljs-title function_\">then</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">res</span> =&gt;</span> res).<span class=\"hljs-title function_\">then</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">res</span> =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">`<span class=\"hljs-subst\">${res}</span> 1!`</span>));\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;Last line 1!&#x27;</span>);\n}\n\n<span class=\"hljs-keyword\">async</span> <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">funcTwo</span>(<span class=\"hljs-params\"></span>) {\n  <span class=\"hljs-keyword\">const</span> res = <span class=\"hljs-keyword\">await</span> myPromise;\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">`<span class=\"hljs-subst\">${res}</span> 2!`</span>)\n  <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;Timeout 2!&#x27;</span>), <span class=\"hljs-number\">0</span>);\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;Last line 2!&#x27;</span>);\n}\n\n<span class=\"hljs-title function_\">funcOne</span>();\n<span class=\"hljs-title function_\">funcTwo</span>();",
      "choices": [
        "A: `Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!`",
        "B: `Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2!`",
        "C: `Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!`",
        "D: `Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nFirst, we invoke `funcOne`. On the first line of `funcOne`, we call the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API. (see my article on the event loop [here](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif).)\n\nThen we call the `myPromise` promise, which is an _asynchronous_ operation.\n\nBoth the promise and the timeout are asynchronous operations, the function keeps on running while it's busy completing the promise and handling the `setTimeout` callback. This means that `Last line 1!` gets logged first, since this is not an asynchonous operation.\n\nSince the callstack is not empty yet, the `setTimeout` function and promise in `funcOne` cannot get added to the callstack yet.\n\nIn `funcTwo`, the variable `res` gets `Promise` because `Promise.resolve(Promise.resolve('Promise'))` is equivalent to `Promise.resolve('Promise')` since resolving a promise just resolves it's value. The `await` in this line stops the execution of the function until it receives the resolution of the promise and then keeps on running synchronously until completion, so `Promise 2!` and then `Last line 2!` are logged and the `setTimeout` is sent to the Web API.\n\nThen the call stack is empty. Promises are _microtasks_ so they are resolved first when the call stack is empty so `Promise 1!` gets to be logged.\n\nNow, since `funcTwo` popped off the call stack, the call stack is empty. The callbacks waiting in the queue (`() => console.log(\"Timeout 1!\")` from `funcOne`, and `() => console.log(\"Timeout 2!\")` from `funcTwo`) get added to the call stack one by one. The first callback logs `Timeout 1!`, and gets popped off the stack. Then, the second callback logs `Timeout 2!`, and gets popped off the stack."
    },
    {
      "id": 134,
      "title": "134. How can we invoke sum in sum.js from index.js?",
      "text": null,
      "code": "<span class=\"hljs-comment\">// sum.js</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">sum</span>(<span class=\"hljs-params\">x</span>) {\n  <span class=\"hljs-keyword\">return</span> x + x;\n}\n\n<span class=\"hljs-comment\">// index.js</span>\n<span class=\"hljs-keyword\">import</span> * <span class=\"hljs-keyword\">as</span> sum <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;./sum&#x27;</span>;",
      "choices": [
        "A: `sum(4)`",
        "B: `sum.sum(4)`",
        "C: `sum.default(4)`",
        "D: Default aren't imported with `*`, only named exports"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nWith the asterisk `*`, we import all exported values from that file, both default and named. If we had the following file:\n\n// info.js\nexport const name \\= 'Lydia';\nexport const age \\= 21;\nexport default 'I love JavaScript';\n\n// index.js\nimport \\* as info from './info';\nconsole.log(info);\n\nThe following would get logged:\n\n{\n  default: \"I love JavaScript\",\n  name: \"Lydia\",\n  age: 21\n}\n\nFor the `sum` example, it means that the imported value `sum` looks like this:\n\n{ default: function sum(x) { return x + x } }\n\nWe can invoke this function, by calling `sum.default`"
    },
    {
      "id": 135,
      "title": "135. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> handler = {\n  <span class=\"hljs-attr\">set</span>: <span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;Added a new property!&#x27;</span>),\n  <span class=\"hljs-attr\">get</span>: <span class=\"hljs-function\">() =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&#x27;Accessed a property!&#x27;</span>),\n};\n\n<span class=\"hljs-keyword\">const</span> person = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Proxy</span>({}, handler);\n\nperson.<span class=\"hljs-property\">name</span> = <span class=\"hljs-string\">&#x27;Lydia&#x27;</span>;\nperson.<span class=\"hljs-property\">name</span>;",
      "choices": [
        "A: `Added a new property!`",
        "B: `Accessed a property!`",
        "C: `Added a new property!` `Accessed a property!`",
        "D: Nothing gets logged"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nWith a Proxy object, we can add custom behavior to an object that we pass to it as the second argument. In this case, we pass the `handler` object which contained two properties: `set` and `get`. `set` gets invoked whenever we _set_ property values, `get` gets invoked whenever we _get_ (access) property values.\n\nThe first argument is an empty object `{}`, which is the value of `person`. To this object, the custom behavior specified in the `handler` object gets added. If we add a property to the `person` object, `set` will get invoked. If we access a property on the `person` object, `get` gets invoked.\n\nFirst, we added a new property `name` to the proxy object (`person.name = \"Lydia\"`). `set` gets invoked, and logs `\"Added a new property!\"`.\n\nThen, we access a property value on the proxy object, the `get` property on the handler object got invoked. `\"Accessed a property!\"` gets logged."
    },
    {
      "id": 136,
      "title": "136. Which of the following will modify the person object?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> person = { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Lydia Hallie&#x27;</span> };\n\n<span class=\"hljs-title class_\">Object</span>.<span class=\"hljs-title function_\">seal</span>(person);",
      "choices": [
        "A: `person.name = \"Evan Bacon\"`",
        "B: `person.age = 21`",
        "C: `delete person.name`",
        "D: `Object.assign(person, { age: 21 })`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nWith `Object.seal` we can prevent new properties from being _added_, or existing properties to be _removed_.\n\nHowever, you can still modify the value of existing properties."
    },
    {
      "id": 137,
      "title": "137. Which of the following will modify the person object?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> person = {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Lydia Hallie&#x27;</span>,\n  <span class=\"hljs-attr\">address</span>: {\n    <span class=\"hljs-attr\">street</span>: <span class=\"hljs-string\">&#x27;100 Main St&#x27;</span>,\n  },\n};\n\n<span class=\"hljs-title class_\">Object</span>.<span class=\"hljs-title function_\">freeze</span>(person);",
      "choices": [
        "A: `person.name = \"Evan Bacon\"`",
        "B: `delete person.address`",
        "C: `person.address.street = \"101 Main St\"`",
        "D: `person.pet = { name: \"Mara\" }`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nThe `Object.freeze` method _freezes_ an object. No properties can be added, modified, or removed.\n\nHowever, it only _shallowly_ freezes the object, meaning that only _direct_ properties on the object are frozen. If the property is another object, like `address` in this case, the properties on that object aren't frozen, and can be modified."
    },
    {
      "id": 138,
      "title": "138. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">add</span> = x =&gt; x + x;\n\n<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">myFunc</span>(<span class=\"hljs-params\">num = <span class=\"hljs-number\">2</span>, value = add(num)</span>) {\n  <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(num, value);\n}\n\n<span class=\"hljs-title function_\">myFunc</span>();\n<span class=\"hljs-title function_\">myFunc</span>(<span class=\"hljs-number\">3</span>);",
      "choices": [
        "A: `2` `4` and `3` `6`",
        "B: `2` `NaN` and `3` `NaN`",
        "C: `2` `Error` and `3` `6`",
        "D: `2` `4` and `3` `Error`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nFirst, we invoked `myFunc()` without passing any arguments. Since we didn't pass arguments, `num` and `value` got their default values: num is `2`, and `value` the returned value of the function `add`. To the `add` function, we pass `num` as an argument, which had the value of `2`. `add` returns `4`, which is the value of `value`.\n\nThen, we invoked `myFunc(3)` and passed the value `3` as the value for the argument `num`. We didn't pass an argument for `value`. Since we didn't pass a value for the `value` argument, it got the default value: the returned value of the `add` function. To `add`, we pass `num`, which has the value of `3`. `add` returns `6`, which is the value of `value`."
    },
    {
      "id": 139,
      "title": "139. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">Counter</span> {\n  #number = <span class=\"hljs-number\">10</span>\n\n  <span class=\"hljs-title function_\">increment</span>(<span class=\"hljs-params\"></span>) {\n    <span class=\"hljs-variable language_\">this</span>.#number++\n  }\n\n  <span class=\"hljs-title function_\">getNum</span>(<span class=\"hljs-params\"></span>) {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-variable language_\">this</span>.#number\n  }\n}\n\n<span class=\"hljs-keyword\">const</span> counter = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Counter</span>()\ncounter.<span class=\"hljs-title function_\">increment</span>()\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(counter.#number)",
      "choices": [
        "A: `10`",
        "B: `11`",
        "C: `undefined`",
        "D: `SyntaxError`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nIn ES2020, we can add private variables in classes by using the `#`. We cannot access these variables outside of the class. When we try to log `counter.#number`, a SyntaxError gets thrown: we cannot acccess it outside the `Counter` class!"
    },
    {
      "id": 140,
      "title": "140. What's missing?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> teams = [\n  { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Team 1&#x27;</span>, <span class=\"hljs-attr\">members</span>: [<span class=\"hljs-string\">&#x27;Paul&#x27;</span>, <span class=\"hljs-string\">&#x27;Lisa&#x27;</span>] },\n  { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Team 2&#x27;</span>, <span class=\"hljs-attr\">members</span>: [<span class=\"hljs-string\">&#x27;Laura&#x27;</span>, <span class=\"hljs-string\">&#x27;Tim&#x27;</span>] },\n];\n\n<span class=\"hljs-keyword\">function</span>* <span class=\"hljs-title function_\">getMembers</span>(<span class=\"hljs-params\">members</span>) {\n  <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">0</span>; i &lt; members.<span class=\"hljs-property\">length</span>; i++) {\n    <span class=\"hljs-keyword\">yield</span> members[i];\n  }\n}\n\n<span class=\"hljs-keyword\">function</span>* <span class=\"hljs-title function_\">getTeams</span>(<span class=\"hljs-params\">teams</span>) {\n  <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">0</span>; i &lt; teams.<span class=\"hljs-property\">length</span>; i++) {\n    <span class=\"hljs-comment\">// ✨ SOMETHING IS MISSING HERE ✨</span>\n  }\n}\n\n<span class=\"hljs-keyword\">const</span> obj = <span class=\"hljs-title function_\">getTeams</span>(teams);\nobj.<span class=\"hljs-title function_\">next</span>(); <span class=\"hljs-comment\">// { value: &quot;Paul&quot;, done: false }</span>\nobj.<span class=\"hljs-title function_\">next</span>(); <span class=\"hljs-comment\">// { value: &quot;Lisa&quot;, done: false }</span>",
      "choices": [
        "A: `yield getMembers(teams[i].members)`",
        "B: `yield* getMembers(teams[i].members)`",
        "C: `return getMembers(teams[i].members)`",
        "D: `return yield getMembers(teams[i].members)`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nIn order to iterate over the `members` in each element in the `teams` array, we need to pass `teams[i].members` to the `getMembers` generator function. The generator function returns a generator object. In order to iterate over each element in this generator object, we need to use `yield*`.\n\nIf we would've written `yield`, `return yield`, or `return`, the entire generator function would've gotten returned the first time we called the `next` method."
    },
    {
      "id": 141,
      "title": "141. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> person = {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#x27;Lydia Hallie&#x27;</span>,\n  <span class=\"hljs-attr\">hobbies</span>: [<span class=\"hljs-string\">&#x27;coding&#x27;</span>],\n};\n\n<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">addHobby</span>(<span class=\"hljs-params\">hobby, hobbies = person.hobbies</span>) {\n  hobbies.<span class=\"hljs-title function_\">push</span>(hobby);\n  <span class=\"hljs-keyword\">return</span> hobbies;\n}\n\n<span class=\"hljs-title function_\">addHobby</span>(<span class=\"hljs-string\">&#x27;running&#x27;</span>, []);\n<span class=\"hljs-title function_\">addHobby</span>(<span class=\"hljs-string\">&#x27;dancing&#x27;</span>);\n<span class=\"hljs-title function_\">addHobby</span>(<span class=\"hljs-string\">&#x27;baking&#x27;</span>, person.<span class=\"hljs-property\">hobbies</span>);\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(person.<span class=\"hljs-property\">hobbies</span>);",
      "choices": [
        "A: `[\"coding\"]`",
        "B: `[\"coding\", \"dancing\"]`",
        "C: `[\"coding\", \"dancing\", \"baking\"]`",
        "D: `[\"coding\", \"running\", \"dancing\", \"baking\"]`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nThe `addHobby` function receives two arguments, `hobby` and `hobbies` with the default value of the `hobbies` array on the `person` object.\n\nFirst, we invoke the `addHobby` function, and pass `\"running\"` as the value for `hobby` and an empty array as the value for `hobbies`. Since we pass an empty array as the value for `hobbies`, `\"running\"` gets added to this empty array.\n\nThen, we invoke the `addHobby` function, and pass `\"dancing\"` as the value for `hobby`. We didn't pass a value for `hobbies`, so it gets the default value, the `hobbies` property on the `person` object. We push the hobby `dancing` to the `person.hobbies` array.\n\nLast, we invoke the `addHobby` function, and pass `\"baking\"` as the value for `hobby`, and the `person.hobbies` array as the value for `hobbies`. We push the hobby `baking` to the `person.hobbies` array.\n\nAfter pushing `dancing` and `baking`, the value of `person.hobbies` is `[\"coding\", \"dancing\", \"baking\"]`"
    },
    {
      "id": 142,
      "title": "142. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">Bird</span> {\n  <span class=\"hljs-title function_\">constructor</span>(<span class=\"hljs-params\"></span>) {\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&quot;I&#x27;m a bird. 🦢&quot;</span>);\n  }\n}\n\n<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">Flamingo</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title class_ inherited__\">Bird</span> {\n  <span class=\"hljs-title function_\">constructor</span>(<span class=\"hljs-params\"></span>) {\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&quot;I&#x27;m pink. 🌸&quot;</span>);\n    <span class=\"hljs-variable language_\">super</span>();\n  }\n}\n\n<span class=\"hljs-keyword\">const</span> pet = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Flamingo</span>();",
      "choices": [
        "A: `I'm pink. 🌸`",
        "B: `I'm pink. 🌸` `I'm a bird. 🦢`",
        "C: `I'm a bird. 🦢` `I'm pink. 🌸`",
        "D: Nothing, we didn't call any method"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nWe create the variable `pet` which is an instance of the `Flamingo` class. When we instantiate this instance, the `constructor` on `Flamingo` gets called. First, `\"I'm pink. 🌸\"` gets logged, after which we call `super()`. `super()` calls the constructor of the parent class, `Bird`. The constructor in `Bird` gets called, and logs `\"I'm a bird. 🦢\"`."
    },
    {
      "id": 143,
      "title": "143. Which of the options result(s) in an error?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> emojis = [<span class=\"hljs-string\">&#x27;🎄&#x27;</span>, <span class=\"hljs-string\">&#x27;🎅🏼&#x27;</span>, <span class=\"hljs-string\">&#x27;🎁&#x27;</span>, <span class=\"hljs-string\">&#x27;⭐&#x27;</span>];\n\n<span class=\"hljs-comment\">/* 1 */</span> emojis.<span class=\"hljs-title function_\">push</span>(<span class=\"hljs-string\">&#x27;🦌&#x27;</span>);\n<span class=\"hljs-comment\">/* 2 */</span> emojis.<span class=\"hljs-title function_\">splice</span>(<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">2</span>);\n<span class=\"hljs-comment\">/* 3 */</span> emojis = [...emojis, <span class=\"hljs-string\">&#x27;🥂&#x27;</span>];\n<span class=\"hljs-comment\">/* 4 */</span> emojis.<span class=\"hljs-property\">length</span> = <span class=\"hljs-number\">0</span>;",
      "choices": [
        "A: 1",
        "B: 1 and 2",
        "C: 3 and 4",
        "D: 3"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nThe `const` keyword simply means we cannot _redeclare_ the value of that variable, it's _read-only_. However, the value itself isn't immutable. The properties on the `emojis` array can be modified, for example by pushing new values, splicing them, or setting the length of the array to 0."
    },
    {
      "id": 144,
      "title": "144. What do we need to add to the person object to get [\"Lydia Hallie\", 21] as the output of [...person]?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> person = {\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&quot;Lydia Hallie&quot;</span>,\n  <span class=\"hljs-attr\">age</span>: <span class=\"hljs-number\">21</span>\n}\n\n[...person] <span class=\"hljs-comment\">// [&quot;Lydia Hallie&quot;, 21]</span>",
      "choices": [
        "A: Nothing, object are iterable by default",
        "B: `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`",
        "C: `*[Symbol.iterator]() { yield* Object.values(this) }`",
        "D: `*[Symbol.iterator]() { for (let x in this) yield this }`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nObjects aren't iterable by default. An iterable is an iterable if the iterator protocol is present. We can add this manually by adding the iterator symbol `[Symbol.iterator]`, which has to return a generator object, for example by making it a generator function `*[Symbol.iterator]() {}`. This generator function has to yield the `Object.values` of the `person` object if we want it to return the array `[\"Lydia Hallie\", 21]`: `yield* Object.values(this)`."
    },
    {
      "id": 145,
      "title": "145. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">let</span> count = <span class=\"hljs-number\">0</span>;\n<span class=\"hljs-keyword\">const</span> nums = [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">3</span>];\n\nnums.<span class=\"hljs-title function_\">forEach</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">num</span> =&gt;</span> {\n\t<span class=\"hljs-keyword\">if</span> (num) count += <span class=\"hljs-number\">1</span>\n})\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(count)",
      "choices": [
        "A: 1",
        "B: 2",
        "C: 3",
        "D: 4"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nThe `if` condition within the `forEach` loop checks whether the value of `num` is truthy or falsy. Since the first number in the `nums` array is `0`, a falsy value, the `if` statement's code block won't be executed. `count` only gets incremented for the other 3 numbers in the `nums` array, `1`, `2` and `3`. Since `count` gets incremented by `1` 3 times, the value of `count` is `3`."
    },
    {
      "id": 146,
      "title": "146. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title function_\">getFruit</span>(<span class=\"hljs-params\">fruits</span>) {\n\t<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(fruits?.[<span class=\"hljs-number\">1</span>]?.[<span class=\"hljs-number\">1</span>])\n}\n\n<span class=\"hljs-title function_\">getFruit</span>([[<span class=\"hljs-string\">&#x27;🍊&#x27;</span>, <span class=\"hljs-string\">&#x27;🍌&#x27;</span>], [<span class=\"hljs-string\">&#x27;🍍&#x27;</span>]])\n<span class=\"hljs-title function_\">getFruit</span>()\n<span class=\"hljs-title function_\">getFruit</span>([[<span class=\"hljs-string\">&#x27;🍍&#x27;</span>], [<span class=\"hljs-string\">&#x27;🍊&#x27;</span>, <span class=\"hljs-string\">&#x27;🍌&#x27;</span>]])",
      "choices": [
        "A: `null`, `undefined`, 🍌",
        "B: `[]`, `null`, 🍌",
        "C: `[]`, `[]`, 🍌",
        "D: `undefined`, `undefined`, 🍌"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nThe `?` allows us to optionally access deeper nested properties within objects. We're trying to log the item on index `1` within the subarray that's on index `1` of the `fruits` array. If the subarray on index `1` in the `fruits` array doesn't exist, it'll simply return `undefined`. If the subarray on index `1` in the `fruits` array exists, but this subarray doesn't have an item on its `1` index, it'll also return `undefined`.\n\nFirst, we're trying to log the second item in the `['🍍']` subarray of `[['🍊', '🍌'], ['🍍']]`. This subarray only contains one item, which means there is no item on index `1`, and returns `undefined`.\n\nThen, we're invoking the `getFruits` function without passing a value as an argument, which means that `fruits` has a value of `undefined` by default. Since we're conditionally chaining the item on index `1` of`fruits`, it returns `undefined` since this item on index `1` does not exist.\n\nLastly, we're trying to log the second item in the `['🍊', '🍌']` subarray of `['🍍'], ['🍊', '🍌']`. The item on index `1` within this subarray is `🍌`, which gets logged."
    },
    {
      "id": 147,
      "title": "147. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">Calc</span> {\n\t<span class=\"hljs-title function_\">constructor</span>(<span class=\"hljs-params\"></span>) {\n\t\t<span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">count</span> = <span class=\"hljs-number\">0</span> \n\t}\n\n\t<span class=\"hljs-title function_\">increase</span>(<span class=\"hljs-params\"></span>) {\n\t\t<span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">count</span> ++\n\t}\n}\n\n<span class=\"hljs-keyword\">const</span> calc = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Calc</span>()\n<span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Calc</span>().<span class=\"hljs-title function_\">increase</span>()\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(calc.<span class=\"hljs-property\">count</span>)",
      "choices": [
        "A: `0`",
        "B: `1`",
        "C: `undefined`",
        "D: `ReferenceError`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nWe set the variable `calc` equal to a new instance of the `Calc` class. Then, we instantiate a new instance of `Calc`, and invoke the `increase` method on this instance. Since the count property is within the constructor of the `Calc` class, the count property is not shared on the prototype of `Calc`. This means that the value of count has not been updated for the instance calc points to, count is still `0`."
    },
    {
      "id": 148,
      "title": "148. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> user = {\n\t<span class=\"hljs-attr\">email</span>: <span class=\"hljs-string\">&quot;e@mail.com&quot;</span>,\n\t<span class=\"hljs-attr\">password</span>: <span class=\"hljs-string\">&quot;12345&quot;</span>\n}\n\n<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">updateUser</span> = (<span class=\"hljs-params\">{ email, password }</span>) =&gt; {\n\t<span class=\"hljs-keyword\">if</span> (email) {\n\t\t<span class=\"hljs-title class_\">Object</span>.<span class=\"hljs-title function_\">assign</span>(user, { email })\n\t}\n\n\t<span class=\"hljs-keyword\">if</span> (password) {\n\t\tuser.<span class=\"hljs-property\">password</span> = password\n\t}\n\n\t<span class=\"hljs-keyword\">return</span> user\n}\n\n<span class=\"hljs-keyword\">const</span> updatedUser = <span class=\"hljs-title function_\">updateUser</span>({ <span class=\"hljs-attr\">email</span>: <span class=\"hljs-string\">&quot;new@email.com&quot;</span> })\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(updatedUser === user)",
      "choices": [
        "A: `false`",
        "B: `true`",
        "C: `TypeError`",
        "D: `ReferenceError`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nThe `updateUser` function updates the values of the `email` and `password` properties on user, if their values are passed to the function, after which the function returns the `user` object. The returned value of the `updateUser` function is the `user` object, which means that the value of updatedUser is a reference to the same `user` object that `user` points to. `updatedUser === user` equals `true`."
    },
    {
      "id": 149,
      "title": "149. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> fruit = [<span class=\"hljs-string\">&#x27;🍌&#x27;</span>, <span class=\"hljs-string\">&#x27;🍊&#x27;</span>, <span class=\"hljs-string\">&#x27;🍎&#x27;</span>]\n\nfruit.<span class=\"hljs-title function_\">slice</span>(<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">1</span>)\nfruit.<span class=\"hljs-title function_\">splice</span>(<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">1</span>)\nfruit.<span class=\"hljs-title function_\">unshift</span>(<span class=\"hljs-string\">&#x27;🍇&#x27;</span>)\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(fruit)",
      "choices": [
        "A: `['🍌', '🍊', '🍎']`",
        "B: `['🍊', '🍎']`",
        "C: `['🍇', '🍊', '🍎']`",
        "D: `['🍇', '🍌', '🍊', '🍎']`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nFirst, we invoke the `slice` method on the fruit array. The slice method does not modify the original array, but returns the value that it sliced off the array: the banana emoji. Then, we invoke the `splice` method on the fruit array. The splice method does modify the original array, which means that the fruit array now consists of `['🍊', '🍎']`. At last, we invoke the `unshift` method on the `fruit` array, which modifies the original array by adding the provided value, ‘🍇’ in this case, as the first element in the array. The fruit array now consists of `['🍇', '🍊', '🍎']`."
    },
    {
      "id": 150,
      "title": "150. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> animals = {};\n<span class=\"hljs-keyword\">let</span> dog = { <span class=\"hljs-attr\">emoji</span>: <span class=\"hljs-string\">&#x27;🐶&#x27;</span> }\n<span class=\"hljs-keyword\">let</span> cat = { <span class=\"hljs-attr\">emoji</span>: <span class=\"hljs-string\">&#x27;🐈&#x27;</span> }\n\nanimals[dog] = { ...dog, <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&quot;Mara&quot;</span> }\nanimals[cat] = { ...cat, <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&quot;Sara&quot;</span> }\n\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(animals[dog])",
      "choices": [
        "A: `{ emoji: \"🐶\", name: \"Mara\" }`",
        "B: `{ emoji: \"🐈\", name: \"Sara\" }`",
        "C: `undefined`",
        "D: `ReferenceError`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nObject keys are converted to strings.\n\nSince the value of `dog` is an object, `animals[dog]` actually means that we’re creating a new property called `\"[object Object]\"` equal to the new object. `animals[\"[object Object]\"]` is now equal to `{ emoji: \"🐶\", name: \"Mara\"}`.\n\n`cat` is also an object, which means that `animals[cat]` actually means that we’re overwriting the value of `animals[\"[object Object]\"]` with the new cat properties.\n\nLogging `animals[dog]`, or actually `animals[\"[object Object]\"]` since converting the `dog` object to a string results `\"[object Object]\"`, returns the `{ emoji: \"🐈\", name: \"Sara\" }`."
    },
    {
      "id": 151,
      "title": "151. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> user = {\n\t<span class=\"hljs-attr\">email</span>: <span class=\"hljs-string\">&quot;my@email.com&quot;</span>,\n\t<span class=\"hljs-attr\">updateEmail</span>: <span class=\"hljs-function\"><span class=\"hljs-params\">email</span> =&gt;</span> {\n\t\t<span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">email</span> = email\n\t}\n}\n\nuser.<span class=\"hljs-title function_\">updateEmail</span>(<span class=\"hljs-string\">&quot;new@email.com&quot;</span>)\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(user.<span class=\"hljs-property\">email</span>)",
      "choices": [
        "A: `my@email.com`",
        "B: `new@email.com`",
        "C: `undefined`",
        "D: `ReferenceError`"
      ],
      "answer": "#### [](#answer-a)Answer: A\n\nThe `updateEmail` function is an arrow function, and is not bound to the `user` object. This means that the `this` keyword is not referring to the `user` object, but refers to the global scope in this case. The value of `email` within the `user` object does not get updated. When logging the value of `user.email`, the original value of `my@email.com` gets returned."
    },
    {
      "id": 152,
      "title": "152. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> promise1 = <span class=\"hljs-title class_\">Promise</span>.<span class=\"hljs-title function_\">resolve</span>(<span class=\"hljs-string\">&#x27;First&#x27;</span>)\n<span class=\"hljs-keyword\">const</span> promise2 = <span class=\"hljs-title class_\">Promise</span>.<span class=\"hljs-title function_\">resolve</span>(<span class=\"hljs-string\">&#x27;Second&#x27;</span>)\n<span class=\"hljs-keyword\">const</span> promise3 = <span class=\"hljs-title class_\">Promise</span>.<span class=\"hljs-title function_\">reject</span>(<span class=\"hljs-string\">&#x27;Third&#x27;</span>)\n<span class=\"hljs-keyword\">const</span> promise4 = <span class=\"hljs-title class_\">Promise</span>.<span class=\"hljs-title function_\">resolve</span>(<span class=\"hljs-string\">&#x27;Fourth&#x27;</span>)\n\n<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">runPromises</span> = <span class=\"hljs-keyword\">async</span> (<span class=\"hljs-params\"></span>) =&gt; {\n\t<span class=\"hljs-keyword\">const</span> res1 = <span class=\"hljs-keyword\">await</span> <span class=\"hljs-title class_\">Promise</span>.<span class=\"hljs-title function_\">all</span>([promise1, promise2])\n\t<span class=\"hljs-keyword\">const</span> res2  = <span class=\"hljs-keyword\">await</span> <span class=\"hljs-title class_\">Promise</span>.<span class=\"hljs-title function_\">all</span>([promise3, promise4])\n\t<span class=\"hljs-keyword\">return</span> [res1, res2]\n}\n\n<span class=\"hljs-title function_\">runPromises</span>()\n\t.<span class=\"hljs-title function_\">then</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">res</span> =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(res))\n\t.<span class=\"hljs-title function_\">catch</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">err</span> =&gt;</span> <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(err))",
      "choices": [
        "A: `[['First', 'Second'], ['Fourth']]`",
        "B: `[['First', 'Second'], ['Third', 'Fourth']]`",
        "C: `[['First', 'Second']]`",
        "D: `'Third'`"
      ],
      "answer": "#### [](#answer-d)Answer: D\n\nThe `Promise.all` method runs the passed promises in parallel. If one promise fails, the `Promise.all` method _rejects_ with the value of the rejected promise. In this case, `promise3` rejected with the value `\"Third\"`. We’re catching the rejected value in the chained `catch` method on the `runPromises` invocation to catch any errors within the `runPromises` function. Only `\"Third\"` gets logged, since `promise3` rejected with this value."
    },
    {
      "id": 153,
      "title": "153. What should the value of method be to log { name: \"Lydia\", age: 22 }?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> keys = [<span class=\"hljs-string\">&quot;name&quot;</span>, <span class=\"hljs-string\">&quot;age&quot;</span>]\n<span class=\"hljs-keyword\">const</span> values = [<span class=\"hljs-string\">&quot;Lydia&quot;</span>, <span class=\"hljs-number\">22</span>]\n\n<span class=\"hljs-keyword\">const</span> method = <span class=\"hljs-comment\">/* ?? */</span>\n<span class=\"hljs-title class_\">Object</span>[method](keys.<span class=\"hljs-title function_\">map</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">_, i</span>) =&gt;</span> {\n\t<span class=\"hljs-keyword\">return</span> [keys[i], values[i]]\n})) <span class=\"hljs-comment\">// { name: &quot;Lydia&quot;, age: 22 }</span>",
      "choices": [
        "A: `entries`",
        "B: `values`",
        "C: `fromEntries`",
        "D: `forEach`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nThe `fromEntries` method turns a 2d array into an object. The first element in each subarray will be the key, and the second element in each subarray will be the value. In this case, we’re mapping over the `keys` array, which returns an array which first element is the item on the key array on the current index, and the second element is the item of the values array on the current index.\n\nThis creates an array of subarrays containing the correct keys and values, which results in `{ name: \"Lydia\", age: 22 }`"
    },
    {
      "id": 154,
      "title": "154. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">createMember</span> = (<span class=\"hljs-params\">{ email, address = {}}</span>) =&gt; {\n\t<span class=\"hljs-keyword\">const</span> validEmail = <span class=\"hljs-regexp\">/.+\\@.+\\..+/</span>.<span class=\"hljs-title function_\">test</span>(email)\n\t<span class=\"hljs-keyword\">if</span> (!validEmail) <span class=\"hljs-keyword\">throw</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Error</span>(<span class=\"hljs-string\">&quot;Valid email pls&quot;</span>)\n\n\t<span class=\"hljs-keyword\">return</span> {\n\t\temail,\n\t\t<span class=\"hljs-attr\">address</span>: address ? address : <span class=\"hljs-literal\">null</span>\n\t}\n}\n\n<span class=\"hljs-keyword\">const</span> member = <span class=\"hljs-title function_\">createMember</span>({ <span class=\"hljs-attr\">email</span>: <span class=\"hljs-string\">&quot;my@email.com&quot;</span> })\n<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(member)",
      "choices": [
        "A: `{ email: \"my@email.com\", address: null }`",
        "B: `{ email: \"my@email.com\" }`",
        "C: `{ email: \"my@email.com\", address: {} }`",
        "D: `{ email: \"my@email.com\", address: undefined }`"
      ],
      "answer": "#### [](#answer-c)Answer: C\n\nThe default value of `address` is an empty object `{}`. When we set the variable `member` equal to the object returned by the `createMember` function, we didn't pass a value for address, which means that the value of address is the default empty object `{}`. An empty object is a truthy value, which means that the condition of the `address ? address : null` conditional returns `true`. The value of address is the empty object `{}`."
    },
    {
      "id": 155,
      "title": "155. What's the output?",
      "text": null,
      "code": "<span class=\"hljs-keyword\">let</span> randomValue = { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&quot;Lydia&quot;</span> }\nrandomValue = <span class=\"hljs-number\">23</span>\n\n<span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">typeof</span> randomValue === <span class=\"hljs-string\">&quot;string&quot;</span>) {\n\t<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&quot;It&#x27;s not a string!&quot;</span>)\n} <span class=\"hljs-keyword\">else</span> {\n\t<span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(<span class=\"hljs-string\">&quot;Yay it&#x27;s a string!&quot;</span>)\n}",
      "choices": [
        "A: `It's not a string!`",
        "B: `Yay it's a string!`",
        "C: `TypeError`",
        "D: `undefined`"
      ],
      "answer": "#### [](#answer-b)Answer: B\n\nThe condition within the `if` statement checks whether the value of `!typeof randomValue` is equal to `\"string\"`. The `!` operator converts the value to a boolean value. If the value is truthy, the returned value will be `false`, if the value is falsy, the returned value will be `true`. In this case, the returned value of `typeof randomValue` is the truthy value `\"number\"`, meaning that the value of `!typeof randomValue` is the boolean value `false`.\n\n`!typeof randomValue === \"string\"` always returns false, since we're actually checking `false === \"string\"`. Since the condition returned `false`, the code block of the `else` statement gets run, and `Yay it's a string!` gets logged."
    }
  ]

export default data