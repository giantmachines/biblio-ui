# React Bootcamp

## Getting Started

Install dependencies and start the local server to get development up and running.

`npm i`

`npm start` which will open up on localhost on PORT 8080.

You can also start storybook development in tandem on a separate terminal tab with

`npm run storybook` which will open up on localhost on PORT 6006.

## Structure

The project is a `TypeScript` project for `react` + `redux` + `redux-saga` + `sass`, with `storybook` for component development. It removes the setup and configuration needed for all of these tools so that you can get up and running and start playing around in this environment.

## Why TypeScript

Because JavaScript is a dynamic language (variables do not need to be explicitly declared with an associated type like a number, string, boolean, etc.), this can often lead to runtime errors due to incorrect assumptions about the nature of the code. If you have ever encountered the error `TypeError: Cannot read property 'abc' of undefined.`, you have seen an instance where you were trying to access a property or method on a variable without a proper reference.

TypeScript helps to alleviate some of these issues by introducing types to JavaScript, making it similar to statically-typed languages like C, Java, Go, etc. It can help ensure correctness of code by providing additional documentation to the code and it allows developers to have greater confidence when refactoring existing code. TypeScript files end with `.ts` or `.tsx` and they are compiled down to JavaScript before being bundled. It's integration with editors and additional developer tooling is robust and you will get compilation errors during development if something is incorrectly typed.

Some basic examples of TypeScript:
Typing variables
```ts
  // note the `: <type>` syntax after the variable name
  let firstName: string = "Bobby";
  let nameLength: number = firstName.length;
  let isActive: boolean = false;
  // let names: Array<String> = ["A", "B", "C"] would also work
  let names: string[] = ["A", "B", "C"];
```

Typing functions
```ts
// here the two input parameters are required to be of type `number`
// the output of the function is required to be a `number` as well
// TS makes no distinction between integers, floats, or doubles, it only has the `number` type
// if you were to try to call this function passing in booleans, strings or other types,
// you would get a compilation error.
function multiply(a: number, b: number): number {
  return a * b;
}
```

In addition to these basic types, TypeScript has support for the same concepts seen in other statically typed languages like interfaces, generics, enums, type unions, type intersections, type guards, type inferences, etc. One good use case for interfaces is to help narrow down the types expected by a React component's Props and State.

Typing Props and State
```ts
interface Props {
  firstName: string;
  handleClose: () => void; // can type functions inline to ensure correct usage
}

interface State {
  isActive: boolean;
}

class MyComponent extends React.Component<Props, State> {
  ...
}
```
For more information on TypeScript, please refer to the [TypeScript Morning Bytes](https://github.com/giantmachines/morning-bytes/tree/master/12-intro-to-typescript) as well as the official [TypeScript Documentation](https://www.typescriptlang.org/docs/home.html). Additionally, you can check out the [TypeScript Playground](https://www.typescriptlang.org/play) to experiment in an online IDE (be sure to check out the examples). For help with typing React and Redux components, you can refer to the [React & Redux Typing Guide](https://github.com/piotrwitek/react-redux-typescript-guide)

Note: as an escape-hatch, TypeScript also provides the `any` type, which removes the restrictions on type safety. It is not recommended to use the `any` type (unless there are special circumstances) as this eliminates the benefits of using TypeScript in a project. A more type-safe alternative to the `any` type is the `unknown` [type](https://mariusschulz.com/blog/the-unknown-type-in-typescript) which enforces checks to be performed before using the associated variable/output.

## Why Storybook

Storybook is a development environment for UI components. It allows developers the ability to build components in isolation without requiring the develoment/staging/production environment of the application to be running.

For example, if you are building out a component that had css animations/transitions and this component is hidden behind multiple pages (login screen, routes, etc), it would be more time consuming to fire up the entire app and navigate to the desired page to see the component that you are trying to build out.

Storybook gives you the ability to run the storybook environment, which is a catalog of your projects' UI components and to build out components ("stories" in storybook lingo) in isolation so that you can quickly iterate and test your components. It gives you the ability to mock out the props being passed into your components through [storybook actions and knobs](https://storybook.js.org/docs/addons/introduction/) (think of these as a way to help mimic interactivity with your components). It is a helpful tool for developers but it is also helpful for designers, product managers, and other stakeholders of the project to get an insight into how a component will look and function.

You can see a sample story in action by referring to the `DetailsPage.stories.tsx` story and running `npm run storybook`.

For more information about storybook, please refer to the [Storybook Documenation](https://storybook.js.org/docs/basics/introduction/) and the [Storybook Tutorial](https://www.learnstorybook.com/) To see some example storybook catalogs that have been created by others, you can browse through the [demo section](https://storybook.js.org/docs/examples/).

## Ideology

Some things to keep in mind while building out the app.

- Component modularity
- Seperation of concerns
- Fully typed (no `any` types)
- BEM methodology in SASS

## Task

Open ended right now. Feel free to explore and come up with your own designs and app you want to build.

