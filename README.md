# Next.js shopping basket using cookies

A quick example showing how to use session IDs and cookies to store basket contents in a Postgres database.

When a user first visits the site we set a cookie with a unique random string (a "session ID" or SID). Then when they add a product to their basket we associate this SID with the DB entry. This means we can later get _just_ the basket entries for this user/session.

## Local setup

Requires Git, Node, npm and Postgres installed on your machine.

1. Clone this repo
1. `npm install`
1. `./scripts/create_db` to set up a local DB
1. `./scripts/reset_db` to set up DB tables and example products

## Architecture

1. ### \_middleware
   - New Next.js feature
   - Runs before every page "below" it (in this case every page)
   - Makes sure there is always an `sid` cookie set so we can identify this user's session from any page
   - Avoids duplicating this logic to every page's `getServerSideProps`
1. ### Home page
   - Gets all products from DB
   - If there's a session gets anything added to basket from DB
   - Renders a header with a link to the basket page (showing how many items are in it)
   - Renders a list of products
1. ### Product page
   - Gets the specific product from the DB using the ID from the URL
   - Renders a form for adding this specific product to the basket
   - Form submits to an API route
1. ### Add to basket API route
   - Receives form POST request
   - Gets the product-to-save's ID from the request body
   - Gets the SID from the request cookie header
   - Stores the product in the basket in the DB associated to this specific SID
   - Redirects back to the same product page
1. ### Basket page
   - If there's a session gets anything added to basket from DB
   - Renders a list of products currently saved to the basket
