# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
dob             | date      | not null
gender          | string    | not null
about           | text      |
cover_photo     | string    | carrierwave gem
profile_photo   | string    | not null, carrierwave gem, default: default_url
deactivated     | boolean   | not null, default: false

## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
requester_id| integer   | not null, foreign key (references users), indexed
requestee_id| integer   | not null, foreign key (references users), indexed
status      | string    | not null, default: 'pending'

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
receiver_id | integer   | not null, foreign key (references users), indexed
body        | text      | not null
photo       | string    |
type        | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
parent_id   | integer   | foreign key (references parent), indexed
parent_type | string    | not null


# Bonuses

## notifications
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
notifier_id | integer   | not null, foreign key (references users), indexed
owner_id    | integer   | not null, foreign key (references users), indexed
content_id  | integer   | foreign key (references content), indexed
content_type| string    | not null
read        | boolean   | default: false


## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
liker_id    | integer   | not null, foreign key (references users), indexed
content_id  | integer   | foreign key (references content), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
content_id  | integer   | not null, foreign key (references content), indexed
content_type| string    | not null

## conversations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | text      | not null

## chats
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
convo_id    | integer   | not null, foreign key (references conversations), indexed
muted       | boolean   | not null, default: false


## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null, primary key
convo_id    | integer   | not null, foreign key (references conversations), indexed
sender_id   | integer   | not null, foreign key (references users), indexed
read        | boolean   | not null, default: false

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
name        | string    | not null
description | text      |

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
album_id    | integer   | not null, foreign key (references albums), indexed
user_id     | integer   | not null, foreign key (references users), indexed
photo       | string    | not null, carrierwave?, or just a url

## groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      | not null
admin_id    | integer   | not null, foreign key (references users), indexed

## memberships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
group_id    | integer   | not null, foreign key (references groups), indexed
status      | string    | not null, default: "approved"

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
host_id     | integer   | not null
host_type   | string    | not null
description | text      |
date        | datetime  | not null
location    | string    | not null

## attendances
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
event_id    | integer   | not null, foreign key (references events), indexed
status      | string    | not null, default: "going"


## profiles
column name     | data type | details
----------------|-----------|-----------------------
phone           | string    |
education       | string    |
relationship    | string    |
relationship_id | string    | foreign key (references users), indexed
website         | string    |
language        | string    |
location        | string    |
work            | string    |
user_id         | integer   |
