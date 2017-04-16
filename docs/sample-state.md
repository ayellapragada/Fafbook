{
  session: {
    currentUser: {
      id: 1,
      first_name: 'Billy',
      last_name: 'Joe',
      email: 'billyjoe@example.com'
    },
    errors: {
      signUpFormErrors: {
        email: [],
        first_name: [],
        last_name: [],
        password: [],
      },
      logInFormErrors: []
    }
  },

  user: {
    id: 5,
    first_name: 'Kevin',
    last_name: 'James',
    email: 'kevinjames@example.com',
    picture: 'image.png',
    dob: '2/09/95',
    gender: 'Male',
    about: 'Software developer in NYC!',

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
        comments: {
          103: {
            id: 103,
            author_id: 27,
            postId: 59,
            authorFullName: "David Lu",
            authorprofileThumb "avatar.jpg",
            userLikesComment: false,
            body: "I agree with this.",
            createdAt: "9 minutes",
            numLikes: 1,
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
        likeText: "You, Amy Jones, Patty White and 17 other people like this."
      },
      { ... }
    }
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
    }
  },

  
}
