## Component Hierarchy

**App**
  - Navbar
    - LeftNavBar
      - Link (Logo)
      - SearchBar
    - RightNavBar
      - Link (Profile)
      - Link (Home)
      - FriendRequests
      - Messages
      - Notifications
      - Settings
  - Profile
    - ProfileNavBar
      - CoverPhoto
      - ProfilePhoto
      - ProfileNavBarLinks
        - Link (Timeline)
        - Link (About)
        - Link (Friends)
        - Link (EditProfile)
    - Feed*
    - AboutSideBar
      - Intro
      - Friends
      - Photos
  - Newsfeed
    - Feed*
    - LeftExploreSidebar
      - Groups
      - Events
      - Friends  
    - RightTrendingSidebar
      - TrendingNews
      - SelfPromotion
  - Chatbox
  - Footer

**SignUpPage**
  - SignInHeader
  - SignupForm

**Feed**
  - CreatePost
  - Posts
    - Post
      - Likes
      - Comments1
        - Likes
        - Comments2


## Routes
| Path   |  Component |
|--------|-------------|
| "/login"| SignUpPage |
| "/" | Newsfeed |
| "/:username" | Profile |
| "/:username/about" | About |
| "/:username/friends" | Friends |
| "/:username/albums" | Albums |
| "/:username/tags" | Tags |
| "/settings" | EditProfile |
| "/messages" | Messages |
| "/groups" | Groups |
| "/groups/:group" | Group |
| "/events" | Events |
| "/events/:event" | Event |
