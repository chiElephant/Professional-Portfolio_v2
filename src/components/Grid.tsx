import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { gridItems } from '../data';

const Grid = () => {
	return (
		<section
			id='about'
			className='scroll-mt-20 md:scroll-mt-32'>
			<BentoGrid>
				{gridItems.map(
					({
						id,
						title,
						description,
						className,
						img,
						imgClassName,
						titleClassName,
						spareImg,
					}) => (
						<BentoGridItem
							id={id}
							key={id}
							title={title}
							description={description}
							className={className}
							img={img}
							imgClassName={imgClassName}
							titleClassName={titleClassName}
							spareImg={spareImg}
						/>
					)
				)}
			</BentoGrid>
		</section>
	);
};

export default Grid;
