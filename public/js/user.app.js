var userApp = new Vue({
  el: '#users',
  data: {
    "name" : "Tapestry",
    "short_description": "Build a visualization layer for the project dashboard",
    "start_date" : "2018-07-01",
    "target_date" : "2018-11-03",
    "budget" : "4950000",
    "spent" : "3456700",
    "projected_spend": "4740500",
    "weekly_effort_target": 400,
    results: [
    {
      gender: '',
      name: {
        "title": "mr",
        "first": "rolf",
        "last": "hegdal"
      },
      location: {
        street: '',
        "city": "Los Angeles",
        "state": "CA",
        postcode: '',
        coordinates: {
          latitude: '',
          longitude: ''
        },
        timezone: {
          offset: '',
          description: ''
        }
      },
      "email": "rhegdal@gmail.com",
      login: {
        uuid: '',
        username: '',
        password: '',
        salt: '',
        md5: '',
        sha1: '',
        sha256: ''
      },
      dob: {
        "date": "5/25/1984",
        age: 0
      },
      registered: {
        date: '',
        age: 0
      },
      phone: '',
      cell: '',
      id: {
        name: '',
        value: ''
      },
      picture: {
        large: '',
        "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
        thumbnail: ''
      },
      nat: ''
    }
  ]
  },

  methods: {
    fetchTasks () {
      fetch( 'https://randomuser.me/' )
      .then( function (response) {return response.json()} )
      .then( function (json) {dashboardApp.tasks = json})
      .catch( function(err) {
        console.log('TASK FETCH ERROR:');
        console.log(err);
      })
    }
  }
});
