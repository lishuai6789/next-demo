import { Button, Input, Pagination, PaginationProps, Table } from "antd";
import { ReactNode, useEffect, useState, } from "react";
const A = (child: ReactNode) => {
  return (
    <main>
      <div>{child}</div>
      <footer>
        <p>This is a footer</p>
      </footer>
    </main>
  )
};
interface ConfigType {
  header: {
    columns: [
      { label: string, type: string, }
    ]
  },
  main: {
    table: {
      columns: {
        index?: false,
        checked?: false,
      }
    },
    pagination: {

    },
  }
};
const HighMyPage = (config: ConfigType) => {
  return () => {
    const [paginationInfo, setPaginationInfo] = useState({
      currentPage: 1,
      pageSize: 10,
      total: 0,
    });
    const handleChange: PaginationProps['onChange'] = (page, pageSize) => {
      setPaginationInfo((prev) => {
        return {
          currentPage: page,
          pageSize: pageSize,
          total: prev.total,
        };
      });
    };
    return (
      <div>
        <header>
          {
            config.header.columns.map((item) => {
              return (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <Input type={item.type}></Input>
                </div>
              )
            })
          }
        </header>
        <div>
          <Table bordered>

          </Table>
          <Pagination current={paginationInfo.currentPage} pageSize={paginationInfo.pageSize} defaultCurrent={1} total={paginationInfo.total} onChange={handleChange}></Pagination>
        </div>
      </div>
    )
  }
}
const Child = () => {
  const [qq, setQQ] = useState(0);
  const handleClick = () => {
    setQQ((prev) => prev + 1);
  };
  useEffect(() => {
    console.log("WWFR#R@$@#$#@");
  }, []);
  return (
    <div>
      <Button onClick={handleClick}>{qq}</Button>
    </div>
  )
}

export default function Home() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      {A(Child())}
      <div>Hello World</div>
      <div>counter:   {counter}</div>
    </div>
  )
}
