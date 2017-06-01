# Web Fundamentals Week 4 Lecture 2

## Front-End Frameworks && Responsive Web Design

### Lecture Outline
- Intro
  - Admin:
    - Working on YBs

##### Responsive Web Design
- So, we are really good at making web pages that are 970px wide!
- But what about the rest of the internet?
  - Tablets, Mobile, resizing, multiple browser windows, there are so many different screen sized! Does my phone even have 970 pixels?!
  - Design need to be able to respond to the user resizing/moving the browser
  - From a business standpoint, use is heavily tilting(ed) towards non-desktop use, so it makes sense to adapt to users not using desktop-sized interfaces
- Has lead to a repsonsive, mobile-first design philosophy
    1. Mobile First Design
    2. Responsive Grid-Based Layout
    3. Sizing is relative
- So how do we do it?
  - CSS allows us to get information about the displaying device. CSS2 would tell you what the device was, but CSS3 is a little more flexible, it can give you display relevant information like screen width!
    - With this information we can set up a pseudo-if statement in CSS where we apply a different set of CSS rules depending on the situation!
    - Breakpoints: Widths to switch behavior at.
      - <480px  - Mobile
      - 480px - 1023px  - Tablet
      - \>1024px - Desktop
  - >Demo detecting width

  - Okay, so we design for mobile first and can resize, how do we keep things from going insane?
  - The Grid! dunh, dunh, duuunh! Allows relative widths in an easyily readable way
    - Grid is a way of keeping things appropriately as width changes. something that takes 25% of width on desktop might take 75% of width on tablet and 100% width on phone! Grid system allows us to say "on a desktop, make this 4 columns wide, tablet 6, phone 10" otherwise you have to change your CSS for every page.
      - Materialize Grid has good example of why you do this...
    - Vocab:
      - container: controls whole grid's width
      - row: keeps a row's content in a row/prevents overflow
      - column: columns to denote widths
      - gutter: space 'twixt columns


  - Okay so grid makes sense, widths make sense, what else?
  - Content! Images and text, right? how to handle that?
    - Text, we use rems! no more px or pt, need things to be relative and rem is only relative measure we have.
      - rem is relative to root element. Think of it like a mulitplier. 3 rem is 3 times the size of the root elements version
      - em is relative to parent elements
      - A little Decision Tree
        - em
          - font sizes, sizing images, paddings/margins
        - %
          - column/container width
        - rem
          - font sizes
          - paddings and margins for fonts
        - px
          - media queries
          - paddings/margins for divs


##### CSS Frameworks
- CSS Frameworks
  - What if we got tired of re-doing CSS every time?
  - We use a CSS reset, why not moar?
  - demo a dinky class based CSS sheet?
