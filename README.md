# tailwind-html-boilerplate
A quick starter by babulakterfsd for any html site with tailwindcss (v 3.0.0).

## How to config

- run `npm init -y`
- run `npm i -D tailwindcss` (installed as dev dependancy)
- run `npx tailwindcss init` to generate the tailwind config file
- create assets folder and inside of it, create folders as the project demands. Here I will create images, js and styles   
  folder. In the styles folder, I will create two more folders named src and output. In the src folder, um gonna create a file named tailwind.css(or whatever) and also create an main.css(or whatever) file in the output folder.

- In the tailwind.css file(in src), I will write these 3 lines:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

- will create a folder named .vscode in the root and inside of this, um gonna create a file names settings.json (cause    
  vscode not gonna understand what tailwind says, lol. I'll write this just to skip errors)

- In that setting.json file, I will place these object:
  {
    "css.validate": false,
    "tailwindCSS.emmetCompletions": true
   }

- write a build property in the scripts in the package.json file (like below)
  "build": "tailwindcss -i ./assets/styles/src/tailwind.css -o ./assets/styles/output/main.css -w"

- Link the main.css file(in the output folder) to the index.html file(in root)
- run `npm run build` and there we go. Open the site in live server and BOOM !





- OOPS ! Doesn't work? alright. just open the tailwind config file and re-write the content property like this:
  content: ["./*.html"],

- Fly Now !