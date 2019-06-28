# JS Debug 1

Checkout the branch debug_javascript_1.
Lauch the project.

There is a bug ! Instead of seeing our glorious pokedex, we are seeing an hideous error message. Let's fix it.

## Don't panic

New project and already a bug. Keep cool, drink water, take your time.

## Seek the logs

Happily, this project comes from create-react-app, and the logs are directly visible in our navigator. Great! We can see them too in our terminal where we lauched our yarn start.

## Reproduce the error to see the log in real time

When you launched the application, the bug was already there. **Refresh the page**. It's happening again. We know how to reproduce!

## Read the error message, from left to right, from top to bottom

What are we seeing in the error message ?

```
Failed to compile.
```

Okay, that is the error message, telling us what is failing in our system. Here: the code could not compile. This will help us fix the bug when we are able to locate it.

```
./src/pages/Home/Home.tsx
```

This indicates us where the bug is located. So in our Javascript, file `src/pages/Home/Home.tsx`. Let's open this file, this is where we will work.

```
Line 29:
```

This is even more precise: we have the line of the bug. Let's put our cursor on the line 29 of our file `src/pages/Home/Home.tsx`.

```
'FormattedMessage' is not defined
```

The error message content. Our Javascript cannot deal with this `FormattedMessage` it doesn't know.
We see line 29 that we render a component `<FormattedMessage id="home.pokedex" />`. Okay, the bug comes from here! This component is not defined.

```
react/jsx-no-undef
```

The last part of the error message. It seems to be more technical.
Lets look that up on the internet. We end up on [this eslint rule page](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md). This **confirms** what we thought: our `FormattedMessage` is missing, and eslint is going all mad about it.

## Solve the bug if the cause is trivial

Here, the cause is trivial. Let's import this `FormattedMessage` component with the following line on top of our Home file:

```
// src/pages/Home/Home.tsx

import { FormattedMessage } from 'react-intl';
```

## Bug solved !

We can see that our application is working again! You solved the bug. Lets try to debug a more complex one.
