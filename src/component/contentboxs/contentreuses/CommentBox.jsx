function CommentBox() {
  return (
    <div className="bg-light my-3">
      <div className="d-flex pt-3">
        <h1 className="setUserBox">
          <i className="fa-solid fa-circle-user" />
        </h1>
        <h3 className="fixedText">User</h3>
      </div>
      <div className="px-5 form-group">
        <textarea
          class="form-control"
          row="10"
          id="exampleFormControlTextarea1"
        ></textarea>
      </div>
      <div className="px-5 py-3 container ">
        <button className="btn btn-secondary ">Comment</button>
      </div>
    </div>
  );
}

export default CommentBox;
