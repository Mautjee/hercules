import React, { FC, useEffect, useState } from "react";
import { DashboardContainer } from "./styles";
import { Searchbar, UserTable } from "../../components";
import { useQuery } from "react-query";
import { User, UserList } from "../../types";
import { useLimitUser } from "../../service/api/userApi";

export const Dashboard: FC = () => {
  const [search, setSearch] = useState("");
  const { data, isSuccess } = useLimitUser();
  const [filterdUserList, setfilterdUserList] = useState<User[]>([]);

  useEffect(() => {
    if (isSuccess) {
      setfilterdUserList(data);
    }
  }, []);

  return (
    <DashboardContainer>
      <h1>Hercules leden dashboard</h1>
      <Searchbar />
      <UserTable list={filterdUserList} />
    </DashboardContainer>
  );
};
