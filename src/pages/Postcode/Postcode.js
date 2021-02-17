import React, { useState } from "react";
import "./Postcode.less";
import Crumbs from "./../../components/crumbs/crumbs";
import { Card, Input, Button, Table, message } from "antd";
import untils from "./../../utils/date";
import { postcodeApi } from "./../../api/postCodeSearch";
export default function PostCode() {
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchList, setSearchList] = useState([]);
  const [pagination, setPagination] = useState();
//   const [page, setPage] = useState(1);
  // 表格表头
  const columns = [
    {
      align: "center",
      title: "省份",
      dataIndex: "province",
    },
    {
      align: "center",
      title: "城市",
      dataIndex: "city",
    },
    {
      align: "center",
      title: "县",
      dataIndex: "area",
    },
    {
      align: "center",
      title: "地区",
      dataIndex: "address",
    },
    {
      align: "center",
      title: "邮编",
      dataIndex: "postCode",
    },
  ];
  // 查询请求
  function search(page) {
    if (region === "") {
      message.error("请输入内容后查询");
    } else {
      postcodeApi(region, page).then((res) => {
        console.log(res);
        setLoading(false);
        setSearchList(res.data.result.postCodeList);
    
        setPagination(
          untils.pageination(500, (current) => {
            console.log("当前页：" + current);
            search(current);
          })
        );
      });
    }
  }
  return (
    <div className="postcode">
      <Crumbs />
      <Card className="postcodeSearch">
        <Input
          onChange={(e) => setRegion(e.target.value)}
          value={region}
          className="ipt_postcode"
          placeholder="请输入省份名"
        />
        <Button className="btn_search" type="primary" onClick={() => search(1)}>
          查询
        </Button>
        <Button className="btn_search" onClick={() => setRegion("")}>
          重置
        </Button>
      </Card>
      <Card>
        <Table
          columns={columns}
          loading={loading}
          dataSource={searchList}
          rowKey={(row, index) => index.toString()}
          pagination={pagination}
        />
      </Card>
    </div>
  );
}
