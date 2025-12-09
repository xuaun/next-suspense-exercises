import React from "react";

import Spinner from "@/components/Spinner";
import ArticleWrapper from "./ArticleWrapper";

async function InterviewLoading() {
  return (
    <>
      <ArticleWrapper>
        <Spinner />
      </ArticleWrapper>
    </>
  );
}

export default InterviewLoading;
