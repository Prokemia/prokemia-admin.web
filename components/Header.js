import React,{useState} from 'react'
import {Flex, Text,Button,Stack,Divider} from '@chakra-ui/react'
import {Menu,Receipt,Close,Add,HorizontalRule,ArrowForward,Settings,Groups,Tune,Widgets,FactCheck,Inventory,Chat} from '@mui/icons-material';
import {useRouter} from 'next/router'
import styles from '../styles/Home.module.css'

function Header(){
	const [showmenubar,setshowmenubar]=useState(false);
	const router = useRouter();
	return(
		<Flex cursor='pointer' bg='#fff' fontFamily='ClearSans-Bold' h='70px' p='2' justify='space-between' align='center'>
			<Text onClick={(()=>{router.push('/dashboard')})} fontSize='28px' color='#000' fontWeight='bold' >Admin</Text>
			<Flex align='center' gap='2'>
				<Button onClick={(()=>{router.push('/')})} bg='#009393' color='#fff' >Logout</Button>
				{showmenubar ? 
					<Close onClick={(()=>{setshowmenubar(!showmenubar)})}/>
						:
					<Menu onClick={(()=>{setshowmenubar(!showmenubar)})}/> 
				}
				{showmenubar ? 
					<MenuBar setshowmenubar={setshowmenubar} />
						:
					null 
				}
			</Flex>
		</Flex>
	)
}

export default Header;

const navigation=[
	{
		id:1,
		title:'Dashboard',
		link:'dashboard',
		logo:<Widgets/>
	},
	{
		id:2,
		title:'Verification',
		link:'verification',
		logo:<FactCheck/>
	},
	{
		id:3,
		title:'Inventory',
		link:'inventory',
		logo:<Inventory/>
	},
	{
		id:3,
		title:'Orders',
		link:'orders',
		logo:<Receipt/>
	},
	{
		id:4,
		title:'The Hub',
		link:'hub',
		logo:<Chat/>
	},
	{
		id:5,
		title:'Distributors',
		link:'distributors',
		logo:<Groups/>
	},
	{
		id:6,
		title:'Salespersons',
		link:'salespersons',
		logo:<Groups/>
	},
	{
		id:7,
		title:'Manufacturers',
		link:'manufacturers',
		logo:<Groups/>
	},
	{
		id:8,
		title:'Customers',
		link:'customers',
		logo:<Groups/>
	},
	{
		id:9,
		title:'Control',
		link:'controls',
		logo:<Tune/>
	},
	{
		id:10,
		title:'Settings',
		link:'settings',
		logo:<Settings/>
	},
]
const MenuBar=()=>{
	const [active,setActive]=useState(false);
	const [currentValue,setcurrentValue]=useState('');
	const router = useRouter()
	return(
		<Flex className={styles.HeaderNav} direction='column' gap='3' p='4' w='70vw' h='90vh' bg='#090F14' position='absolute' top='70px' right='0px' zIndex='2' overflowY='scroll'>
			{navigation.map((item)=>{
				return(
					<Flex p='1' _hover={{transform:"scale(1.03)",transition:'ease-out 0.9s all',backgroundColor:"#fff",color:"#000"}} key={item.id} align='center' borderBottom='1px solid #fff' color='#fff' borderRadius='5' onClick={(()=>{router.push(`/${item.link}`)})}>
						{item.logo}
						<Text  p='2' fontSize='20px'  mb='0' >{item.title}</Text>
					</Flex>
				)
			})}
		</Flex>
	)
}
