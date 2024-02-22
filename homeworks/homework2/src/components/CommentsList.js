import { useState } from "react";

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  function commentRemove(id) {
    const newArr = comments.filter((comment) => comment.id !== id);

    setComments(newArr);

    // setComments(comments.filter((i) => i !== id));

    // setComments((prevState) =>
    //   prevState.filter((comment) => comment.id !== id)
    // );

    // return comments;
  }
  // useEffect(() => {
  //     const commentsList = comments.map((comment) => (
  //         <li key={comment.id}>
  //           {comment.text}
  //           <button onClick={commentRemove(comment.id)}>Delete</button>
  //         </li>
  //       ));
  // })

  const commentsList = comments.map((comment) => (
    <>
      <li key={comment.id}>{comment.text}</li>
      <button onClick={(e) => commentRemove(comment.id, e)}>Delete</button>
    </>
  ));
  return <ul className="comments">{commentsList}</ul>;
}

export default CommentsList;
