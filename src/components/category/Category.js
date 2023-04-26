import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProduct } from "../../app/actons/categoryAction";
import moment from "moment/moment";

function Category() {
  const { id } = useParams();
  console.log("ID Params: " + id);

  // const [ids, setIds] = useState();
  // console.log("IDS Params: " + ids);

  const [data, setData] = useState([]);

  const products = useSelector((state) => state.category.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct(id));
  }, [id]);
  console.log("========================");
  return (
    <>
      <div>
        <form action="" method="post">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Ten danh muc</th>
                <th scope="col">Thoi gian tao</th>
                <th scope="col">Trang thai</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <th>{moment().format(product.created_at)}</th>
                  <td>{product.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default Category;
