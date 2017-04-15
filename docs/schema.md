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
type        | string    | not null
read        | boolean   | default: false


## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
liker_id    | integer   | not null, foreign key (references users), indexed
content_id  | integer   | foreign key (references content), indexed

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


## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null, primary key
convo_id    | integer   | not null, foreign key (references conversations), indexed
sender_id   | integer   | not null, foreign key (references users), indexed


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
