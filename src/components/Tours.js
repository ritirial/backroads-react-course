import { tours } from "../data"
import Title from "./Title"
import Tour from "./Tour";

const Tours = () => {
	return (
		<section className="section" id="tours">
			<Title first='featured' second='tours' />

			<div className="section-center featured-center">

				{tours.map((tour) => {
					const { id } = tour;
					return (
						<Tour key={id} {...tour} />
					)
				})}


			</div>
		</section>
	)
}
export default Tours