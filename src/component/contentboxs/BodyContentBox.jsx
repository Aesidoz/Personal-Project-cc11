function BodyContentBox({ content }) {
  return (
    <div className="BodyBigCon bg-success container mt-4 pb-5">
      <div className="textBody imgBodyInner text-center px-5 pt-5">
        {content}
      </div>
    </div>
  );
}

export default BodyContentBox;
