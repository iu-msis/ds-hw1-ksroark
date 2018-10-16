var CommentsApp = new Vue({
  el: '#commentMain',
  data: {
    commentList: { },
    comment: [ ],
    newCommentForm: { },
    comments: [ ]
  },
  computed: {},
  methods: {
    handleCommentForm(e) {

      const s = JSON.stringify(this.newCommentForm);

      console.log(s);

      // POST to remote server
      fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( response => response.json() )
      .then( json => {this.comments.push(json)})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      })
      this.newCommentForm = this.getEmptyCommentForm();
    },
    getEmptyCommentForm() {
      return {
        comment: ''
      }
    }
  },

  created () {
    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {CommentsApp.commentList = json})
    .catch( err => {
      console.log('COMMENT FETCH ERROR:');
      console.log(err);
    })
  }

})
