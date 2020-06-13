import React, { useState } from "react"
import * as Styles from "./mail.module.scss"

const EmailListForm: React.FunctionComponent<{}> = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
  }

  return (
    <form onSubmit={handleSubmit} className={Styles.EmailListForm}>
      <div className={Styles.con}>
        <h1>Subscribe for updates</h1>
        <div className={Styles.Wrapper}>
          <input
            placeholder="Email address"
            name="email"
            type="text"
            onChange={handleEmailChange}
          />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </form>
  )
}

export default EmailListForm
