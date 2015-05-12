# dry-animate

> DRY scss version of Animate.css

## Install:

```
bower install dry-animate
```

## Use:

```scss

// Declare the used animations as a list.
// Can be single animations (fadeIn), groups (attention_seekers) or simply all
// Default: all
$da-animations: (attention_seekers,fadeIn);

// The library now imports the right keyframes for you

// Use the mixin
// If you forget to declare valid $da-animations for the animations you are using, the mixin will throw an error
body {
  @include animate(fadeIn, $duration: $da-duration, $delay: 0, $iterations: 1);
}

```

## License:

The MIT License (MIT)

Copyright © **2015 Felix Spöttel**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
