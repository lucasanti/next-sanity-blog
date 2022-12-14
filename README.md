# Next.js and Sanity.io
Testing Headless blogging with Sanity Studio and Next.js Client

### Folder structure
~/projects/Blog
        ├── studio
        └── web

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

```javascript
// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'your-project-id', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})
```


## Get content from Sanity
Start creating `post.js` or `[slug].js` and get data by using `getStaticProps` and `getStaticPaths`.

Add **CORS Settings** in order to add `http://localhost:3000` or `http://custom.domain` to Sanity's origin

### Install groq
in web folder `npm install groq`


## Images

In web folder `npm i @sanity/image-url`
Accessing data by: `"imageUrl": author->image.asset->url`

## PortableText
In web folder `npm install @portabletext/react`

## Add Code block to PortableText
In studio folder `sanity install @sanity/code-input`, then in `schemas/blockContent.js` add a Code schema like this: 
```javascript
{
      title: 'Code',
      name: 'code',
      type: 'code',
      options: {
        theme: 'solarized_dark'
      }
      
    }, 
```
In web folder `npm install react-syntax-highlighter --save` or any other Syntax Highlighter, then add this new type and components