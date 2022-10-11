Anchors
    \A — Start of string
    \Z — End of string
    \b — Word boundary
    \B — Not word boundary
    \< — Start of word
    \> — End of word
    | — Matches previous OR next character
    ^Here – Matches any string that begins with 'Here'
    finish$ - Matches any string that ends with 'finish'
    ^Here finish$ - Matches any string that begins with 'Here' and ends with 'finish'
    here – Matches any string with 'here' in the string

    Keep in mind regex is case sensitive. If you were to type 'Here' instead of 'here', it would only find use of 'Here' that is capitalized.

# ##################################################
Quanitifers
    xyz* - Matches strings which have xy in them, but not necessarily z.
    xyz+ - Matches strings which have xy followed by at least one z.
    xyz? - Matches strings which have xy and either zero or one z.
    xyz{2} - Matches strings which have xy followed by exactly two z.
    xyz{2, } - Matches strings which have xy followed by two or more z.
    xyz{2, 8} - Matches strings which have xy followed by at least 2 z, and up to eight z.
    x(yz)* - Matches strings which have x followed by zero or more uses of yz.
    X(yz){2, 8} - Matches strings which have x followed by two through 8 uses of the sequence yz.

As you see, our regex examples are starting to get a little more complex – almost mathematical! Now, let's get into operators, which can expand on your regex parsing quite a bit.

# ##################################################
Operators

    x(yz) - Matches strings where x is followed by either y or z.

With the 'or' operator, you can start to capture sequences that may be slightly off. Let's say in a body of text, you were discussing desserts. Your fingers were moving too fast, and you were typing 'dessetrs' half the time; instead of reading through it all, you could use the 'or' operator to discover your mistakes: e(rt).

The problem here is you'd also find a ton of other words. In the paragraph above, you'd get 'operator' and 'were' along with many other words. We can solve that in just a minute. 

First, another regex operator:

    x[yz] Matches strings where x is matched, but not y and z.

Using this would return a lot of matches, too. It will find everything in the aforementioned 
paragraph which includes 'et' or 'er' – and that includes your 'dessetrs' error word, as well 
as 'desserts' and other words like 'discover.'

So how can we find the error word, and block the rest out?

# ##################################################
Character Classes

    \d - Matches a single character that is a digit.
    \w - Matches a single character that is a word character (no numbers).
    \s - Matches any whitespace character.
    . - Matches any character.
    \t – Matches any tab.
    \r – Matches any return.