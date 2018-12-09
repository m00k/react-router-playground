import React from "react";
import queryString from 'query-string';

// match, location being passed from the route components
const Posts = ({ match, location }) => {
  const { sortBy, approved } = queryString.parse(location.search);

  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.month}
      <p>sortBy: {sortBy}, approved: {approved}</p>
    </div>
  );
};

export default Posts;
