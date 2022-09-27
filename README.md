# Next.js and Sanity.io
Testing Headless blogging with Sanity Studio and Next.js Client

### Folder structure
` ~/projects/Blog`
`        ├── studio`
`        └── web` 

## Install Sanity and use Blog Schema
Inside studio folder:
`sanity init`
Create a new project, select the blog schema template. 
`sanity start`

## Install Next.js
Inside web folder: 
`npx create-next-app@latest`

## Install @sanity/client
Inside web folder:
`npm install @sanity/client`
create in root web folder `client.js`