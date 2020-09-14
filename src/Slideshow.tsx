import React, { Component } from "react";
type slideType = {
	id: string,
	image: string,
	title: string;
}
interface SlideshowProps {
	slides: slideType[];
}
interface SlideshowState {
	count: number;
}
class Slide extends Component<SlideshowProps,SlideshowState> {
	constructor(props: SlideshowProps) {
		super(props);
		this.state = {count: 0};
	}
	changeSlide() {
		this.setState({count: (this.state.count+1)%this.props.slides.length});
	}
	setSlide(n: number) {
		this.setState({count: n});
	}
	render() {
		return (
			<div className="Slideshow">
				<Display count={this.state.count} slides={this.props.slides} setSlide={this.setSlide.bind(this)} changeSlide={this.changeSlide.bind(this)}/>
			</div>
		);
	}
}
const Display = (props: {count: number, slides: slideType[], setSlide: (n: number) => void, changeSlide: () => void}) => {
	return (
		<div className="splash">
			<div className={`div1 ${props.count === 0 ? "active" : "inactive"}`} onClick={() => props.setSlide(0)}>
				<img src={props.slides[0].image} alt=""/>
				<div>
					<p className="titlefont">{props.slides[0].title}</p>
				</div>
			</div>
			<div className={`div2 ${props.count === 1 ? "active" : "inactive"}`} onClick={() => props.setSlide(1)}>
				<img src={props.slides[1].image} alt=""/>
				<div>
					<p className="titlefont">{props.slides[1].title}</p>
				</div>
			</div>
			<div className={`div3 ${props.count === 2 ? "active" : "inactive"}`} onClick={() => props.setSlide(2)}>
				<img src={props.slides[2].image} alt=""/>
				<div>
					<p className="titlefont">{props.slides[2].title}</p>
				</div>
			</div>
			<div className="div4">
				<div>
					<h1 className="title">{props.slides[props.count].title}</h1>
				</div>
			</div>
			<div className="div5">
				<img src={props.slides[props.count].image} alt=""/>
				<div className="btnWrapper">
					<a className="button" onClick={() => props.changeSlide()}>>></a>
				</div>
			</div>
		</div>
	);
}
const slides: slideType[] = [
	{
		id: "slide1",
		image: "https://via.placeholder.com/750x450?text=1",
		title: "Test1",
	},
	{
		id: "slide2",
		image: "https://via.placeholder.com/750x450?text=2",
		title: "Test2",
	},
	{
		id: "slide3",
		image: "https://via.placeholder.com/750x450?text=3",
		title: "Test3",
	},
];
function Slideshow() {
	return (
		<Slide slides={slides}/>
	);
}

export default Slideshow;
