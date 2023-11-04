// import React, { useEffect, useState } from 'react';
// import { endpoint } from '../../Utils/Utils';
// import './clients.scss';

// interface Client {
//   client_name: string[];
// }

// export function Clients() {
//   const [clients, setClients] = useState<Client[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchClients() {
//       try {
//         const response = await fetch(endpoint + 'allClients');
//         if (!response.ok) {
//           throw new Error('Failed to fetch clients');
//         }
//         const data = await response.json();
//         setClients(data.map((client_name: string[]) => ({ client_name })));
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching clients:', error);
//         // Handle error, e.g., show an error message
//       }
//     }

//     fetchClients();
//   }, []);

//   const flattenClientNames = (clients: Client[]) => {
//     return clients.reduce((flattenedClients: string[], client: Client) => {
//       return flattenedClients.concat(client.client_name);
//     }, []);
//   };

//   const groupClientsByFirstLetter = (clients: string[]) => {
//     return clients.reduce((groupedClients: Record<string, string[]>, client: string) => {
//       const firstLetter = (client[0] || '').toUpperCase();
//       groupedClients[firstLetter] = groupedClients[firstLetter] || [];
//       groupedClients[firstLetter].push(client);
//       return groupedClients;
//     }, {});
//   };

//   const flattenedClientNames = flattenClientNames(clients);
//   const groupedClients = groupClientsByFirstLetter(flattenedClientNames);

//   useEffect(() => {
//     console.log('Grouped clients:', groupedClients);
//   }, [groupedClients]);

//   const sortedLetters = Object.keys(groupedClients).sort();

//   return (
//     <div className="grouped-clients">
//       {loading ? (
//         <p>Loading clients...</p>
//       ) : (
//         sortedLetters.map((letter) => (
//           <div key={letter}>
//             <h3>{letter}</h3>
//             <ul>
//               {Array.from(new Set(groupedClients[letter])).map((client, index) => (
//                 <li key={index}>{client}</li>
//               ))}
//             </ul>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// clients.tsx

// import React, { useEffect, useState } from 'react';
// import { endpoint } from '../../Utils/Utils';
// import './clients.scss';

// interface Client {
//   client_name: string[];
// }

// export function Clients() {
//   const [clients, setClients] = useState<Client[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchClients() {
//       try {
//         const response = await fetch(endpoint + 'allClients');
//         if (!response.ok) {
//           throw new Error('Failed to fetch clients');
//         }
//         const data = await response.json();
//         setClients(data.map((client_name: string[]) => ({ client_name })));
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching clients:', error);
//         // Handle error, e.g., show an error message
//       }
//     }

//     fetchClients();
//   }, []);

//   const flattenClientNames = (clients: Client[]) => {
//     return clients.reduce((flattenedClients: string[], client: Client) => {
//       return flattenedClients.concat(client.client_name);
//     }, []);
//   };

//   const groupClientsByFirstLetter = (clients: string[]) => {
//     return clients.reduce((groupedClients: Record<string, string[]>, client: string) => {
//       const firstLetter = (client[0] || '').toUpperCase();
//       groupedClients[firstLetter] = groupedClients[firstLetter] || [];
//       groupedClients[firstLetter].push(client);
//       return groupedClients;
//     }, {});
//   };

//   const flattenedClientNames = flattenClientNames(clients);
//   const groupedClients = groupClientsByFirstLetter(flattenedClientNames);

//   useEffect(() => {
//     console.log('Grouped clients:', groupedClients);
//   }, [groupedClients]);

//   const sortedLetters = Object.keys(groupedClients).sort();

//   // Divide letters into two columns
//   const midIndex = Math.ceil(sortedLetters.length / 2);
//   const firstColumn = sortedLetters.slice(0, midIndex);
//   const secondColumn = sortedLetters.slice(midIndex);

//   return (
//     <div className="grouped-clients">
//       {loading ? (
//         <p>Loading clients...</p>
//       ) : (
//         <div className="columns">
//           <div className="column">
//             {firstColumn.map((letter) => (
//               <div key={letter} className="letter-box">
//                 <h3>{letter}</h3>
//                 <ul>
//                   {groupedClients[letter].map((client, index) => (
//                     <li key={index}>{client}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//           <div className="column">
//             {secondColumn.map((letter) => (
//               <div key={letter} className="letter-box">
//                 <h3>{letter}</h3>
//                 <ul>
//                   {groupedClients[letter].map((client, index) => (
//                     <li key={index}>{client}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { endpoint } from '../../Utils/Utils';
import './clients.scss';

interface Client {
  client_name: string[];
}

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClients() {
      try {
        const response = await fetch(endpoint + 'allClients');
        if (!response.ok) {
          throw new Error('Failed to fetch clients');
        }
        const data = await response.json();

        // Use Set to filter out duplicate client names
        const uniqueClientNamesSet = new Set<string>();
        const filteredData = data.filter((client: string[]) => {
          const clientName = client[0];
          if (!uniqueClientNamesSet.has(clientName)) {
            uniqueClientNamesSet.add(clientName);
            return true;
          }
          return false;
        });

        setClients(filteredData.map((client_name: string[]) => ({ client_name })));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching clients:', error);
        // Handle error, e.g., show an error message
      }
    }

    fetchClients();
  }, []);

  const flattenClientNames = (clients: Client[]) => {
    return clients.reduce((flattenedClients: string[], client: Client) => {
      return flattenedClients.concat(client.client_name);
    }, []);
  };

  const groupClientsByFirstLetter = (clients: string[]) => {
    return clients.reduce((groupedClients: Record<string, string[]>, client: string) => {
      const firstLetter = (client[0] || '').toUpperCase();

      // Check for duplicate client_name within each group
      if (!groupedClients[firstLetter]?.includes(client)) {
        groupedClients[firstLetter] = groupedClients[firstLetter] || [];
        groupedClients[firstLetter].push(client);
      }

      return groupedClients;
    }, {});
  };

  const flattenedClientNames = flattenClientNames(clients);
  const groupedClients = groupClientsByFirstLetter(flattenedClientNames);

  useEffect(() => {
    console.log('Grouped clients:', groupedClients);
  }, [groupedClients]);

  const sortedLetters = Object.keys(groupedClients).sort();

  // Divide letters into two columns
  const midIndex = Math.ceil(sortedLetters.length / 2);
  const firstColumn = sortedLetters.slice(0, midIndex);
  const secondColumn = sortedLetters.slice(midIndex);

  return (
    <div className="grouped-clients">
      {loading ? (
        <p>Loading clients...</p>
      ) : (
        <div className="columns">
          <div className="column">
            {firstColumn.map((letter) => (
              <div key={letter} className="letter-box">
                <h3>{letter}</h3>
                <ul>
                  {groupedClients[letter].map((client, index) => (
                    <li key={index}>{client}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="column">
            {secondColumn.map((letter) => (
              <div key={letter} className="letter-box">
                <h3>{letter}</h3>
                <ul>
                  {groupedClients[letter].map((client, index) => (
                    <li key={index}>{client}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}




