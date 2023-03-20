import React from "react";
import { Link } from "react-router-dom";
import "./FooterCol";

export default function FooterCol({
  heading = "Col Heading",
  links = [
    {
      type: "Link",
      title: "Home",
      path: "/home",
    },
    {
      type: "Link",
      title: "About",
      path: "/about",
    },
  ],
}) {
  return (
    <>
      <h2 className="heading text-white">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === "Link" ? (
              <Link className="text-secondary" to={item.path}>
                {item.title}
              </Link>
            ) : (
              <a
                href={item.path}
                className="text-secondary"
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
