import React from "react";
import { Table as TableAntd } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { routerActions } from "../../features/router/routerSlice";
import {
  requestListActions,
  requestListLoading,
  selectListRequests,
} from "../../features/requestList/requestListSlice";
import Select from "../../components/Select";

const Table = () => {
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const loading = useSelector(requestListLoading);
  const requests = useSelector(selectListRequests);

  React.useEffect(() => {
    dispatch(requestListActions.fetchRequestList());
  }, [dispatch]);

  const handleChange = (value, type, recordId) => {
    const newPoint = value.split(",").map((c) => +c);
    const findRequest = requests.find((r) => r.key === recordId);
    const newRoutePoints =
      type === "destination"
        ? {
            original: findRequest.original,
            destination: newPoint,
          }
        : {
            original: newPoint,
            destination: findRequest.destination,
          };

    dispatch(routerActions.fetchRoute(newRoutePoints));
  };

  const columns = [
    {
      title: "Заявка",
      dataIndex: "name",
      render: (text, record) => {
        return <p>{text}</p>;
      },
    },
    {
      title: "Погрузка",
      dataIndex: "original",
      render: (text, record) => {
        return (
          <Select
            defaultValue={record.original}
            handleChange={handleChange}
            options={requests.map((rq) => ({
              value: rq.key,
              title: rq.original.join(","),
            }))}
            type="original"
            recordId={record.key}
          />
        );
      },
    },
    {
      title: "Разгрузка",
      dataIndex: "destination",
      render: (text, record) => {
        return (
          <Select
            defaultValue={record.destination}
            handleChange={handleChange}
            options={requests.map((rq) => ({
              value: rq.key,
              title: rq.destination.join(","),
            }))}
            type="destination"
            recordId={record.key}
          />
        );
      },
    },
  ];

  return (
    <TableAntd
      loading={loading}
      scroll={{ x: "max-content" }}
      onRow={(record, index) => {
        return {
          onClick: () => {
            dispatch(
              routerActions.fetchRoute({
                original: record.original,
                destination: record.destination,
              })
            );
            setSelectedRowKeys([index + ""]);
          },
        };
      }}
      rowSelection={{ selectedRowKeys }}
      columns={columns}
      dataSource={requests}
    ></TableAntd>
  );
};

export default Table;
