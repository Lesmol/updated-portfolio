import React from "react";

interface CustomSocialLinkProps {
  title: string;
  href: string;
  className: string;
  d: string;
}

function customSocialLink(props: CustomSocialLinkProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary md:hover:bg-text-darker-primary 15 flex items-center rounded-md px-4 py-3 transition ease-linear"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        className={props.className}
        viewBox="0 0 16 16"
      >
        <path d={props.d} />
      </svg>
    </a>
  );
}

export default customSocialLink;
