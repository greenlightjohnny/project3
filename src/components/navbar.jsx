import React, { useState } from "react"
import { Link } from "gatsby"
import Styles from "./navbar.module.scss"

function Navbar() {
  const [navnames, setNavnames] = useState(false)

  return (
    <div className={Styles.outer}>
      <div className={Styles.container}>
        <h3>
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
            className={`${Styles.navspan} ${navnames ? Styles.animate : null} `}
          ></span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
