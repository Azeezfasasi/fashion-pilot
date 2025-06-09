import { useState } from "react";

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "Product Designer",
		review:
			"Job Pilot made my job search so much easier! I found my dream job in just two weeks. The platform is intuitive and the support team is fantastic.",
		avatar: "https://randomuser.me/api/portraits/women/44.jpg",
	},
	{
		name: "Michael Lee",
		role: "Software Engineer",
		review:
			"As an employer, I was able to find top talent quickly. The process was smooth and the candidate pool is impressive.",
		avatar: "https://randomuser.me/api/portraits/men/32.jpg",
	},
	{
		name: "Aisha Bello",
		role: "Marketing Specialist",
		review:
			"I love how easy it is to apply for jobs and track my applications. Highly recommended for job seekers!",
		avatar: "https://randomuser.me/api/portraits/women/68.jpg",
	},
	{
		name: "David Kim",
		role: "HR Manager",
		review:
			"We hired three amazing candidates through Job Pilot. The dashboard and filtering tools are very helpful.",
		avatar: "https://randomuser.me/api/portraits/men/65.jpg",
	},
];

function Testimonial() {
	const [current, setCurrent] = useState(0);

	const prev = () =>
		setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
	const next = () =>
		setCurrent((prev) =>
			prev === testimonials.length - 1 ? 0 : prev + 1
		);

	return (
		<div className="bg-gray-50 pt-10 pb-10 flex flex-col gap-12 items-center justify-start relative">
			<div className="text-[#191f33] text-center font-heading-01-font-family text-2xl sm:text-[40px] leading-8 sm:leading-[48px] font-[500] relative">
				Clients Testimonial
			</div>
			<div className="w-full max-w-xl flex flex-col items-center">
				<div className="relative w-full">
					<div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 min-h-[260px]">
						<img
							src={testimonials[current].avatar}
							alt={testimonials[current].name}
							className="w-16 h-16 rounded-full object-cover border-2 border-primary-500 mb-2"
						/>
						<div className="text-gray-800 text-lg text-center font-medium">
							"{testimonials[current].review}"
						</div>
						<div className="text-primary-600 font-semibold mt-2">
							{testimonials[current].name}
						</div>
						<div className="text-gray-500 text-sm">
							{testimonials[current].role}
						</div>
					</div>
					{/* Slider controls */}
					<button
						className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-primary-50 transition md:-left-8"
						onClick={prev}
						aria-label="Previous testimonial"
					>
						<svg
							width="20"
							height="20"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="text-primary-500"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
					<button
						className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-primary-50 transition md:-right-8"
						onClick={next}
						aria-label="Next testimonial"
					>
						<svg
							width="20"
							height="20"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="text-primary-500"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
				{/* Dots */}
				<div className="flex gap-2 mt-4 justify-center">
					{testimonials.map((_, idx) => (
						<button
							key={idx}
							className={`w-3 h-3 rounded-full ${
								idx === current
									? "bg-primary-500"
									: "bg-gray-300"
							} transition`}
							onClick={() => setCurrent(idx)}
							aria-label={`Go to testimonial ${idx + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;