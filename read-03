# Responsive Web Design (Read 3)
* Building websites for all users. Mobile internet usage is growing and if trends continue, it will surpass desktop internet usage within the year.

## Responsive Overview
* Responsive web design(RWD) is the practice of building a website suitable to work on every device and every screen size, no matter how large or small, mobile or desktop.
* The RWD term was coined, and largely developed, by Ethan Marcotte. 

## Responsive vs. Adaptive vs. Mobile
1. Responsive - generally means to react quickly and positively to any change, while adaptive means to be easily modified for a new purpose or situation, such as change.
    * Website will change based on different factors, such as viewport width.
1. Adaptive - websites are built to a group of preset factors.
1. Mobile - generally means to build a seperate website commonly on a new domain solely for mobile users.

## Flexible Layouts
* RWD is broken down into 3 main components, including flexible layouts, media queries, and felxible media. 
    * Flexible layouts is the practice of building the layout of a website with a flexible grid that can resize to any with.
    * When the layout gets too small, or too large, text may become illegible and the layout may begin to break. In this event, media queries can be used to help build a better experience.

## Media Queries
* Media Queries were built as an extension to media types commonly found when targeting and including styles. 
* Initialize Media Queries by using the @media rule inside of an existing style sheet, importing a new style sheet using the @import rule, or by linking to a seperate style sheet from within the HTML document.

## Mobile First
* This approach includes using styles targeted at smaller viewports as the default styles for a website, then use media queries to add styles as the viewport grows. (increases bandwidth)


# Floats
* Float is a CSS positioning property.
* Floated elements remain a part of the flow of the web page.
    * Four valid values for float
        1. Left
        1. Right
        1. None - default
        1. Inherit - will assume float value from that elements parent

* Use the 'clear' property to keep an element from moving up adjacent to the float like the float desires, but will move itself down past the float.

## Problems with floats
* Pushdown - is a symptom of an element inside a floated item being wider than the float itself.
* Double Margin Bug - Dealing with IE6, if you apply a margin in the same direction as the float, it will double the margin. (quick fix - (display:inline))
* 3px Jog - is when text taht is up next to a floated element is mysteriously kicked away by 3px like a weird forcefield around the float. (quick fix - use bottom padding on the parent instead)
* Bottom Margin Bug - is when if a floated parent has floated children insite it, bottom margin on those children is ignored by the parent. (quick fix - using bottom padding on the parent instead)

## Dont Overthink it Grids
* Vast majority of websites use grids.
* The hardest part about grids is gutters. 
* First step
    1. use box-sizing: border-box;
* Second step
    1. applying a fixed padding to the right side of all columns except the last one.

## Outside Gutters
* First step
    1. add left padding to the grid parent
* Second step
    1. restore the right padding to the last column

## CSS Floats Explained By Riding An Escalator
* Article had escalator images and context to show how floats work in CSS
* Describes floats: Left and Right, and the clear property.
