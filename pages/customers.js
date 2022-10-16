import React from 'react'
import {Flex,Text,Button,Input,Image} from '@chakra-ui/react'
import Header from '../components/Header.js'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useRouter} from 'next/router'

function Customers(){
	const router = useRouter()
	return(
		<Flex direction='column'>
			<Header />
			<Text m='2' fontFamily='ClearSans-Bold' fontSize='24px' >Customers</Text>
			<Flex gap='2' p='2' align='center'>
				<Button bg='#eee'>Sort<ArrowDropDownIcon/></Button>
				<Input placeholder='search SalesPersons' bg='#fff' Flex='1'/>
				<SearchIcon />
			</Flex>
			<Flex direction='column'>
				<Customer/>
				<Customer/>
			</Flex>
		</Flex>
	)
}

export default Customers;

const Customer=()=>{
	const router = useRouter()
	return(
		<Flex direction='column' m='1' w='100%' gap='1' bg='#eee' borderRadius='5' p='2'>
			<Text fontWeight='bold'>Name</Text>
			<Text>Email</Text>
			<Text>Company</Text>
			<Text onClick={(()=>{router.push('/customer/1')})} cursor='pointer' color='#009393'>View</Text>
		</Flex>
	)
}