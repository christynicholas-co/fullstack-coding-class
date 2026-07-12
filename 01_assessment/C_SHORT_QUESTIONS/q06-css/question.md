### Question 06:

### Question A:
My paragraph tags in the index.html file are supposed to have a background color of aqua blue but instead I am getting white backgrounds. Please fix this and explain why the background colors were white instead (what CSS rule took place?). No more than a sentence needed for the explanation.

### Answer A:

<p> tag had repeat attributes in CSS, because code reads top to bottom last code read takes effect. so because the last p tag was given an attribute of background-color:white css applied the last one

### Question B: 
"Paragraph 2" is supposed to have a bold text but for some reason it is not. Please fix this and comment below what was happening that stopped the bold font from happening.

### Answer B:
because "Paragraph 2" text is in a div that has a class and an id, css has to specify where the "unique" id is at, in this case its in the class "custom" which is targeted with .custom and then #unique --> .class #id {}