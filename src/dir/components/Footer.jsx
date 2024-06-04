import { IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";
import React from "react";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>© 2024. All rights reserved. Inspired by Stefan</h3>
            <div className="footerc__socials">
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/__svdiq__"
              >
                <IconBrandInstagram height={30} width={30} />
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/abubakar-1"
              >
                <IconBrandGithub height={30} width={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
