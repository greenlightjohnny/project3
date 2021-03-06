import React from "react"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

const Logon = ({ children }) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.name) ||
    "NoName"

  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <>
      <nav
        style={{
          background: "blue",
          borderRadius: `10px`,
          width: `150px`,
          margin: `0 auto`,
        }}
      >
        {" "}
        Login Status:
        <button
          aria-label="Login"
          style={{
            marginBottom: `10px`,
            borderRadius: `10px`,
            background: `#ffffff`,
            border: `none`,
            fontWeight: `bold`,
            marginLeft: `9px`,
            marginRight: `9px`,
          }}
          className="btn"
          onClick={() => setDialog(true)}
        >
          {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
        </button>
      </nav>
      <main>{children}</main>
      <IdentityModal
        aria-label="Login"
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </>
  )
}

export default Logon
