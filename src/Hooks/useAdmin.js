import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const email = user?.email; //email has already been set into user state;

      useEffect(() => {
          if (email) {
              fetch(`http://localhost:5000/admin/${email}`, {
                      method: 'GET',
                      headers: {
                          'content-type': 'application/json'
                      },
                  })
                  .then(res => res.json())
                  .then(data => {
                      setAdmin(data.admin);
                      setAdminLoading(false)
                  })
          }
      }, [user]);
      return [admin, adminLoading];
}

export default useAdmin;