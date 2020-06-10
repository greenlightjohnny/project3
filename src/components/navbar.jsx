import React, { useState, useRef, useMemo } from "react"
import { Link } from "gatsby"
import Styles from "./navbar.module.scss"

import { useScrollPosition } from "@n8tb1t/use-scroll-position"

export default () => {
  const [navnames, setNavnames] = useState(false)
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const rendersCount = useRef(0)
  const [headerStyle, setHeaderStyle] = useState({
    transition: "all 200ms ease-in",
  })

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    false,
    false,
    300
  )

  const Header = <header style={{ ...headerStyle }} />

  return useMemo(
    () => (
      <div show={hideOnScroll}>
        <div className={Styles.container}>
          <h3 className="blue">
            <Link to="/">
              HER2.<span className={Styles.me}>ME</span>
            </Link>
          </h3>

          <nav
            className={`${Styles.mobile} ${
              navnames ? Styles.showmenu : Styles.hidemenu
            }`}
          >
            <ul>
              <li onClick={() => setNavnames(false)}>
                <Link
                  activeClassName={Styles.active}
                  to="/"
                  activeClassName={Styles.active}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  activeClassName={Styles.active}
                  className={Styles.darrow}
                  to="/basics"
                >
                  Basics
                  <div className={Styles.drop}>
                    <Link
                      activeClassName={Styles.active}
                      activeClassName={Styles.active}
                      to="/whatis"
                    >
                      What is HER2?
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      Stages
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      History
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      HER2+ (Positive)
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      HER2- (Negative)
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      link6
                    </Link>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={Styles.active}
                  className={Styles.darrow}
                  to="/traditional"
                >
                  Traditional
                  <div className={Styles.drop}>
                    <Link activeClassName={Styles.active} to="/nope">
                      Chemotherapy
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      Immunotherapy
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      Surgery
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      Radiation
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      Herceptin (Trastuzumab)
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      Perjeta (Pertuzumab)
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      Kadcyla
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      Nerlynx (Neratinib)
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      Tykerb (Lapatinib)
                    </Link>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={Styles.active}
                  className={Styles.darrow}
                  to="/alternative"
                >
                  Alternative
                  <div className={Styles.drop}>
                    <Link activeClassName={Styles.active} to="/nope">
                      Clinical Trials
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      Fake Treatments
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      link3
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      link4
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      link5
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      link6
                    </Link>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  activeClassName={Styles.active}
                  className={Styles.darrow}
                  to="/blogposts"
                >
                  Latest{" "}
                  <div className={Styles.drop}>
                    <Link activeClassName={Styles.active} to="/nope">
                      link1
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      link2
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      link3
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      link4
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      link5
                    </Link>
                    <Link activeClassName={Styles.active} to="/nope">
                      link6
                    </Link>
                  </div>
                </Link>
              </li>
              <li>
                <Link activeClassName={Styles.active} to="/about">
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className={Styles.navbutton}
            onClick={() => setNavnames(!navnames)}
          >
            <span
              className={`${Styles.navspan} ${
                navnames ? Styles.animate : null
              } `}
            ></span>
          </button>
        </div>
      </div>
    ),
    [hideOnScroll]
  )
}
