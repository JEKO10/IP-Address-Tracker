import { useGlobalContext } from "../context";

function Info() {
  const { address } = useGlobalContext();

  return (
    <>
      {address.length !== 0 ? (
        <section className="info">
          <div>
            <h5>IP Adress</h5>
            <h2>{address.ip}</h2>
          </div>
          <div>
            <h5>Location</h5>
            <h2>
              {address.location.region}, {address.location.country}
            </h2>
          </div>
          <div>
            <h5>Timezone</h5>
            <h2>{address.location.timezone}</h2>
          </div>
          <div>
            <h5>Ips</h5>
            <h2>{address.as.name}</h2>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Info;
