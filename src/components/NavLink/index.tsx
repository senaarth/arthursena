import React from "react";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  label: string;
  onClick: () => void;
}

export function NavLink({ href, label, onClick }: NavLinkProps) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <button
      type="button"
      className={path === href ? "active" : ""}
      onClick={() => {
        router.push(href);
        onClick();
      }}
      disabled={path === href}
    >
      {label}
    </button>
  );
}
