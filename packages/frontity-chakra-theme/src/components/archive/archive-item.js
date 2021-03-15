import { connect } from "frontity";
import React from "react";
import { formatPostData } from "../helpers";
import PostPreview from "./post-preview";

const ArchiveItem = ({ state, item }) => {
  const data = formatPostData(state, item);
  return <PostPreview data={data} bg="accent.50" color="accent.900" />;
};

export default connect(ArchiveItem);
