1. Q: Briefly explain one or two key technical decisions you made. (e.g., &quot;I chose to handle state
   on the frontend with X because...&quot;, &quot;I structured my NestJS modules this way because...&quot;,
   or “I decided to handle shipment statuses this way because…”).

A: Decided to use react-query because it simplifies caching, refetching, invalidation, which is needed in this case (real time updates and user impersonation). Wrapped most of the api calls in custom hooks, this is a good practice when you need to change something related to the endpoint you only do the changes in one place, same with token management (get, set). I didn't do it because I got run out of time but for the backend what I'd do also is create a db repository interface defining all needed CRUD methods because the layer between the backend and the db may change, right now I'm using Prisma ORM, so if in the future I decide to change it to Type ORM, I'd just create a new implementation for the repository interface for Type ORM and all my backend will keep working.

2. Q: If this feature needed to handle 1 million shipments, what would be the first two things you
   would change or add to your design?
   A: Cursor based pagination due to the size of the shipments and filtering by user, shippedAt date, deliveredAt date and status.

3. Q: If you had more time, what is one additional feature you would build next for this tool, and
   why?

A: Real Time Notification, every time a shipment is marked as delivered, the user will get a popup or toast in the web.
