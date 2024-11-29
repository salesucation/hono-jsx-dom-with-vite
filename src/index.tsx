import { Hono } from 'hono'

const app = new Hono()

const routes = app.get('/api/clock', (c) => {
  return c.json({
    time: new Date().toLocaleTimeString()
  })
})

export type AppType = typeof routes

app.get('/', (c) => {
  return c.html(
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css" />
      </head>
      <body>
      <x-markdown2html src="static/library.md"></x-markdown2html>
      <x-markdown2html src="static/x-year.md"></x-markdown2html>
      <script src="https://custom-element.pages.dev/custom-element.js" crossorigin="anonymous"></script>        
      {import.meta.env.PROD ? (
          <script type="module" src="/static/customElement.js"></script>
        ) : (
          <script type="module" src="/src/customElement.ts"></script>
        )}
      </body>
    </html>
  )
})

export default app
