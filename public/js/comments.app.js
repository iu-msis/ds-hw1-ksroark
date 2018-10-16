var commentsApp = new Vue({
  el: '#comment',
  data: {
    comment: {
      id: 0,
      comment: ''
    },
    commentForm: { },   // populated by this.getEmptyWorkForm()
  },
  computed: {},
  methods: {
    handleWorkForm(e) {

      const s = JSON.stringify(this.commentForm);

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
      .then( json => {this.comment.push(json)})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      })

      // Reset workForm
      this.commentForm = this.getEmptyCommentForm();
    },
    getEmptyCommentForm() {
      return {
        id: 0,
        comment: ''
      }
    },
  },
  created () {

    // Do data fetch
    const url = new URL(window.location.href);
    const taskId = url.searchParams.get('id');
    console.log('Comment: '+ id);
    this.comment.id = id;

    if (!id) {
      //TODO: Error? 404?
      //e.g., window.location = '404.html';
    }

    // Populate workForm with default values
    this.commentForm = this.getEmptyCommentForm();

    // Fetch all teams, for the form
    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {this.comment.push(json)})
    .catch( err => {
      console.log('COMMENT FETCH ERROR:');
      console.log(err);
    })
  }
})
