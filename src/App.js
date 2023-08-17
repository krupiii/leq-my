
// import { useState } from 'react';

import './App.css';
// import Input from './components/Input';

// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Footer from './components/Footer';
// import Demo from './components/Demo/Demo';
// import Navbar from './components/Navbar/Navbar1';
// import Array from './components/Array';
// import Input from './components/Input';
// import Krupali from './components/Krupali'
// import Navbarnew from './components/NewNavbar/Navbarnew';
// import AddApp from './components/DrillingProps/AddApp';
// import List from './components/DrillingProps/List';
// import PasswordInput from './components/CheckBox/PasswordInput';
// import Key from './components/KeyLog/Key'
// import Table from './components/TableInput/Table'
// import Bootstrap from './components/Bootstrap';
// import Disable from './components/DisableButton/Disable';
// import InputValid from './components/Effect/InputValid'
// import TableInput from './components/Effect/TableInput'
// import Pagination from './components/Pagination/Pagination'
// import UseCall1 from './components/UseEffect1/UseCall1'
// import JsonPagination from './components/Pagination/JsonPagination'
// import JsonPlace from './components/Pagination/JsonPlace';
// import Creditcard from './components/Credit/Creditcard';

//1.New Project React-Router-Dom
// import Navbar1 from './components/Navbar1/Navbar1';
// import Home from './components/Navbar1/Home';
// import Faqs from './components/Navbar1/Faqs';
// import About from './components/Navbar1/About';
// import Contect from './components/Navbar1/Contect';
// import { BrowserRouter, Route, Routes } from "react-router-dom";





function App() {

	// const navmenu = {
	// 	ob1: 'Hidden barnd',
	// 	ob2: 'Home',
	// 	ob3: 'Link',
	// 	ob4: 'Disabled',

	// }
	// const [allData, setAllData] = useState([])


	// const submitData = (event) => {
	// 	event.preventDefault()


	// 	const obj = {
	// 		name: event.target.name.value,
	// 		email: event.target.email.value,
	// 		password: event.target.password.value,
	// 		textarea: event.target.textarea.value,
	// 		gender: event.target.gender.value,

	// 	}


	// 	setAllData([...allData, obj])
	// 	console.log(obj);

	// 	event.target.name.value = ""
	// 	event.target.email.value = ""
	// 	event.target.password.value = ""
	// 	event.target.textarea.value = ""
	// 	event.target.gender.value = ""
	// 	event.target.reset()
	// }

	// const deleteData = (id) => {
	// 	alert(id + 1);
	// }
	// const deleteData = (id) => {
	// 	const newData = allData.filter((ele, index) => {
	// 		return index !== id
	// 	})
	// 	setAllData(newData)
	// }

	return (
		<>
			{/* <Navbar /> */ }
			{/* <Hero /> */ }
			{/* <Footer /> */ }
			{/* <Demo /> */ }
			{/* <Navbar /> */ }
			{/* <Array />  <Input />  <Krupali /> */ }
			{/* /<Navbarnew navmenu={ navmenu } /> */ }
			{/* <AddApp */ }
			{/* submitData={ submitData } /> */ }
			{/* <List */ }
			{/* allData={ allData } */ }
			{/* deleteData={ deleteData } /> */ }
			{/* <PasswordInput /> */ }
			{/* <Key /> */ }
			{/* <Table /> */ }
			{/* <Bootstrap /> */ }
			{/* <Disable /> */ }
			{/* <InputValid /> */ }
			{/* <TableInput /> */ }
			{/* <Pagination /> */ }
			{/* <UseCall1 /> */ }
			{/* <JsonPagination /> */ }
			{/* <JsonPlace /> */ }
			{/* <Creditcard /> */ }
			{/* <Navbar1 /> */ }




			{/* <div>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={ <Home /> } />
						<Route path='/about' element={ <About /> } />
						<Route path='/faqs' element={ <Faqs /> } />
						<Route path='/contect' element={ <Contect /> } />
					</Routes>
				</BrowserRouter>
			</div> */}
		</>
	);
}

export default App;














// import React, { useState } from 'react'

// const App = () => {

// 	const [checkbox, setCheckbox] = useState(false)
// 	console.log(checkbox);

// 	const [Name, setName] = useState('Krupali')

// 	const changeSetName = (e) => {
// 		console.log('e:::', e.target.value);
// 		setName(e.target.value)
// 	}

// 	const changeSetRadio = (e) => {
// 		console.log(e.target.value);
// 		console.log(e.target.checked);
// 	}

// 	const changeSetcheckbox = (e) => {
// 		console.log(e.target.value);
// 		console.log(e.target.checked);
// 		changeSetcheckbox(!checkbox)
// 	}
// 	return (
// 		<>
// 			<div>
// 				<input type="text" onChange={ changeSetName } value={ Name } />
// 				<input
// 					type="radio"
// 					name='gender'
// 					onChange={ changeSetRadio }
// 					value={ 'Male' } />
// 				Male

// 				<input
// 					type="radio"
// 					name='gender'
// 					onChange={ changeSetRadio }
// 					value={ 'Female' } />
// 				Female

// 				<input
// 					type="checkbox"
// 					checked={ checkbox ? checked : '' } onChange={ changeSetcheckbox }
// 					value={ 'hello' } />
// 				Hello

// 				<input
// 					type="checkbox"
// 					onChange={ changeSetcheckbox }
// 					value={ 'Krupali ' } />
// 				Krupali

// 				<input type="checkbox"
// 					onChange={ changeSetcheckbox }
// 					value={ 'Disha' } />
// 				Disha

// 			</div>
// 		</>
// 	)
// }

// export default App











