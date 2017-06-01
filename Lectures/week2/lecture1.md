# Breaking Down an Image, CSS tricks + more properties

## Learning Goals
1) Feel good breaking down an image
- Understanding of display, box model, semantic tag

2) CSS position property
- Understand uses
- static
  - normal
- relative
  - relative to where they used to be
- fixed
  - relative to viewport
- absolute
  - relative to closest positioned ancestor(or html)

3) CSS functions
- calc()
- attr()
- gradients


## Lecture Outline
- Admin
  - Thanks for responses this weekend!
  - Walkthroughs this week:
    - Wed 2pm Portfolio
    - Thr 4pm Algos w/Nick
  - YB is coming.
  - github org make a repo and share stuff :]
- Context
  - previously: HTML + CSS + CSS weekend video
  - Today: Finish up CSS selectors + position property
  - Next: Thursday is O.H.
  - Next Week: JAVASCRIPT. we goin' hard.
- CSS STUFF!
  - Selector Recap:
    - Weights
      inline = 1000
      id = 100
      class = 10
      element = 1
      * = 0
      pseudo elements = 1
      pseudo classes = 10
        except :not(), only stuff in () counts
  - breaking down images
    - semantic elements
      - http://html5doctor.com/downloads/h5d-sectioning-flowchart.png
    - elements are rectangles
      - LEGO model
    - b0x model
  - CSS position property
    - static
      - normal
    - relative
      - relative to where they used to be
    - fixed
      - relative to viewport
    - absolute
      - relative to closest positioned ancestor(or html)
  - CSS functions
    - calc()
    - attr()
      a:after {
        content: " (" attr(href) ")";
      }
    - gradient()
      - direction | color - stop | ...
