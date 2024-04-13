export const getBlogs = (req, res, next) => {
  if (req.payload.isAdmin) {
    return res.send("Đây là bài viết mới nhất");
  }
};
