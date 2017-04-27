# Weekend Video Outline/Script/Notes


# Advanced CSS Selectors

## Outline
- Introduce the advanced Selectors
  - attribute
    -['prop=value']
  - pseudo-class
    - special states of an element
    -:nth-child(n)
  - pseudo-element
    - like an element but not
    - ::first-letter
- Weights of trickier selectors
  - type-selectors + pseudo-elements weight=1
  - class selectors, attribute selectors, pseudo-classes weight=10
  - IDs weight=100
  - !important
  - inline

  - *,+,' ',~,> :not() do not impact specificity
    - :not()'s content _does_ get weighted
