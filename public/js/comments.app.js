var commentsApp = new Vue({
  el: '#commentMain',
  data: {
    comment: {
      id: 0,
      title: ''
    },
    comment: [ ],
    commentForm: { },   // populated by this.getEmptyWorkForm()
    //teamList: [] // All the teams
  },
  computed: {},
  methods: {
    handleCommentForm(e) {

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
    }
  },
  created () {



    // Populate workForm with default values
    this.workForm = this.getEmptyWorkForm();

    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentsApp.comment = json} )
    .catch( err => {
      console.error('comment FETCH ERROR:');
      console.error(err);
    })

  }
})
