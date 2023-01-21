# Advanced React Notes

Notes from [Scrimba's course Advanced React](https://scrimba.com/learn/react), by Bob Ziroll

## sources

+ [React Prop Types](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)
+ [composition > inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA)
+ [great explanation of HOCs](https://www.richardkotze.com/coding/understanding-higher-order-components)
+ [React docs on HOCs](https://reactjs.org/docs/higher-order-components.html)
+ [V school writeup on HOCs](https://coursework.vschool.io/hocs/)

## reusability

+ DRY: don't repeat yourself
+ inheritance: classes and subclasses / and composition: small chunks of code
+ it's preferable composition over inheritance
+ components w/props
+ children
+ high-order components
+ render props

## high-order components

+ high-order functions take other functions as arguments
+ high-order component takes a component as its first argument and returns a new component that wraps the given component, providing extra capabilities to it.

```js
const upgradedComponent = withSuperPowers(Component)
export default upgradedComponent

// it's a convention starts with HOC "with"
const componentWithToggle = withToggle(Component)
export default componentWithToggle
```

## React's tree rendering

+ React recursively renders components down one branch until there are no more to render
+ changes to state or props in any component will recursively re-render down the remaining tree whether those components have changed or not
+ `shouldComponentUpdate()`, `React.PureComponent`, and `React.memo()` are tools to help fix this problem
