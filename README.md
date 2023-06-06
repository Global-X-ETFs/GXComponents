# GXComponents

Component library for Global X ETF web applications

## Usage 

**Install tailwind by following this guide:**
##
https://tailwindcss.com/docs/guides/nextjs
##
Or if not using NextJS, check out their other installation procedures

**Install GXComponents using:**

`npm i @global-x-etfs/gxcomponents`

**Add the below to your tailwind.config.js file:**


	 // tailwind.config.js
	 module.exports  = {

		content: [
			...
		    require("path").join(
				require.resolve("@global-x-etfs/gxcomponents"),
				"../**/*.{html,js,cjs,ts}"
			),
			...
		]

## Current Components

 - Button  

  

# Contributing

## Built With...

 - https://github.com/moishinetzer/pbandj - Tool to create a component library
 - https://tailwindcss.com/ - A lightweight css framework
 - https://www.typescriptlang.org/ 
 - https://storybook.js.org/ - Library for displaying and testing UI components 
 - https://cva.style/docs - Allows us to create stuff like primary/secondary default options, different sizes etc...

## Server Side Rendering

We want as much SSR as possible, so only use the below if absolutely necessary. We also want to make only the smallest parts of a component render on the client side.

In the below example, only the Card Button needs interactivity. So we would divide this component up into multiple different components and make only the card button client.

![Card Component Example](https://i.imgur.com/9eaf7Ln.png)

To make that component interactive and render only on the client-side, place `"use client"` at the top of the file, this allows us to use the component within NextJS' AppDir as it designates that component as something that should be rendered on the client rather than on the server.

Without the above, it probably will work on most React based frameworks, however for future proofing as NextJS pushes their AppDir changes, separating components out based on interactivity is vital.

You can read more about it here https://nextjs.org/docs/getting-started/react-essentials


## Scripts
| Command| Description  |
|--|--|
| build | Bundles the package |
| dev | Runs a Vite test project, you can add your own components in App.tsx to see how they look |
| storybook| Opens StorybookJS to display components, runs in watch mode so will adjust as you save it|
| build-storybook | Builds out Storybook for deployment (not used atm) |
| lint | Runs a linter, worth checking before deployment to ensure simple mistakes are fixed |
| test | TODO |

## Deployment

Make sure you bump up the package.json version before deployment or else the build will fail.
*todo - automate this*

When you commit to main, it will trigger a github action here: https://github.com/Global-X-ETFs/GXComponents/actions

If builds pass, update your package.json on the **consuming project**, to include the latest version you created, then run `npm i` to consume it.

    import { YourComponent } from  "@global-x-etfs/gxcomponents";
    ...
    ...
	    return (
		    <YourComponent> </YourComponent>
	    )
    }

Tada, you've now got your own custom component! 🥳
