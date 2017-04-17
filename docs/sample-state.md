```js
{
  currentUser: {
    id: 1,
    first_name: 'Billy',
    last_name: 'Joe',
    email: 'billyjoe@example.com'
  },

  forms: {
    signUp: {
      errors: []
    },
    signIn: {
      errors: []
    },
    post: {
      errors: []
    },
    comment: {
      errors: []
    },
    post: {
      errors: []
    }
  }

  user: {
    id: 5,
    first_name: 'Kevin',
    last_name: 'James',
    email: 'kevinjames@example.com',
    picture: 'image.png',
    dob: '2/09/95',
    gender: 'Male',
    about: 'Software developer in NYC!',
    profile: {
      phone: "555-555-5555",
      education: "App Academy",
      relationship: "Single",
      location: "New York, New York",
      work: "Google"
    },
    photoIds: [4, 5, 16, 22]
    photos: {
      4: {
        id: 4,
        photoThumb: 'partySmall.png'
        photoOriginal: 'partyOriginal.png'
      },
      { ... }
    },
    friendIds: [5, 9, 12]
    friends: {
      3: {
        id: 3,
        fullName: 'Margaret Thatcher',
        profileThumb: 'profilePictureSmall.jpg'
        profileOriginal: 'profilePictureOriginal.jpg'
      },
      { ... }
    },

    postIds: [27, 32, 59, 70]
    posts: {
      59: {
        id: 59,
        author_id: 9,
        receiver_id: 5,
        authorFullName: "Andy Lu",
        authorprofileThumb: 'profilePictureSmall.jpg',
        createdAt: "10 minutes ago",
        body: "GREAT JOB MATE",
        receiverFullName: "Kevin James",
        numLikes: 1,
        currentUserLikesPost: true,
        likeText: "You like this.",
        contentType: post,
        photo: null,
        tags: null
        comments: {
          103: {
            id: 103,
            author_id: 27,
            authorFullName: "David Lu",
            authorprofileThumb "avatar.jpg",
            userLikesComment: false,
            body: "I agree with this.",
            createdAt: "9 minutes",
            numLikes: 1,
            parentContentId: 59,
            parentType: post
            childComments: { ... }
          }
        }
      },
      32: {
        id: 32,
        author_id: 5,
        receiver_id: 5,
        authorFullName: "Kevin James",
        authorprofileThumb: 'profilePictureSmall.jpg',
        createdAt: "1 hour ago",
        body: "I got the job yall!",
        receiverFullName: "Kevin James",
        numLikes: 20,
        currentUserLikesPost: true,
        likeText: "You, Amy Jones, Patty White and 17 other people like this.",
        contentType: post,
        photo: null,
        tags: {
          5: {
            id: 5,
            name: "Deborah James"
          }
        }
      },
      { ... }
    },
  friendships: {
    incomingRequests: {
      2: {
        id: 2,
        fullName: "Tony Anton",
        profilePictureSmall: "profilePictureSmall.jpg",
        friendIds: [4, 9, 33, 49],
        mutualFriends: [9]
      }
    },
    outgoingRequests: {
      45: { ... }
    },
    newFriends: {
      137: { ... },
      159: { ... }
    },
    notificationCount: 2
  },
  search: {
    68: {
      id: 68,
      avatarUrl: "avatar.jpg",
      fullName: "Jack Doe",
      mutualFriends: 2
    },
    58: { ... }
  },

  notifications: {
    count: 3,
    list: [
      ... ,
      ...
    ]
  },

  messages: {
    conversations: {
      1: {
        id: 1,
        name: "Jacob White",
        unreadCount: 4,
        lastMessage: "Ayy boi",
        lastMessageThumb: "profilePictureSmall.jpg",
        lastMessageTime: "3 hours ago",
        lastMessageName: "Jacob White",
        numPeople: 2
      },
      4: {
        id: 4,
        name: "Gym Rats",
        unreadCount: 42,
        lastMessage: "Gonna bench a bunch",
        lastMessageThumb: "profilePictureSmall.jpg",
        lastMessageTime: "9 hours ago",
        lastMessageName: "Swole Sal",
        numPeople: 6
      }
    },
    currentConversation: {
      conversationId: 9,
      name: "Soren Bjerg",
      unreadCount: 0,
      messages: [
        {
          senderFirstName: "Patrick",
          body: "Hey bro how you feeling",
          senderId: 72,
          senderThumb: "profilePictureSmall.jpg",
          timestamp: "2017-04-16 15:32"
        },
        { ... }
      ]
    }
  }

}
```
