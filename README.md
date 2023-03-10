# Advanced React Notes

Notes from [Scrimba's course Advanced React](https://scrimba.com/learn/react), by Bob Ziroll

## sources

+ [React Prop Types](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)
+ [composition > inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA)
+ [great explanation of HOCs](https://www.richardkotze.com/coding/understanding-higher-order-components)
+ [React docs on HOCs](https://reactjs.org/docs/higher-order-components.html)
+ [V school writeup on HOCs](https://coursework.vschool.io/hocs/)
+ [Before you use Context](https://reactjs.org/docs/context.html#before-you-use-context)
+ [React Context Caveats](https://reactjs.org/docs/context.html#caveats)
+ [React Context and re-renders: React take the wheel](https://medium.com/@ryanflorence/react-context-and-re-renders-react-take-the-wheel-cd1d20663647)

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

## `shouldComponentUpdate()`

+ lifecycle method on class components
+ allows you to determine if a component should update or not
+ receive the upcoming props and state so you can compare them against current props and state
+ return `true` for "yes", `false` for "no"
+ do not do deep equality checks in here

## `React.PureComponent`

+ it's an alternative to `React.Component`
+ automatically implements `shouldComponentUpdate()` for shallow props and state comparison
+ disallows using `shouldComponentUpdate()` manually
+ skips rendering all children in the tree automatically, so they must be "pure" as well
+ generally preferred over `shouldComponentUpdate()`

## `React.memo()`

+ it's like a `React.PureComponent` to use in function components
+ higher-order component built by React (released in v16.6)
+ it only compares `prevProps` and `nextProps` (no state checking)
+ it's possible to optionally implement your own checking function to determine if it should use the memoized result
  + this function is _kind of like_ `shouldComponentUpdate()`, except it should return `true` if the props are equal and `false` if they aren't. this is effectively the opposite approach of `shoulComponentUpdate()`, which returns `true` if the component should re-render (i.e. props are different).

## React Context

+ React Context solves the prop-drilling situation
+ Context provide a way to pass data through the component tree without having to pass props down manually at every level

### caveats

+ do not use context just to avoid prop drilling a layer or two down
+ do not use context for state that should just be kept locally (e.g. forms)
+ wrap the Provide around the lowest common parent in the tree
+ passing object as value, watch performance and refactor if necessary
