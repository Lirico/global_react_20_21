



const User = ({user}) => {

    const {name, username, email, phone} = user;

  return (
    <div className="user">
        <ul>
            <li>Name: {name}</li>
            <li>Username: {username}</li>
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
        </ul>
    </div>
  )
}

export default User