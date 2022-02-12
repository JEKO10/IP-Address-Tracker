import { useGlobalContext } from "../context";

function Info() {
  const { address } = useGlobalContext();

  console.log(address);

  return (
    <section className="info">
      <div>
        <h5>IP Adress</h5>
      </div>
      <div>
        <h5>Location</h5>
      </div>
      <div>
        <h5>Timezone</h5>
      </div>
      <div>
        <h5>Ips</h5>
      </div>
    </section>
  );
}

export default Info;
