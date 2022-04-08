import React from "react";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <button
      type="button"
      className={path === href ? "active" : ""}
      onClick={() => router.push(href)}
      disabled={path === href}
    >
      {label}
    </button>
  );
}
