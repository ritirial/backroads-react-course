const PageLink = (props) => {
	const { href, text, itemClass } = props;
	return (
		<li>
			<a href={href} className={itemClass}> {text} </a>
		</li>
	)
}
export default PageLink