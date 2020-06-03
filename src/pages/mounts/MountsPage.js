import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MountsPage = () => {
  const [mounts, setMounts] = React.useState([]);

  React.useEffect(() => {
    const asyncGetMounts = async () => {
      try {
        const { data } = await axios.get(`https://xivapi.com/mount`);
        setMounts(data.Results);
      } catch (err) {
        console.error(err);
      }
    };
    asyncGetMounts();
  }, []);

  return (
    <div>
      <ul
        className="m-4"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        }}
      >
        {mounts.map(({ ID, Icon, Name, Url }) => {
          return (
            Name && (
              <li>
                <Link className="flex flex-col" to="/mounts">
                  <img src={`https://xivapi.com${Icon}`} />
                  <h2 className="text-center capitalize font-semibold">
                    {Name}
                  </h2>
                </Link>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default MountsPage;
