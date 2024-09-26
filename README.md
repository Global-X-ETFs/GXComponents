GXComponents is a UI library developed at Global X ETFs to create a standardised system of React components.

## Key Technologies

|                                                                                        |                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **StorybookJS**<br>https://storybook.js.org/<br>                                       | This acts as a playground during development and a distributable brochure once deployed. I'd encourage you to read the docs and have a play about with it, this is a huge area for improvement.<br><br>It's also handy to look at the story's code to see how the developer intended the components to be used. |
| **Radix Primitives**<br>https://www.radix-ui.com/primitives/docs/overview/introduction | These are unskinned web components that we can base our components off of, with a similar approach to the popular shadcn-ui components.                                                                                                                                                                         |
| **Class Variance Authority**<br>https://cva.style/docs                                 | This library provides an easy way to extend a component to have multiple different appearances.                                                                                                                                                                                                                 |
| **TurboRepo**<br>https://turbo.build/repo/docs                                         | GX Components uses TurboRepo to combine the UI library and StorybookJS. This combined with `pnpm` provides us a symlink between the UI library and Storybook, meaning any changes you make in the UI library are instantly reflected in Storybook. Plus many other benefits.                                    |
| **TailwindCSS**<br>https://tailwindcss.com/                                            | This provides all of our styling. Note that the `tailwind.config.ts` file is shared from GXComponents and can be extended in your app.<br>                                                                                                                                                                      |

## Installation

```shell 
git clone https://github.com/Global-X-ETFs/GXComponents.git && cd GXComponents
```

⚠️ This project uses `pnpm` and **not** yarn, npm or bun.
If the below doesn't work, install pnpm: https://pnpm.io/installation#prerequisites
```bash
pnpm i && pnpm dev
```


# Importing into your Project

### Personal Access Token

First, you need to create a Personal Access Token. 

1. Click on your Avatar at the top right of GitHub, then press settings.
2. Then press "Developer Settings".
3. Personal Access Tokens => Tokens (classic) => Generate new token => Generate new token **(classic)**
4. Select *repo*, *write:packages* and optionally *delete:packages*.

Store the key somewhere as you won't be able to see it again.

### .npmrc file

⚠️ Before you leak your access token, add `.npmrc` to your `.gitignore` file

Create a `.npmrc` file at the root of your project. Replacing `YOUR_GITHUB_TOKEN` with your personal access token we've just generated.
```
@global-x-etfs:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

### Installing GXComponents In Your Project

#### Install GXComponents

```bash
npm i @global-x-etfs/gx-components
```

#### Tailwind CSS

Install tailwind if you don't already have it:
https://tailwindcss.com/docs/installation

Replace `tailwind.config.js` with the below, rename the file to `tailwind.config.ts` if you use typescript. 

```ts
import type { Config } from "tailwindcss";
import sharedConfig from "@global-x-etfs/gx-components/tailwind.config.ts";

const config: Pick<Config, "presets" | "content"> = {	
	presets: [sharedConfig],
	content: [
		"./node_modules/@global-x-etfs/gx-components/dist/**/*.js",
		"./src/*.{js,ts,jsx,tsx}",
	]
};

  

export default config;
```


### Using the package

Add this to the top of your root file, App.tsx,  index.tsx, RootLayout.tsx etc...
```ts
import '@global-x-etfs/gx-components/fonts.css'
```

You can now use the components in your React app 🥳
```tsx
import "./index.css";
import "@global-x-etfs/gx-components/fonts.css";
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@global-x-etfs/gx-components";

function App() {
  return (
    <>
      <div className="max-w-4xl text-marine mx-auto h-[100vh] justify-evenly flex flex-col">
        <Button>Hello World</Button>
        <Input placeholder="Enter your name" />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Header 1</TableHead>
              <TableHead>Header 2</TableHead>
              <TableHead>Header 3</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>Cell 1</TableCell>
                <TableCell>Cell 2</TableCell>
                <TableCell>
                  <Button>Cell 3</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default App;
```


## Developing with GXComponents

After running `pnpm dev`, Storybook is launched on port 6006 and the UI library is being watched and compiled by `tsc -w`, any changes you make on the UI library should be reflected on Storybook.

⚠️ Please create stories alongside your UI development, treated as documentation.

### Feature Branches

When you push your code up to GitHub, an action is triggered that releases the package to our private npm registry. 

For example, when code is pushed to `origin/combobox`, we can then run `pnpm i @global-x-etfs/gx-components@3.0.1-combobox-93.0` in a separate project to install that specific version following the above importing guide.

In order to get that package name, visit this [link](https://github.com/Global-X-ETFs/GXComponents/actions/workflows/develop.yml) and then click on your commit => "build" => expand "Publish package" and you should see something like this:
```
Run pnpm publish --no-git-checks

npm notice
npm notice 📦 @global-x-etfs/gx-components@3.0.1-ComboBox-93.0 
npm notice 116B .eslintrc.js
npm notice 107B .turbo/turbo-build.log
```

This way you can avoid having to wait for your changes to be on `origin/main` before using them in your project.

## Contributing

We're releasing this library with the hope that other teams across the world can contribute and urge you to please share your work via a Pull Request with the reviewer assigned to Connor Bradley. 

I'll write more documentation on style guides shortly.



