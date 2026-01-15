import { services } from "../data"
import Service from "./Service";
import Title from "./Title"

const Services = () => {
	return (
		<section className="section services" id="services">
			<Title first="our" second="services" />

			<div className="section-center services-center">
				{services.map((service) => {
					const { id } = service;
					return (
						<Service
							key={id}
							{...service} />
					)
				})}
			</div>
		</section>
	)
}
export default Services