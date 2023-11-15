export function Tweet(props) {

  return (
    <div>
      <strong>{props.user}</strong>
<<<<<<< Updated upstream
      <p>{props.content}</p>
=======
      <p>{props.children}</p>
>>>>>>> Stashed changes
      <button>Like</button>
    </div>
  )
}