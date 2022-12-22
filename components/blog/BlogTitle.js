import React from "react";

const BlogTitle = ({ data }) => {
  return (
    <div className="blog-title">
      <ul className="post-detail">
        {/* <li>13 September 2022</li> */}
        <li>
          {data?.date} {data?.month} {data?.year}
        </li>

        <li>Posted By : {data && data.author}</li>
        {/* <li>
          <i className="fa fa-heart me-2"></i>8 Hits
        </li>
        <li>
          <i className="fa fa-comments me-2"></i>20 Comment
        </li> */}
      </ul>
      <h3>{data && data.title}</h3>
    </div>
  );
};

export default BlogTitle;
