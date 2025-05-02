const Clients = () => {
  const clientsData = [
    { id: 1, image: "assets/img/partners/1.png" },
    { id: 2, image: "assets/img/partners/2.png" },
    { id: 3, image: "assets/img/partners/3.png" },
    { id: 4, image: "assets/img/partners/4.png" },
    { id: 5, image: "assets/img/partners/5.png" },
    { id: 6, image: "assets/img/partners/6.png" },
    { id: 7, image: "assets/img/partners/7.png" },
    { id: 8, image: "assets/img/partners/8.png" },
  ];

  return (
    <div className="elisc_tm_partners w-full float-left mb-[120px] py-0 px-[20px]">
      <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
        <div className="elisc_tm_title w-full float-left">
          <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
            - Clients
          </span>
          <h3 className="text-[40px] font-extrabold">
            Customers &amp; clients
          </h3>
        </div>
        <div className="partners_inner w-full float-left clear-both overflow-hidden rounded-[10px] mt-[58px]">
          <ul>
            {clientsData.map((client) => (
              <li key={client.id}>
                <div className="list_inner">
                  <img src={client.image} alt="client Image" />
                  <a
                    className="elisc_tm_full_link absolute inset-0 z-5"
                    href="#"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Clients;
