"use client";
import { useGlobalState } from "@/context/globalProvider";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import menu from "./../../utils/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const pathname = usePathname();

  const { theme } = useGlobalState();
  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image src="/avatar1.png" alt="profile-pic" width={70} height={70} />
        </div>
        <h1>
          <span>JOD</span>
          <span>BOT</span>
        </h1>
        <ul className="nav-items">
        {menu.map((item) => {
          const link = item.link;
          return (
            <li
              key={item.id}
              className={`nav-item ${pathname === link ? "active" : ""}`}
              onClick={() => {
                handleClick(link);
              }}
            >
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      </div>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
`;

export default Sidebar;
