"use client"
import { Button } from "../ui/button";
import { Typewriter } from "react-simple-typewriter";

export default function Login() {

	return (
		<>
			<div className="min-h-screen w-full bg-white bg-[radial-gradient(circle,_#bfbfbf_1px,_transparent_1px)] bg-[size:16px_16px] border-border border-2 flex flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center gap-6 mt-[-90]">
					<h1 className={`text-6xl font-heading flex flex-row`}>
						<p>G U A V A</p>
					</h1>
					<div className="flex flex-row gap-0 text-2xl">

						<Typewriter
							words={["cook.", "share.", "inspire."]}
							loop={0}
							cursor={true}
						/>

					</div>
					<Button className="h-12 text-base font-heading w-28">Login</Button>
					<Button className="bg-[#ff6b6b] h-12 text-base font-heading w-28">Register</Button>

					<p className="font-bold relative top-72">build with {"❤️"} by <a target="_blank" href="https://github.com/kevindotklein"><u>kevin</u></a></p>
				</div>
			</div>
		</>
	);
}
