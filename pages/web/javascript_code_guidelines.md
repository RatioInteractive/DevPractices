# JavaScript Coding Guidelines

These are guidelines, not rules, but a typical Web application at Ratio should follow most of these.

## Casing
*	Functions:			camelCase
*	Properties:			up to lead (as long as use is consistent. camelCase is most common.)
*	Constants:			ALL_CAPS (typically declared with var)
*	Class Names (constructors):	PascalCase

## Syntax

1. Braces
	* Need these on if/else conditionals.  Opening brace needs to be on same line not the following line.  Important for script minification.

2. Equality & Identity Operators (== vs ===)
	* The equality operator (==) does type coercion while the identity operator (===) does not.  Use identity unless absolutely necessary otherwise to avoid "truthy" and "falsey" operations.

	##### Examples
	* For value types (numbers):
		* a === b returns true if a and b have the same value and are of the same type
	* For reference types:
		* a === b returns true if a and b reference the exact same object
	* For strings:
		* a === b returns true if a and b are both strings and contain the exact same characters

3. Function Variables
	* Variables should be declared at the top of functions to avoid problems caused by variable “hoisting”. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

## Namespaces
All code should be written to prevent pollution of global namespace.

One approach is the Revealing Module Pattern, but there are many approaches [JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/)

	(function(){
		var doStuff = function (){
			// do something
		};
		function doOtherStuff () {
			// do something else
		}

		return {
			doStuff : doStuff
			doOtherStuff : doOtherStuff
		}
	})();


## Golden Rule of Code
Write the simplest, prettiest, most easy-to-understand code as you can while still getting the job done. Avoid hacks and shortcuts if they lead to poorly-maintainable code.

## References

