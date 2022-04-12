import React from "react";
import { createClient } from "../../../prismicio";

export default function Post() {
  return <></>;
}

export async function getServerSideProps({ previewData, params }) {
  const client = createClient({ previewData });

  const { slug } = params;
  const project = await client.getByUID("project", slug, { ref: null });

  return {
    props: { project },
  };
}
