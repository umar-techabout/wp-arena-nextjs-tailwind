"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import BrandonKelley from "../../images/brandon-kelley.png"; // Placeholder image

const Comments = ({ comments: initialComments, postId }) => {
  const [comments, setComments] = useState(initialComments);
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [replyTo, setReplyTo] = useState(null);

  useEffect(() => {
    setComments(initialComments);
  }, [initialComments]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: String(postId),
          name,
          website,
          content,
          parentId: replyTo ? String(replyTo) : null,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setSuccess("Comment added successfully!");
      setName("");
      setWebsite("");
      setContent("");
      
      // Update comments state with the new comment
      setComments(prevComments => {
        if (replyTo) {
          return prevComments.map(comment => 
            comment.id === replyTo 
              ? { ...comment, replies: [...(comment.replies || []), result] }
              : comment
          );
        } else {
          return [...prevComments, result];
        }
      });

      setReplyTo(null);
    } catch (error) {
      console.error("Error submitting comment:", error);
      setError(error.message || "Failed to add comment");
    }
  };

  const handleReply = (commentId) => {
    setReplyTo(commentId);
  };

  const getAuthorName = (comment) => {
    return comment && comment.author && comment.author.node && comment.author.node.name
      ? comment.author.node.name
      : "Anonymous";
  };

  const renderComment = (comment, isReply = false) => {
    if (!comment) return null;

    return (
      <div key={comment.id} className={`mb-12 ${isReply ? 'ml-12' : ''}`}>
        <div className="relative">
          <div className="flex gap-8 py-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border">
              <Image
                src={BrandonKelley}
                alt={getAuthorName(comment)}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-6">
                <h5 className="text-lg font-semibold">
                  {getAuthorName(comment)}
                </h5>
                <h6 className="text-primary text-base font-normal">
                  {comment.date ? new Date(comment.date).toLocaleDateString() : "Unknown date"}
                </h6>
              </div>
              <p
                className="text-lg"
                dangerouslySetInnerHTML={{ __html: comment.content || "" }}
              />
              <div className="mt-2">
                <button
                  onClick={() => handleReply(comment.id)}
                  className="hover:border-none border-2 border-gray-300 hover:bg-dark hover:text-white rounded py-1.5 px-4 text-sm font-semibold uppercase hover:bg-[#2980b9] w-[136px] h-[40px]"
                >
                  Reply
                </button>
              </div>
              {replyTo === comment.id && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">Reply to {getAuthorName(comment)}</h4>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-1 px-3 mb-2 bg-secondary placeholder-gray-500 font-semibold text-lg"
                      required
                    />
                    <textarea
                      placeholder="Your reply"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="w-full p-1 px-3 mb-2 bg-secondary placeholder-gray-500 font-semibold text-lg"
                      required
                    />
                    <button
                      type="submit"
                      className="w-[136px] h-[40px] border-2 border-gray-300 uppercase hover:bg-[#2980b9] hover:text-white hover:border-none font-semibold text-sm rounded-sm"
                    >
                      Post Reply
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
          {!isReply && <div className="absolute top-8 left-24 h-full w-px bg-gray-200"></div>}
        </div>
        {comment.replies && comment.replies.map(reply => renderComment(reply, true))}
      </div>
    );
  };

  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <section className="px-4">
      <div className="text-lg">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setReplyTo(null)}
            className="bg-gray-200 text-sm uppercase px-4 py-2 font-semibold hover:bg-[#2980b9] hover:text-white"
          >
            Leave a Reply
          </button>
        </div>
        {comments.map(comment => renderComment(comment))}
      </div>

      {replyTo === null && (
        <div className="text-lg">
          <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-1 px-3 bg-secondary placeholder-gray-500 font-semibold text-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full p-1 px-3 bg-secondary placeholder-gray-500 font-semibold text-lg"
                />
              </div>
              <div className="flex gap-4">
                <textarea
                  placeholder="Message"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-1 px-3 bg-secondary placeholder-gray-500 font-semibold text-lg"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-[232px] h-[40px] border-2 border-gray-300 uppercase hover:bg-[#2980b9] hover:text-white hover:border-none font-semibold text-sm rounded-sm"
              >
                Start Conversation
              </button>
            </div>
          </form>
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
    </section>
  );
};

export default Comments;