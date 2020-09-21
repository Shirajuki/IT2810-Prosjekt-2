import React, { Component } from "react";
import Poem from "./Poem";
import InstallationDisplay from "./InstallationDisplay";

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
				<div className="bigPoetry">
					<div className="poetryBox">
						<Poem title={this.props.slides[this.state.count].title} />
					</div>
				</div>
			</div>
		);
	}
}
const Display = (props: {count: number, slides: slideType[], setSlide: (n: number) => void, changeSlide: () => void}) => {
	return (
		<div className="splash">
			<div className={`div1 ${props.count === 0 ? "active" : "inactive"}`} onClick={() => props.setSlide(0)}>
				<InstallationDisplay title={props.slides[0].title}></InstallationDisplay>
				<div>
					<p className="titlefont">{props.slides[0].title}</p>
				</div>
			</div>
			<div className={`div2 ${props.count === 1 ? "active" : "inactive"}`} onClick={() => props.setSlide(1)}>
				<InstallationDisplay title={props.slides[1].title}></InstallationDisplay>
				<div>
					<p className="titlefont">{props.slides[1].title}</p>
				</div>
			</div>
			<div className={`div3 ${props.count === 2 ? "active" : "inactive"}`} onClick={() => props.setSlide(2)}>
				<InstallationDisplay title={props.slides[2].title}></InstallationDisplay>
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
				<InstallationDisplay title={props.slides[props.count].title}></InstallationDisplay>
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
		title: "A Wall Flower",
	},
	{
		id: "slide2",
		image: "https://via.placeholder.com/750x450?text=2",
		title: "In the Black Forest",
	},
	{
		id: "slide3",
		image: "https://via.placeholder.com/750x450?text=3",
		title: "The Birch-Tree at Loschwitz",
	},
];
function Slideshow() {
	return (
		<Slide slides={slides}/>
	);
}

export default Slideshow;
