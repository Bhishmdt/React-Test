import React, { useEffect, useState } from 'react';
import './App.css';
import Locations from './components/Location';
import LocationLoadingComponent from './components/LocationLoading'

function App() {
	const LocationLoading = LocationLoadingComponent(Locations);
	const [appState, setAppState] = useState({
		loading: false,
		locations: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:8000/manufacturing/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((locations) => {
        console.log(locations)
				setAppState({ loading: false, locations: locations });
			});
	}, [setAppState]);
	return (
		<div className="App">
			<h1>Locations</h1>
			<LocationLoading isLoading={appState.loading} location={appState.locations} />
		</div>
	);
}
export default App;
