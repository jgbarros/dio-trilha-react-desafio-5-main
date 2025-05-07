import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://bpccjxpqjfyarwgnytpb.supabase.co/rest/v1/',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwY2NqeHBxamZ5YXJ3Z255dHBiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjYyNzM1OSwiZXhwIjoyMDYyMjAzMzU5fQ.t_xZ2gt1svsj1dJjHPJhAATza4CjKvm4jVQRJax1pnE',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwY2NqeHBxamZ5YXJ3Z255dHBiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjYyNzM1OSwiZXhwIjoyMDYyMjAzMzU5fQ.t_xZ2gt1svsj1dJjHPJhAATza4CjKvm4jVQRJax1pnE',
    'content-type': 'application/json',
  },
});

export const doPostRequest = axios.create({
  baseURL: 'https://bpccjxpqjfyarwgnytpb.supabase.co/rest/v1/',
  headers: {
    apikey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwY2NqeHBxamZ5YXJ3Z255dHBiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjYyNzM1OSwiZXhwIjoyMDYyMjAzMzU5fQ.t_xZ2gt1svsj1dJjHPJhAATza4CjKvm4jVQRJax1pnE',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwY2NqeHBxamZ5YXJ3Z255dHBiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjYyNzM1OSwiZXhwIjoyMDYyMjAzMzU5fQ.t_xZ2gt1svsj1dJjHPJhAATza4CjKvm4jVQRJax1pnE',
    'content-type': 'application/json',
    prefer: 'return=minimal',
  },
});
