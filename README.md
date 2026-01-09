# CSS Selectors

**Course:** COMP1054 – Web User Interface Design
**Topic:** CSS Selectors

This README summarizes the content covered in the lesson slides about **CSS Selectors**, including definitions and practical examples. It is intended as a study and reference guide.

---

## 1. Named Selectors

Named selectors target HTML elements directly by their tag name.

**Example:**

* `p` → Selects any and all `<p>` elements.

---

## 2. ID Selectors

ID selectors target a single element using the `id` attribute. IDs must be unique within a page.

**Examples:**

* `#intro` → Selects the element with `id="intro"`.
* `p#intro` → Selects the `<p>` element with `id="intro"`.

---

## 3. Class Selectors

Class selectors target elements using the `class` attribute. Classes can be reused on multiple elements.

**Examples:**

* `.error` → Selects any element with `class="error"`.
* `label.error` → Selects any `<label>` element with `class="error"`.

---

## 4. Contextual (Descendant) Selectors

Contextual selectors target elements based on their position within the HTML structure.

**Examples:**

* `section h1` → Any `<h1>` inside a `<section>`.
* `header h2 em` → Any `<em>` inside an `<h2>` inside a `<header>`.

---

## 5. Grouped Selectors

Grouped selectors allow the same styles to be applied to multiple elements.

**Example:**

* `h1, h2, h3` → Selects all `<h1>`, `<h2>`, and `<h3>` elements.

---

## 6. Pseudo-Classes

Pseudo-classes define a special state of an element.

**Common link pseudo-classes:**

* `a:link` → Unvisited link
* `a:visited` → Visited link
* `a:hover` → Mouse pointer over the link
* `a:active` → Link being clicked
* `a:focus` → Link that currently has focus

---

## 7. Structural Pseudo-Classes

Structural pseudo-classes target elements based on their position in the document structure.

### `:nth-child()`

* `li:nth-child(4)` → The 4th `<li>` element
* `li:nth-child(4n)` → Every 4th `<li>`
* `li:nth-child(4n+1)` → Every 4th `<li>`, offset by 1
* `li:nth-child(odd)` → Every odd `<li>`

### `:nth-of-type()`

* `p:nth-of-type(3)` → The 3rd `<p>` element
* `p:nth-of-type(3n)` → Every 3rd `<p>`
* `p:nth-of-type(3n+2)` → Every 3rd `<p>`, offset by 2
* `p:nth-of-type(odd)` → Every odd `<p>`

### First / Last Child

* `p:first-child` → First `<p>` child of a parent
* `p:last-child` → Last `<p>` child of a parent

### First / Last of Type

* `h3:first-of-type` → First `<h3>` among siblings
* `h3:last-of-type` → Last `<h3>` among siblings

### Only Child

* `h2:only-child` → An `<h2>` that is the only child of its parent
* `p:only-child` → A `<p>` that is the only child of its parent

### Only of Type

* `q:only-of-type` → A `<q>` that is the only `<q>` child

### Empty

* `td:empty` → A `<td>` element with no children

---

## 8. Negation Pseudo-Class

The negation pseudo-class excludes specific elements from selection.

**Example:**

* `*:not(a)` → Selects any element that is NOT an `<a>`.

---

## 9. Pseudo-Elements

Pseudo-elements target specific parts of an element.

### First Line / First Letter

* `p::first-line` → First line of a `<p>` element
* `p::first-letter` → First letter of a `<p>` element

### Before / After

* `h1::before { content: "Note- "; }` → Inserts content before `<h1>`
* `h1::after { content: "!"; }` → Inserts content after `<h1>`

---

## 10. Combinators

Combinators define relationships between selectors.

### Child Combinator

* `body > p` → `<p>` elements that are direct children of `<body>`

### Sibling Combinators

* `h2 + p` → `<p>` immediately following an `<h2>` (adjacent sibling)
* `h2 ~ p` → `<p>` elements that share the same parent as `<h2>` (general sibling)

---

## 11. Attribute Selectors

Attribute selectors target elements based on attributes and their values.

### Attribute Exists

* `a[href]` → Any `<a>` with an `href` attribute

### Attribute Value Equals

* `p[title="intro"]` → `<p>` with title exactly equal to `intro`

### Attribute Value Contains

* `a[href*="georgiancollege"]` → `<a>` whose `href` contains the string

### Attribute Value Begins With

* `a[href^="http://"]` → `<a>` whose `href` starts with `http://`

### Attribute Value Ends With

* `a[href$=".pdf"]` → `<a>` whose `href` ends with `.pdf`

### Attribute Value Includes (Space-Separated)

* `label[class~="error"]` → `<label>` whose class list includes `error`

---

## Summary

CSS selectors allow precise targeting of HTML elements based on type, class, ID, attributes, structure, and state. Mastering selectors is essential for writing clean, efficient, and maintainable CSS.

---

