import React from "react";
import { useState, useEffect } from "react";

const useOnline = () => {
	const [isOnline, setIsOnline] = useState(true);

	useEffect(() => {
		// check if user is online
		window.addEventListener("online", () => {
			setIsOnline(true);
		});

		// check if user is offline
		window.addEventListener("offline", () => {
			setIsOnline(false);
		});
	}, []);

	return isOnline; // returns either true or false
};

export default useOnline;
