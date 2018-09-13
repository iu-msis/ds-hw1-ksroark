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
          title: '',
          first: '',
          last: ''
        },
        location: {
          street: '',
          city: '',
          state: '',
          postcode: 0,
          coordinates: {
            latitude: '',
            longitude: ''
          },
          timezone: {
            offset: '',
            description: ''
          }
        },
        email: '',
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
          date: '',
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
          medium: '',
          thumbnail: ''
        },
        nat: ''
      }
    ]
  },
  computed: {
    result_age: function () {
      return moment(this.dob.date).diff(moment(), 'days');
    }
  },
  methods: {
    fetchResults () {
      fetch ( 'https://randomuser.me/api/' )
      .then( response => response.json() )
      .then( json => {userApp.results = json } )
      .catch ( function(err) {
        console.log('TASK FETCH ERROR:');
        console.log(err);
      })
      }
    },
  created () {
    this.fetchResults()
  }
});
