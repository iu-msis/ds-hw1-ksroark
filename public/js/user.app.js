var userApp = new Vue({
  el: '#users',
  data: {
    result:
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
  },

  computed: {

    age_calc: function () {
      return moment().diff(moment(this.result.dob.date), 'years');
    },

    pretty_dob_info: function() {
      return this.prety_dob(this.result.dob.date);
    }

  },

  methods: {

    pretty_dob: function (bd) {
      return moment(bd).format('l');
    },

    fetchResults: function () {
      fetch ( 'https://randomuser.me/api/' )
      .then( response => response.json())
      .then( json => {userApp.result = json.results[0];})
      .catch ( function(err) {
        console.log('TASK FETCH ERROR:');
        console.log(err);
      });
      }
    },

  created: function () {
    this.fetchResults()
  }

});
