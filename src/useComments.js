import { useStore } from "./store";
import { uuid } from "uuidv4";

export function useComments() {
  const { comments, setComment, addComment } = useStore();

  function addCommentToPose(poseId, commentString) {
    addComment(uuid(), {
      poseId,
      id: Date.now(),
      comment: commentString,
      isDeleted: false,
    });
  }

  function deleteComment(commentId) {
    setComment(commentId, { ...comments[commentId], isDeleted: true });
  }

  return {
    comments: comments.filter(x => !x.isDeleted),
    addCommentToPose,
    deleteComment,
  };
}
