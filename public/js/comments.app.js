var CommentsApp = new Vue({
  el: '#commentMain',
  data: {
    commentList: {
    },
    comment: [ ]
  },
  computed: {},
  methods: {},
  created () {

    // Fetch all teams, for the form
    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {CommentsApp.commentList = json})
    .catch( err => {
      console.log('COMMENT FETCH ERROR:');
      console.log(err);
    })
  }
})
