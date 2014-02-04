Android Coding Guidelines
===
These are guidelines, not rules, but a typical Android application at Ratio should follow most of these.

Namespaces
---
Classes should be organized into separate namespaces based on the overall "type" of the class, or sometimes based on task if a set of classes are tightly coupled. Generally the following namespaces work well in Android apps:

 * com.organization.app.activities (Activity classes)
 * com.organization.app.adapters (data adapters)
 * com.organization.app.database (database-related classes
 * com.organization.app.dialogs (dialog classes)
 * com.organization.app.domain (domain objects, often used throughout app and sometimes persisted in the database)
 * com.organization.app.fragments (Fragment classes)
 * com.organization.app.services (Services or classes that behave like a service)
 * com.organization.app.util (utility classes)
 * com.organization.app.views (Views)
 
Indentation
---
 * Always use spaces; 4 spaces per indent.
 * Indent case statements after a switch.
 * You can use Control-I (Windows) or Cmd-I (Mac) to auto-indent a selection of code.

Imports
---
Generally you should remove unused imports in a class before you commit.

Braces
---
For Java, use the K&R style of indentation, for example:

     if (true) {  
        doSomething();  
    } else {  
        doSomethingElse();  
    }
Note that the else should be on the same line as the closing bracket.
 
Whitespace
---
 * Always use a space after for, if, while, else, else if, etc.
 * Always use a space around mathematical operands or assignments.
 * Always use a space after a comma, question mark, or colon.
 * Don't use a space after method names when calling or declaring them.

Correct:

    for (int i = 0; i < 100; i++) { 
        int r = 5 * i + 1;
        callFunction(r, i);

Wrong:

    for(int i=0;i<100;i++){
        int r=5*i+1;
        callFunction ( r,i ) ;
 
Comments
---
 * Typically prefer // style comments preceding the code to comment on
 * Use /\* \*/ comments for javadoc when needed
 * Always capitalize the first letter after starting a // comment
 * Always use a space after the //
 * It can be helpful, visually, to write comments to "corral" code into logical blocks
 * Favor over-commenting your code, especially when it's not obvious what it's doing
 * However, if you have to over-comment especially difficult-to-understand code, that's a sign that the code is too complicated. Consider refactoring.
 * No profanity or client-bashing!
 
Naming constants, variables, methods, classes
---
 * public class ClassesShouldBeUppercasedOnWords { }
 * boolean variableNamesShouldBeCamelCased = true;
 * public boolean methodsShouldBeCamelCased() { return true; }
 * private static final boolean CONSTANTS_SHOULD_BE_UPPERCASE = true;
 
Sorting variables and methods
---
 * Constants should always appear at the top of a class, public before private
 * Member variables should always appear at the top of a class, after constants, public before private
 * Inner classes should generally be placed at the bottom of the containing class' implementation
 * Method sorting is a bit trickier; generally they should be sorted alphabetically EXCEPT
   * For derived classes (especially Activities), put base class methods first.
   * public methods should go next
   * Then try to group interface methods via // Interface methods -> // End Interface methods
   * private helper methods should go last
   
Ternary Operator
---
 * Use it only if it makes the code cleaner and easier to understand; otherwise just use if/else
 
Layout Design & XML
---
 * All dimensions should be named and exist under values/dimens.xml (or the appropriate values- folder).
 * All colors should be named and exist under values/colors.xml.
 * Generally you should auto-format your XML files using Ctrl-Shift-F (Windows) or Cmd-Shift-F (Mac).
 * When two or more elements (buttons, text views, etc) share a certain "style", you should create a style for these elements in values/styles.xml.
 * If a layout XML is too large and complicated, consider extracting portions of it to another XML file and using &lt;include&gt; directives.
 * When designing for multiple form factors, generally you should use values/ for phones, values-sw533dp/ for 7" tablets, and values-800dp/ for 10" tablets to separate your layouts, assuming that the minimum API version supports these qualifiers.
 * Try to simplify your layouts as much as possible.
 
Threading
---
 * Never run long operations (network calls, disk access, etc) on the UI thread; use an AsyncTask or a Service using a background thread instead.
 * Use the synchronized keyword as appropriate to protect class state when it could be accessed by multiple threads concurrently.
 * Use runOnUiThread() when needed to make UI changes when not on the UI thread.
 
Golden Rule of Code
---
 * Write the simplest, prettiest, most easy-to-understand code as you can while still getting the job done. Avoid hacks and shortcuts if they lead to poorly-maintainable code.

References
---
[Android Source Code Style Guidelines](http://source.android.com/source/code-style.html)
