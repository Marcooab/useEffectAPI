export default function User({user}) {
  return(
    <>
      <div>
        Nome: <strong>{user.firstName} {user.lastName}</strong>
      </div>
    </>
  )
}