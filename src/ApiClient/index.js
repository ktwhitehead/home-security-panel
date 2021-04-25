const url = process.env.REACT_APP_SERVER_URL;

const client = {
  getContext: async () => {
    try {
      const request = await fetch(`${url}/context`, { method: 'GET' });
      const response = await request.json();
  
      return response;
    } catch(error) {
      return { error };
    }
  },
  setStatus: async (pin, status) => {
    try {
      const request = await fetch(
        `${url}/set-status`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pin, status })
        }
      );
        
      if (request.status === 401) return { error: "Invalid PIN" };
      const response = await request.json();
  
      return response;
    } catch(error) {
      return { error };
    }
  }
}

export default client;
