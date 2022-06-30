import { useState } from "react";

export default function MailingList() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, "=>", email);
    setMessage(`Thank you ${name} for joining!`)
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("")
    },2000)
  };
  return (
    <div className="mailing-list">
      {message && <div className="message">{message}</div>}
      <h3>Join Mailing List</h3>
      <p>FREE VIP exclusice members</p>
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
