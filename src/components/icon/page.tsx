import React from 'react';
import type { SVGProps } from 'react';

export default function Hamburger(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7 11.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9M7 9.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m10-10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></path></svg>);
}