import React from "react";
import { useRouter } from "next/router";

export default function Page404() {
  const router = useRouter();

  React.useEffect(() => {
    router?.push("/");
  }, []);

  return <></>;
}
