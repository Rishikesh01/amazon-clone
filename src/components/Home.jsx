import { useEffect, useState } from "react";
import "./Home.css";
import { Product } from "./Product";
export const Home = () => {
  const base = "http://localhost:8080/"
  const [isBusy, setIsBusy] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const funcData = async () => {
      const rsp = await fetch("http://localhost:8080/home")
      const json = await rsp.json()
      setData(json)
      setIsBusy(false)
    }

    funcData()
  }, [])
  return (
    <div className="home">

      <div className="home_contianer">
        {isBusy ? <div></div> :
          <>
            <div className="home_row">
              {
                <Product
                  id={data.main.id}
                  title={data.main.name}
                  price={data.main.price}
                  rating={data.main.rating}
                  image={base + data.main.image}
                />
              }
            </div>
            <div className="home_row">
              {data.first_row.map((item) =>
              (
                <Product
                  id={item.id}
                  title={item.name}
                  price={item.price}
                  rating={item.rating}
                  image={base + item.image}
                />
              )

              )
              }
            </div>

            <div className="home_row">
              {data.second_row.map((item) =>
              (
                <Product
                  id={item.id}
                  title={item.name}
                  price={item.price}
                  rating={item.rating}
                  image={base + item.image}
                />
              )

              )
              }
            </div>
          </>
        }
      </div>


    </div>
  );
};
