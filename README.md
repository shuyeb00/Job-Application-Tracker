1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById finds one specific item by its unique ID, while getElementsByClassName grabs a list of all items with a certain class. querySelector finds the first thing matching any CSS-style selector, and querySelectorAll finds every single one of them.

2. How do you create and insert a new element into the DOM?

Answer: First make the element using document.createElement('tag') and then add using appendChild() or prepend().

3. What is Event Bubbling? And how does it work?

Answer: Event Bubbling is when an event (like a click) starts at the exact element we clicked and then "bubbles" up to its parents, grandparents, and all the way to the top of the document.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is a trick where we put a single listener on a parent element to handle clicks for all its current (and future) children. It’s useful because it saves memory and means we don't have to manually add new listeners every time we add a new item to a list.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() stops the browser's default behavior, like a link opening or a form submitting, while stopPropagation() stops an event from bubbling up to its parents.
