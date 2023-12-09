"use client";
import React from "react";
import styles from "@/styles/sidebar.module.css";
import { Home, Search, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const addActiveClass = (path) => {
    return path === pathname ? "text-white" : "text-gray-400";
  };
  return (
    <div>
      <div className="p-6">
        <img src="/images/e1even.svg" alt="e1even_icon" />
      </div>
      <div className={`${styles.nav_wrapper}`}>
        <div className={styles.nav_links}>
          <h2>Browse music</h2>
          <div className={`${styles.links} px-4`}>
            <Link href="/" className={addActiveClass("/")}>
              <Home />
              <p>Home</p>
            </Link>

            <Link href="/" className={addActiveClass("/search")}>
              <Search />
              <p>Search</p>
            </Link>
          </div>
        </div>

        <div className={styles.nav_links}>
          <div className=" flex h-fit w-full justify-between items-center">
            <h2>My Library</h2>
            <MoreHorizontal />
          </div>
          <div className={`${styles.links} px-4`}>
            <Link className={addActiveClass("/playlist")} href="/">
              Playlists
            </Link>
            <Link className={addActiveClass("/recently-played")} href="/">
              Recently Played
            </Link>
            <Link className={addActiveClass("/moods")} href="/">
              Moods
            </Link>
            <Link className={addActiveClass("/liked-songs")} href="/">
              Liked Songs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
