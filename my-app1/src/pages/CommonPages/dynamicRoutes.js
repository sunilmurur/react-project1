
import { useParams } from 'react-router-dom';

export default function DynamicRoute() {
  const { id } = useParams(); // Access the dynamic part of the URL
  return <h1>User ID: {id}</h1>;
}
