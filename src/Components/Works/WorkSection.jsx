import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";

const WorkSection = () => {
	const worksData = useSelector((state) => state.data.works);
	return (
		<>
			<div className="grid grid-cols-1 gap-12 py-3 mt-6 overflow-hidden md:grid-cols-2 xl:grid-cols-3">
				{worksData.map(({ title, sourceLink, liveDemo, image, id }) => (
					<div
						key={id}
						className="overflow-hidden rounded-lg"
					>
						<motion.div
							initial={{
								opacity: 0,
								y: -50,
							}}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								ease: "linear",
								delay: id * 0.5,
							}}
							className="overflow-hidden cursor-pointer img "
						>
							<img
								src={image}
								alt={title}
								className="rounded-lg"
							/>
						</motion.div>
						<motion.div
							initial={{ x: -80, opacity: 0 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, ease: "linear", delay: id * 0.5 }}
							className="flex flex-row-reverse justify-between py-2"
						>
							<div className="flex space-x-1">
								<a href={liveDemo}>
									<HiOutlinePencilAlt className="w-6 h-6 dark:text-white text-[#111e27] transition-all duration-300 transform scale-100 hover:scale-110" />
								</a>
								<a href={sourceLink}>
									<AiOutlineGithub className="w-6 h-6 dark:text-white text-[#111e27] transition-all duration-300 transform scale-100 hover:scale-110" />
								</a>
							</div>
							<div className="text-sm text-[#111e27] dark:text-[#ffce45] font-semibold">
								{title}
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</>
	);
};

export default WorkSection;
