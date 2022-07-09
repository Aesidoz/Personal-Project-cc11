import CommentBox from "./contentreuses/CommentBox";

function CommentContentBox() {
  return (
    <div className="BodyBigCon bg-success container mt-4 pb-5 px-5 py-3">
      <div className="container d-flex gap-4">
        <i class="fa-solid fa-comments display-3" />
        <h1 className="pt-3">234 Comments</h1>
      </div>
      <CommentBox />
    </div>
  );
}

export default CommentContentBox;
