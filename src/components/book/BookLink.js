import { Link } from 'react-router-dom';

export default function BookLink({book}) {
  return (
    <Link to={`/book/${book.id}`}

  )
}
