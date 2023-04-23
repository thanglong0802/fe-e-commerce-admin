import React, { useState } from "react";
import Crud from "../../common/crud/Crud";
import Search from "../../common/search/Search";
import "./css/style.css";

function Content() {
  const fakeData = [
    {
      id: 1,
      name: "May do huyet ap",
      status: "CON HANG",
    },
    {
      id: 2,
      name: "May do nhiet do",
      status: "CON HANG",
    },
    {
      id: 3,
      name: "Khau trang",
      status: "CON HANG",
    },
  ];
  const [data, setData] = useState(fakeData);
  return (
    <>
      <div className="content">
        <Crud />
        <div className="data-product">
          <div>
            <Search />
          </div>
          <div>
            <form action="" method="post">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Ten danh muc</th>
                    <th scope="col">Trang thai</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((product) => (
                    <tr>
                      <th scope="row">{product.id}</th>
                      <td>{product.name}</td>
                      <td>{product.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>
          </div>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              provident enim dolor ex quisquam recusandae excepturi accusamus
              tempora voluptatem, corrupti officia earum, similique dolores
              eaque? Temporibus, eum cupiditate. Consequatur, ullam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              provident enim dolor ex quisquam recusandae excepturi accusamus
              tempora voluptatem, corrupti officia earum, similique dolores
              eaque? Temporibus, eum cupiditate. Consequatur, ullam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              provident enim dolor ex quisquam recusandae excepturi accusamus
              tempora voluptatem, corrupti officia earum, similique dolores
              eaque? Temporibus, eum cupiditate. Consequatur, ullam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              provident enim dolor ex quisquam recusandae excepturi accusamus
              tempora voluptatem, corrupti officia earum, similique dolores
              eaque? Temporibus, eum cupiditate. Consequatur, ullam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              provident enim dolor ex quisquam recusandae excepturi accusamus
              tempora voluptatem, corrupti officia earum, similique dolores
              eaque? Temporibus, eum cupiditate. Consequatur, ullam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              provident enim dolor ex quisquam recusandae excepturi accusamus
              tempora voluptatem, corrupti officia earum, similique dolores
              eaque? Temporibus, eum cupiditate. Consequatur, ullam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              provident enim dolor ex quisquam recusandae excepturi accusamus
              tempora voluptatem, corrupti officia earum, similique dolores
              eaque? Temporibus, eum cupiditate. Consequatur, ullam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              provident enim dolor ex quisquam recusandae excepturi accusamus
              tempora voluptatem, corrupti officia earum, similique dolores
              eaque? Temporibus, eum cupiditate. Consequatur, ullam.
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                provident enim dolor ex quisquam recusandae excepturi accusamus
                tempora voluptatem, corrupti officia earum, similique dolores
                eaque? Temporibus, eum cupiditate. Consequatur, ullam.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                provident enim dolor ex quisquam recusandae excepturi accusamus
                tempora voluptatem, corrupti officia earum, similique dolores
                eaque? Temporibus, eum cupiditate. Consequatur, ullam.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                provident enim dolor ex quisquam recusandae excepturi accusamus
                tempora voluptatem, corrupti officia earum, similique dolores
                eaque? Temporibus, eum cupiditate. Consequatur, ullam.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                provident enim dolor ex quisquam recusandae excepturi accusamus
                tempora voluptatem, corrupti officia earum, similique dolores
                eaque? Temporibus, eum cupiditate. Consequatur, ullam.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                provident enim dolor ex quisquam recusandae excepturi accusamus
                tempora voluptatem, corrupti officia earum, similique dolores
                eaque? Temporibus, eum cupiditate. Consequatur, ullam.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
