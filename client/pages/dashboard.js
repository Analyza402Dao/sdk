import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [endpoints, setEndpoints] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/endpoints")
      .then(res => setEndpoints(res.data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Endpoint Dashboard</h2>
      {endpoints.map(endpoint => (
        <div key={endpoint._id} style={{ marginBottom: 10 }}>
          <strong>{endpoint.name}</strong>
          <p>{endpoint.url}</p>
          <span>Status: {endpoint.status}</span>
        </div>
      ))}
    </div>
  );
}
