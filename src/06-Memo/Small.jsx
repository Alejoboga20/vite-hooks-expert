import React from 'react';

export const Small = React.memo(({ value }) => {
	console.log('Render again');

	return <small>{value}</small>;
});
