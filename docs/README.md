# Fafbook

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://fafbook.herokuapp.com/#/
[trello]: https://trello.com/b/zFzsNMyZ/fafbook

## Minimum Viable Product
Fafbook is a web application based on Facebook built using Ruby on Rails
and React/Redux. These are the features this app will have at the minimum:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Profiles
- [ ] Friending other profiles
- [ ] Commenting / Posting on each others' walls
- [ ] News Feed with sidebars
- [ ] Infinite scroll for News Feed

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md


## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Profile Model, API, and components (2 days)

**Objective:** Be able to view, and edit your own profile.

### Phase 3: Friending (1 day)

**Objective:** Be able to send requests to other friends.
Once approved be able to view their page.

### Phase 4: Post on other peoples' wall (2 days)

**Objective:** Once friends, post on other walls in a publicly viewable manner.

### Phase 5: News Feed with Sidebars (2 days)

**Objective:** See all recent posts from other friends in center feed, with 2 sidebars to fill out space.

### Phase 6: - Pagination / infinite scroll for News Feed (1 day)

**Objective:** Add infinite scroll to News Feed.


### Bonus Features (TBD)
- [x] Search
- [x] Messaging
- [ ] Likes
- [ ] Notifications
- [ ] Tags
- [ ] Profile deactivation
