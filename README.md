# README

Fafbook - Fafbook ain't facebook.
[Fafbook live][livesite]
[livesite]: http://www.fafbook.us/#/

Fafbook is a social networking site inspired by Facebook. It uses a Ruby on
Rails backend, a PostgreSQL database, and a React.js front end that uses Redux
for state management.

## Features & Implementation

### Timelines and Newsfeeds

On the backend, posts are stored in the table, with columns for `id`,
`author_id`, `receiver_id` and `body`. This way posts can be both self/status
posts, and posts that go to other members walls. Upon login and viewing the 
timeline, or feed for a particular user page, posts are pulled from the
database and fed into the appropriate component to render those posts.

