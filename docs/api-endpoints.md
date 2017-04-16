# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users` - Make a new user
- `GET /api/users/:id` - A specific user's data
- `PATCH /api/users/:id` - Edit one specific user's data
- `GET /api/users/` - Takes in a search query and searches users

### Session
- `POST /api/session` - Login a user
- `DELETE /api/session` - Logout a user

### Friendships
- `GET /api/friendships/` - Get all current friend requests
- `POST /api/friendships` - Create a new friend request
- `PATCH /api/friendships/:id` - Accept/Reject a friend request
- `DELETE /api/friendships/:id` - Delete a friend

### Posts
- `POST /api/posts` - Create a new post
- `PATCH /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

### Comments
- `POST /api/comments` - Create comment
- `PATCH /api/comments/:id` - Edit comment
- `DELETE /api/comments/:id` - Delete comment

### Newsfeed
- `GET /api/newsfeed` - Posts and comment data for user and their friends

### Timeline
- `GET /api/timeline` - Posts and comment data for user's own page

# Bonuses 

### Notifications
- `GET /api/notifications` - Get new / recent notifications for user
- `PATCH /api/notifications` - Mark all notifications as read

### Likes
- `POST /api/likes` - Like a piece of content
- `DELETE /api/likes/:id` - Unlike a piece of content

### Tags
- `POST /api/tags` - Tag someone in some content
- `DELETE /api/tags/:id` - Untag someone in some content

### Messaging
- `GET /api/conversations` - Get all conversations user is involved in
- `POST /api/conversations` - Create new conversation
- `GET /api/conversations/:id` - Read one conversation
- `POST /api/messages` - Send new message

### Albums
- `POST /api/albums` - Create a new album
- `PATCH /api/albums` - Update an album
- `DELETE /api/albums` - Delete an album

### Photos
- `POST /api/photos` - Upload a new photo
- `GET /api/photos/:id` - Get a single photos data
- `DELETE /api/photos/:id` - Delete one photo
