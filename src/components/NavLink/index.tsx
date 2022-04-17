import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
  onClick: () => void;
}

export function NavLink({ href, label, onClick }: NavLinkProps) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Link href={href} prefetch={false} passHref>
      <button
        type="button"
        className={path === href ? "active" : ""}
        onClick={() => {
          onClick();
        }}
      >
        {label}
        <span className="background" />
      </button>
    </Link>
  );
}
