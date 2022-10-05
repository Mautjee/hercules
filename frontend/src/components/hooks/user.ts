import { isIS } from "@mui/material/locale";
import { useEffect, useState } from "react";
import { useLimitUser, useSearchUser} from "../../service/api";
import { User } from "../../types";

export const useUser = () =>{
	const [filterdUserList, setFilterdUserList] = useState<User[]>([]);
	const [search,setSearch] = useState("");	
	const {data,isSuccess} = useLimitUser();

	useEffect(() => {
		
		if(!isSuccess) return;
		setFilterdUserList(data);
	},[isSuccess])

	const searchForUser = (input:string) =>{
		const searchUser = useSearchUser(input);
		if(!searchUser.isSuccess) return;
		setFilterdUserList(searchUser.data)
	}

	return [search,setSearch]
} 