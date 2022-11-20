# Hacker News Redesign in React

This project fetches data from Hacker News's [Algolia API](https://hn.algolia.com/api), processes it, and displays it according to a prompt design. Features included are

- displaying and linking to HN articles, comments etc
- light/dark theme toggle
- "saving" items in local session state
- paginating through more results

It was started using Create React App, uses ReactQuery for fetching, Redux for appstate management, Styled Components for styling, and React Router for routing. Computation and data munging is done with fp-ts, which might be a little unfamiliar, but is like a very well-typed Ramda or lodash.

## Prerequisites

Node.js >= 16
Yarn (This project uses yarn@3, but the project should install it locally for you if you're on an older version)

## Install Packages

```
yarn install
```

## Start

```
yarn start
```

App will be available at port 3000

## Thoughts and Further Developments

I went overboard, since I was having fun! :D I think the prompt could have been accomplished with a less complicated and scalable approach (e.g. I wanted to try out ReactQuery, but a sufficient solution for this scale of project could have been managed with fetch and some local state). However, I was somewhat treating it as though I was setting up an application that I'd want to continue to work on, as opposed to a throwaway. I made a few choices I didn't love, which I documented in comments in the code.

Testing here is a little sparse, and is only included on the computational elements of the app (mostly because I didn't want to mock the query service). But I think component tests could be added here quite easily.

### Known Issues: Duplicate Items

This implementation uses React Query's infinite pagination feature. React Query provides a fantastically easy method of fetching, caching, refetching, etc. The issue with using this tool for this particular project is that because the data reorders and shifts so often, items will get pushed down to the second page before they've been invalidated from the first. This leads to duplicate items in the list. An easy way to manage this would be to do actual paging so that items shifting from one page to the next wouldn't ultimately matter.

### Improvements to the Design

#### Accessibility Concerns

Were I actually implementing this design in a work environment, I would be talking to my designers. The text in much of the page is too tiny and light-colored to be easily read by users with visual impairments. I would also want to test some of the contrast of the accent color on white.

#### Enhancements Included

- Loading component and (minor) error feedback to user
- Hover and disabled states
- Responsiveness (basic)


![2022-11-20 14 34 55](https://user-images.githubusercontent.com/5266362/202922402-4d678bb6-d438-43c0-acf5-0b20a53a661a.gif)
